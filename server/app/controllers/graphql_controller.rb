class GraphqlController < ApplicationController
  include ::ActionController::Cookies

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]

    current_user = GoogleIDToken::Validator.new.check(cookies[:jwt], ENV['REACT_APP_GOOGLE_CLIENT_ID'])
                   .with_indifferent_access.slice(:email, :name, :given_name, :family_name, :picture)
    
    current_user[:first_name] = current_user.delete :given_name
    current_user[:last_name] = current_user.delete :family_name
    current_user[:img_url] = current_user.delete :picture
    found_user = User.find_by(email: current_user[:email])
    if found_user.nil?
      found_user = User.create!(current_user)
    else
      found_user.update(current_user)
    end

    context = {
      current_user: found_user,
    }
    result = PtEstimatorSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result

  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { error: { message: e.message, backtrace: e.backtrace }, data: {} }, status: 500
  end
end
