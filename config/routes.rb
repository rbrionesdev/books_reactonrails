Rails.application.routes.draw do
  namespace :api do
    resources :books
    # get "/books", to:"books#index"
    # post "/books", to:"books#create"
    # get "/books/:id", to:"books#show"
    # delete "/books/:id", to:"books#destroy"

    # put "/books:id", to: "books#update"
  end
end
