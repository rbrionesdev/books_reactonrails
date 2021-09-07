Rails.application.routes.draw do
  namespace :api do
    get '/books', to:'books#index'
    put '/books:id', to: 'books#rate'
  end
end
