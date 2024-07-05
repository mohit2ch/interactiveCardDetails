function cardnameValidation(cardname) {
    if (cardname.length < 3) {
      return {
        valid: false,
        message: "Name should be a minimum of 3 letters",
      };
    } else if (!/^[a-z ,.'-]+$/i.test(cardname)) {
      return {
        valid: false,
        message: "Enter letters only",
      };
    }
    return {
      valid: true,
    };
  }
  function cardnumberValidation(cardnumber) {
    let regex = /^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})$/;
    if (!regex.test(cardnumber)) {
      return {
        valid: false,
        message: "Wrong input, digits only with spaces",
      };
    }
    return {
      valid: true,
    };
  }
  function monthValidation(month) {
    if(month.length != 2){
      return {
        valid: false,
        message: "Enter 2 digits"
      }
    }
    if (!/[0-9]{2}/.test(month)) {
      return {
        valid: false,
        message: "digits only",
      };
    } else if (month < 0 || month > 13) {
      return {
        valid: false,
        message: "Enter valid month",
      };
    }
    return {
      valid: true,
    };
  }
  function yearValidation(year) {
    if(year.length != 2){
      return {
        valid: false,
        message: "Enter 2 digits"
      }
    }
    if (!/[0-9]{2}/.test(year)) {
      return {
        valid: false,
        message: "digits only",
      };
    }

    return {
      valid: true,
    };
  }
  function cvvValidation(cvv) {
    if(cvv.length != 3){
      return {
        valid: false,
        message: "Enter 3 digits"
      }
    }
    if (!/[0-9]{3}/.test(cvv)) {
      return {
        valid: false,
        message: "digits only",
      };
    }

    return {
      valid: true,
    };
  }
  function successHandler() {
    const form = document.querySelector("form");
    const success = document.querySelector(".success");
    form.style.display = "none";
    success.style.display = "block";
  }
  function errorHandler(element, display, value){
    
    const error = document.getElementById(`${element}Error`);
    error.style.display = display;
    error.innerHTML = value;
  }
  function submitHandler(event) {
    event.preventDefault();
    const cardnameOutput = cardnameValidation(document.getElementById("cardholderInput").value);
    const cardnumberOutput = cardnumberValidation(document.getElementById("cardnumberInput").value);
    const monthOutput = monthValidation(document.getElementById("monthInput").value);
    const yearOutput = yearValidation(document.getElementById("yearInput").value);
    const cvvOutput = cvvValidation(document.getElementById("cvvInput").value);
    console.log(cardnameOutput, cardnumberOutput, monthOutput, yearOutput, cvvOutput);
    let isValid = true;
    if(!cardnameOutput.valid){
      errorHandler('cardholder', 'block', cardnameOutput.message);
      isValid = false;
    } else{
      errorHandler('cardholder', 'none', "");
    }
    if(!cardnumberOutput.valid){
      errorHandler('cardnumber', 'block', cardnumberOutput.message);
      isValid = false;
    } else{
      errorHandler('cardnumber', 'none', "")
    }
    if(!monthOutput.valid){
      errorHandler('month', 'block', monthOutput.message);
      isValid = false;
    } else{
      errorHandler('month', 'none', "")
    }
    if(!yearOutput.valid){
      errorHandler('year', 'block', yearOutput.message);
      isValid = false;
    } else{
      errorHandler('year', 'none', "")
    }
    if(!cvvOutput.valid){
      errorHandler('cvv', 'block', cvvOutput.message);
      isValid = false;
    } else{
      errorHandler('cvv', 'none', "")
    }
    if(isValid){
      successHandler();
    }
  }
  function focusHandler(input) {
    if (input == "cardholder") {
      const cardholder = document.getElementById("cardholderInput").value;
      document.getElementById("cardholder").innerHTML = cardholder;
    } else if (input == "cardnumber") {
      const cardnumber = document.getElementById("cardnumberInput").value;
      document.getElementById("cardnumber").innerHTML = cardnumber;
    } else if (input == "month") {
      const month = document.getElementById("monthInput").value;
      document.getElementById("month").innerHTML = month;
    } else if (input == "year") {
      const year = document.getElementById("yearInput").value;
      document.getElementById("year").innerHTML = year;
    } else if (input == "cvv") {
      const cvv = document.getElementById("cvvInput").value;
      document.getElementById("cvv").innerHTML = cvv;
    }
  }
  function continueHandler(){
    document.querySelector('form').style.display = 'block';
    document.querySelector('.success').style.display = 'none';
  }