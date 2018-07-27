Rails.application.routes.draw do
  delete 'api/shopping_cart_item/checkout' => 'api/shopping_cart_item#checkout'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show]
    resources :shopping_cart_item, only: [:index, :show, :create, :update, :destroy]
    resources :search, only: [:index]
  end


  root "static_pages#root"
end
