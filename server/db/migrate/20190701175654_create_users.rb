class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false 
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :img_url, null: false

      t.timestamps
    end
  end
end
