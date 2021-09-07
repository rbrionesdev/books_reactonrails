class Api::BooksController < ApplicationController
  before_action :set_book, only:[:show, :update, :destroy, :rate]
  
  def index
    render json: Book.all
  end

  def show
    render json: @book
  end

  def create
    book = Book.new(book_params)
    if(book.save)
      render json: book
    else
      # this will cause a 422 error
      render json: {errors: book.errors, look:'Hello'}, status: :unprocessable_entity
    end
  end

  def update
    puts "update called"
    if(@book.update(book_params))
      render json: @book
    else
      render json: {error: @book.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @book.destroy
  end

  private

  def book_params
    params.require(:book).permit(:title, :author)
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
