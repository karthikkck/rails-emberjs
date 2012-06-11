class ArticlesController < ApplicationController
  skip_before_filter :authenticate_request, :only => [:index, :show]

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(params[:user])
    unless @article.save
      render_errors('api/shared/errors',@article.errors)
    else
      render_messages('api/shared/messages', "Registration successful", @article, status = :ok)
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update_attributes(params[:article])
      render_messages('api/shared/messages', "successfully updated", @article, status = :ok)
    else
      render_errors('api/shared/errors', @article.errors)
    end
  end

  def delete
    Article.find(params[:id]).destroy
  end

end
