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
      render_messages('api/shared/messages', "Registration successful", @user, status = :ok)
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(params[:user])
      render_messages('api/shared/messages', "successfully updated", @user, status = :ok)
    else
      render_errors('api/shared/errors', @user.errors)
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
      render_messages('api/shared/messages', "Logged-in successfully", @user, status = :ok)
    end
  end

end
