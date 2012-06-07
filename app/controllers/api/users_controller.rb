class Api::UsersController < Api::ApiController

  skip_before_filter :authenticate_request, :only => [:forgot_password, :create, :sign_in]

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(params[:user])
    unless @user.save
      render_errors('api/shared/errors',@user.errors)
    else
      respond_to do |format|
        format.json { render :json=> { user: @user, message: 'successful'}.to_json }
      end
    end
  end

=begin
  def forgot_password
    @user = User.find_by_email(params[:email])
    unless @user.present?
      render_errors('api/shared/errors', 'Email id does not exist')
    else
      respond_to do |format|
        format.json { render :json=> {message: 'Check your email account for changing password'}.to_json }
      end
    end
  end
=end

  def sign_in
    @user = User.find_by_email(params[:email])
    unless @user.present? && @user.authenticate(params[:password])
      render_errors('api/shared/errors', 'Username and password do not match')
    else
      respond_to do |format|
        format.json { render :json=> { user: @user, message: 'Login successful'}.to_json }
      end
    end
  end

end
