class AddFavoriteToSong < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :favorite, :boolean
  end
end
