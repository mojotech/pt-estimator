class CreateEstimates < ActiveRecord::Migration[5.2]
  def change
    create_table :estimates do |t|
      t.integer :point_value, null: false
      t.references :story
      t.references :user

      t.timestamps
    end
  end
end
