const nameCard = document.querySelector("#name_card");
const numberCard = document.querySelector("#card_number");
const validityCardMM = document.querySelector("#MM");
const validityCardYY = document.querySelector("#YY");
const cvcCard = document.querySelector("#cvc");

nameCard.addEventListener('input', 
function(){
       document.querySelector("#text_name_card").innerHTML = nameCard.value     
})

numberCard.addEventListener('input', 
function(){
  document.querySelector("#text_number_card").innerHTML = numberCard.value;
    // console.log(numberCard.value)
})

cvcCard.addEventListener('input', 
function(){
    document.querySelector("#text_cvc_card").innerHTML = cvcCard.value
})

validityCardMM.addEventListener('input',
() =>{
    document.querySelector("#text_validity_card_MM").innerHTML = validityCardMM.value
})


function errorMessage() {

    // Get references to the input elements and error message elements
    const nameError = document.getElementById('error_name');
    const cardNumberError = document.getElementById('error_number_card');
    const expDateError = document.getElementById('error_exp_date');
    const cvcError= document.querySelector("#error_cvc");

    //  regex
    const isAlphabet = /^[a-zA-Z-\s]+$/;
    const isNumber = /^[0-9]+$/;
  

    // Check if the name input is valid
    if (nameCard.value.trim() === '' ) {
        nameError.innerHTML = 'Please enter a cardholder name';
        nameCard.style.borderColor = 'red';
        return false;
    } else if(!nameCard.value.match(isAlphabet)){
        nameError.innerHTML = 'Wrong format, only letters';
        nameCard.style.borderColor = 'red';
        return false;
    }else {
        nameError.textContent = '';
        nameCard.style.borderColor = '';
    }

    // Check if the card number input is valid
    if (numberCard.value.trim() === '') {
      cardNumberError.textContent = 'Please enter a valid card number';
      numberCard.style.borderColor = 'red';
      return false;
    } else if(!/^\d+$/.test(numberCard.value)){
        cardNumberError.textContent = 'Card number must contain only digits';
        numberCard.style.borderColor = 'red';
        return false;
    } else if (numberCard.value.length !== 16){
        cardNumberError.textContent = 'Card number must be 16 digits';
        numberCard.style.borderColor = 'red';
        return false;
    }else {
      cardNumberError.textContent = '';
      numberCard.style.borderColor = '';
    }
  
    // Check if the expiration date MM
    if (validityCardMM.value.trim() === '' || validityCardMM.value.length !== 2) {
      expDateError.textContent = 'Can\'t be blank';
      validityCardMM.style.borderColor = 'red';
      return false;
    } else if(!validityCardMM.value.match(isNumber)){
        cvcError.textContent = 'numbers only.';
        cvcCard.style.borderColor = 'red';
    }else{
      expDateError.textContent = '';
      validityCardMM.style.borderColor = '';
    }

     // Check if the expiration date input YY
     if (validityCardYY.value.trim() === '' || validityCardYY.value.length !== 2) {
        expDateError.textContent = 'Can\'t be blank';
        validityCardMM.style.borderColor = 'red';
        return false;
      } else if(!validityCardMM.value.match(isNumber)){
          cvcError.textContent = 'numbers only.';
          cvcCard.style.borderColor = 'red';
      }else{
        expDateError.textContent = '';
        validityCardMM.style.borderColor = '';
      }
  
    // Check if the CVC input is valid
    if (cvcCard.value.trim() === '' || cvcCard.value.length !== 3) {
      cvcError.textContent = 'Please enter a valid CVC';
      cvcCard.style.borderColor = 'red';
      return false;
    } else if(!cvcCard.value.match(isNumber)){
        cvcError.textContent = 'Please enter only digits';
        cvcCard.style.borderColor = 'red';
    } else {
      cvcError.textContent = '';
      cvcCard.style.borderColor = '';
    }
  
    // If all the input elements are valid, submit the form
  return true;
     
    
}

// show thank you section
document.querySelector("#btn_submit").addEventListener("click",
    () =>{
        //console.log("coucou")
        if (errorMessage() == true){
            document.querySelector(".container_form").remove();
            document.querySelector(".container_thank ").style.display = "block";
            document.querySelector("#thk").textContent= `Thank you ${nameCard.value}`
        }
    }
)

