class PagesController < ApplicationController
    # Get request for '/' which is our home page
    def home
        @basic_plan = Plan.find(1)
        @premium_plan = Plan.find(2)
    end
    
    def about
    end
end