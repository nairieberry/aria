class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :channel_name, null: false
      t.string :description
      t.integer :owner_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :channels, :channel_name, unique: true
    add_index :channels, :owner_id
    add_index :channels, :server_id
  end
end