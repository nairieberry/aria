class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :owner_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :messages, :owner_id
    add_index :messages, :channel_id
  end
end