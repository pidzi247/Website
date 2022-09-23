class UsersController < ApplicationController
    before_action :authenticate_user!

    def index
        # Pull out all users from database to show on index page
        @users = User.includes(:profile)
    end
    
    # GET to /users/:id
    def show
        # ':id' has to match url path ':id' above
       @user = User.find( params[:id] )    
    end
    
end