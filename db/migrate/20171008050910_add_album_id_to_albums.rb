class AddAlbumIdToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :album_id, :integer
  end
end
