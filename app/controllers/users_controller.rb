class UsersController < ApplicationController
    
    # GET to /users/:id
    def show
        # ':id' has to match url path ':id' above
       @user = User.find( params[:id] )    
    end
    
end