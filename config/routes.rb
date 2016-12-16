Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :show, :index]
    resources :activities, only: [:create, :show, :index]
    resources :follows, only: [:create]
  end
end
