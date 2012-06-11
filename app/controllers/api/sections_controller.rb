class SectionsController < ApplicationController
  skip_before_filter :authenticate_request, :only => [:index, :show]

  def index
    @sections = Section.all
  end

  def show
    @section = Section.find(params[:id])
  end

  def create
    @section = Section.new(params[:user])
    unless @section.save
      render_errors('api/shared/errors',@section.errors)
    else
      render_messages('api/shared/messages', "Registration successful", @section, status = :ok)
    end
  end

  def update
    @section = Section.find(params[:id])

    if @section.update_attributes(params[:section])
      render_messages('api/shared/messages', "successfully updated", @section, status = :ok)
    else
      render_errors('api/shared/errors', @section.errors)
    end
  end

  def delete
    Section.find(params[:id]).destroy
  end

end
