class Api::ApiController < ApplicationController
  before_filter :authenticate_request, :except => [:render_404]
  before_filter :set_default_format
  helper_method :current_user, :request_user

  def render_errors(template = "api/#{controller_name}/errors", errors = [], status = :unprocessable_entity)
    @errors = errors unless errors.blank?
    template = 'api/shared/errors' unless template_exists?("errors", controller_name, false)

    render :json, template: template, status: status
  end

  private

  def current_user
    return nil unless @authentication_token.present?
    @current_user ||= User.find_by_authentication_token(@authentication_token)
  end

  def request_user
    return current_user unless params[:user_id].present?
    @request_user ||= User.find_by_id(params[:user_id])
    render_errors('api/shared/errors', ['users.not_found']) unless @request_user.present?
    @request_user
  end

  def authenticate_request
    logger.info request.headers['HTTP_API_KEY']
    @authentication_token = request.headers['HTTP_API_KEY']
    render_errors('api/shared/errors', message: 'not_authenticated') unless current_user.present?
  end

  def set_default_format
    request.format = "json" unless params[:format]
  end
end