// Small message when you click on the continue button
document.querySelector("#btn_continue").addEventListener("click",() =>{
        alert("Thank you for testing! 🥰")
    }
)







// AUTRE METHODE POUR AFFICHER LES CHAMPS D'ERREUR  MAIS PAS ENCORE MAITRISER // 
  
  
// const form = document.getElementById('form');
// const nameCard = document.getElementById('name_card');
// const cardNumber = document.getElementById('card_number');
// const MM = document.getElementById('MM');
// const YY = document.getElementById('YY');
// const cvc = document.getElementById('cvc');

// // Validation function
// function validateField(field, regex, errorMessage) {
//     if (!regex.test(field.value)) {
//       // If the field is invalid, display the custom error message
//       field.nextElementSibling.innerHTML = errorMessage;
//     } else {
//       // If the field is valid, clear the error message
//       field.nextElementSibling.innerHTML = '';
//     }
//   }
  

// // Event listeners for form fields
// nameCard.addEventListener('focus', function() {
//     validateField(nameCard, /^[a-zA-Z\s]*$/, 'Name must contain only letters and spaces');
// });
// nameCard.addEventListener('blur', function() {
//     validateField(nameCard, /^[a-zA-Z\s]*$/, 'Name must contain only letters and spaces');
// });
// cardNumber.addEventListener('focus', function() {
//     validateField(cardNumber, /^[0-9]{16}$/, 'Card number must be 16 digits');
// });
// cardNumber.addEventListener('blur', function() {
//     validateField(cardNumber, /^[0-9]{16}$/, 'Card number must be 16 digits');
// });
// // cardNumber.addEventListener('focus', function() {
// //     // Check if the field contains letters
// //     if (/[a-zA-Z]/.test(cardNumber.value)) {
// //       validateField(cardNumber, /^[0-9]{16}$/, 'Card number must contain only digits');
// //     } else {
// //       // Check if the field contains 16 digits
// //       validateField(cardNumber, /^[0-9]{16}$/, 'Card number must be 16 digits');
// //     }
// //   });
// //   cardNumber.addEventListener('blur', function() {
// //     // Check if the field contains letters
// //     if (/[a-zA-Z]/.test(cardNumber.value)) {
// //       validateField(cardNumber, /^[0-9]{16}$/, 'Card number must contain only digits');
// //     } else {
// //       // Check if the field contains 16 digits
// //       validateField(cardNumber, /^[0-9]{16}$/, 'Card number must be 16 digits');
// //     }
// //   });
  
// MM.addEventListener('focus', function() {
//     validateField(MM, /^[0-9]{2}$/, 'Expiration date must be in the format MM/YY');
// });
// MM.addEventListener('blur', function() {
//     validateField(MM, /^[0-9]{2}$/, 'Expiration date must be in the format MM/YY');
// });
// YY.addEventListener('focus', function() {
//     validateField(YY, /^[0-9]{2}$/, 'Expiration date must be in the format MM/YY');
// });
// YY.addEventListener('blur', function() {
//     validateField(YY, /^[0-9]{2}$/, 'Expiration date must be in the format MM/YY');
// });
// cvc.addEventListener('focus', function() {
//     validateField(cvc, /^[0-9]{3}$/, 'CVC must be 3 digits');
// });
// cvc.addEventListener('blur', function() {
//     validateField(cvc, /^[0-9]{3}$/, 'CVC must be 3 digits');
// });

// // Form submission event listener
// form.addEventListener('submit', function(event) {
//   // Validate all form fields
//   validateField(nameCard, /^[a-zA-Z\s]*$/);
//   validateField(cardNumber, /^[0-9]{16}$/);
//   validateField(MM, /^[0-9]{2}$/);
//   validateField(YY, /^[0-9]{2}$/);
//   validateField(cvc, /^[0-9]{3}$/);

//   // Check if any errors were displayed
//   const errorElements = document.querySelectorAll('.error');
//   let hasErrors = false;
//   for (let i = 0; i < errorElements.length; i++) {
//     if (errorElements[i].innerHTML !== '') {
//         hasErrors = true;
//         break;
//       }
//     }
  
//     // If there are errors, prevent the form from being submitted
//     if (hasErrors) {
//       event.preventDefault();
//     }
//   });