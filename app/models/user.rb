class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  belongs_to :plan
  has_one :profile
  
  attr_accessor :stripe_card_token
  # If Pro user passes validations (email, password, etc.),
  # then call Stripe and tell Stripe to set up a subscription
  # upon charging the customer's card.
  # Stripe responds back with customer data
  # Store customer.id as the customer token and save the user.
  def save_with_subscription
    if valid?
      customer = Stripe::Customer.create(email: email, source: stripe_card_token)
      self.stripe_customer_token = customer.id
      save!
    end
  end
end
