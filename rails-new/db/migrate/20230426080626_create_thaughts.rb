class CreateThaughts < ActiveRecord::Migration[7.0]
  def change
    create_table :thaughts do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
