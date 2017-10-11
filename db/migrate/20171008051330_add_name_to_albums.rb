class AddNameToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :name, :string
    add_column :albums, :artist_name, :string
    add_column :albums, :cover_photo_url, :string
  end
end
