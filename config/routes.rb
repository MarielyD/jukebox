Rails.application.routes.draw do
  resources :songs
  resources :albums do
    resources :songs, controller: 'albums/songs'
  end

  root 'albums#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
