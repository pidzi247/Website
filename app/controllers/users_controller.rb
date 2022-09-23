class UsersController < ApplicationController
    before_action :authenticate_user!

    def index
        
    end
    
    # GET to /users/:id
    def show
        # ':id' has to match url path ':id' above
       @user = User.find( params[:id] )    
    end
    
end