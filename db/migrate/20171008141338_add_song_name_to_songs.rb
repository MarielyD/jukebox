class AddSongNameToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :song_name, :string
    add_column :songs, :song_order, :integer
    add_column :songs, :song_duration, :string
  end
end
