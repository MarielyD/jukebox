class AddSongLabelToSong < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :song_label, :string, array: true
  end
end
