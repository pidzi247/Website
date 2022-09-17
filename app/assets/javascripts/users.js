/* global $, global Stripe */
// Document ready function.
$(document).on('turbolinks:load', function(){
  let theForm = $('#premium_form');
  let submitBtn = $('#form-submit-btn');
  
  // Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  // When user clicks form submit button,
  submitBtn.click(function(event){
    // prevent default submission behavior.
    event.preventDefault();
    submitBtn.val("Processing").prop('disabled', true);
    
    // Collect the credit card fields.
    let ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    // Use Stripe JS library to validate correct card number.
    let error = false;
    
    // Validate card number
    if(!Stripe.card.validateCardNumber(ccNum)) {
      error = true;
      alert('The credit card seems to be incorrect!');
    }
    
    // Validate CVC number
    if(!Stripe.card.validateCVC(cvcNum)) {
      error = true;
      alert('The CVC number seems to be incorrect!');
    }
    
    // Validate expiration date
    if(!Stripe.card.validateExpiry(expMonth, expYear)) {
      error = true;
      alert('The expiration date seems to be invalid!');
    }
    
    if(error) {
      //If there are card errors, don't send to Stripe.
      submitBtn.prop('disabled', false).val("Sign Up");
    } else {
      // Send the card info to Stripe.
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
    
    return false;
  });
  
  // Stripe returns a card token.
  function stripeResponseHandler(status, response) {
    // Get the token from the response.
    let token = response.id;
    
    // Inject the card token in a hidden field.
    theForm.append( $('<input type="hidden" name="user[stripe_card_token]">').val(token) );
  }
  
    // Submit form to our Rails app.
    theForm.get(0).submit();
});