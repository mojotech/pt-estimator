# frozen_string_literal: true

module PTEstimator
  # Defines common elements in the requests done by the Client
  class Resource
    def initialize(url:, attributes: {})
      @url = url
      @attributes = attributes
    end

    def to_request
      { url: @url, payload: @attributes }
    end
  end
end
