class Api::ApiController < ApplicationController
  before_filter :set_default_format

  private
  def set_default_format
    request.format = "json" unless params[:format]
  end
end
