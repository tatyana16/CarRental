"use strict"

window.onload = function () {
    let totalEstBtn = document.getElementById("totalEstBtn")
    totalEstBtn.onclick = totalEstBtnClicked;

}

function totalEstBtnClicked() {
    const numberOfDaysField = document.getElementById("numberOfDays");
    let numberOfDays = Number(numberOfDaysField.value);

    const pickupDateField = document.getElementById("pickupDate");
    let dateStr = pickupDateField.value;

    let mo = dateStr.substr(5, 2);  // return mm
    let da = dateStr.substr(8, 2);  // returns dd
    let yr = dateStr.substr(0, 4);  // return yyyy

    let reformattedDateStr = mo + "/" + da + "/" + yr;

    let dateSelected = new Date(reformattedDateStr);
    let dayOfWeek = dateSelected.getDay();

    let carRental = 29.99 * numberOfDays;

    if ((dayOfWeek == 5 && numberOfDays <= 2) || (dayOfWeek == 6 && numberOfDays <= 1)) {
        carRental = numberOfDays * 10;
    }

    let options = 0;

    console.log(numberOfDaysField)
    console.log(numberOfDays, carRental, options)

    const electronicCheckbox = document.getElementById("tollTag");
    if (electronicCheckbox.checked == true) {
        options += (3.95 * numberOfDays);
    }

    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        options += (2.95 * numberOfDays);
    }

    const roadsideCheckbox = document.getElementById("roadSideAss");
    if (roadsideCheckbox.checked == true) {
        options += (2.95 * numberOfDays);
    }

    let surcharge = 0;

    const radioYesBtn = document.getElementById("radioYes")
    if (radioYesBtn.checked == true) {
        surcharge = carRental * .30;
    }

    let totalEst = carRental + options + surcharge;

    console.log(numberOfDays, carRental, options, totalEst)

    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Car rental: " + carRental.toFixed(2);

    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Options " + options.toFixed(2);

    const surchargePara = document.getElementById("surcharge");
    surchargePara.innerHTML = "Under 25 Surcharge: " + surcharge.toFixed(2);

    const totalEstPara = document.getElementById("totalEst");
    totalEstPara.innerHTML = "Total due: " + totalEst.toFixed(2);
}

/*REQUIREMENTS:
   1.  use type=date for pickup date
   2.  use type=number for number of days
   3.  cars are 29.99/day but we have a special
          if you pick up on a Friday for 1-2 days
          OR pick up on a Saturday for 1 day
          THEN the rate is $10/day
HOW DO I KNOW IF A DATE IS ON A FRIDAY ?  (0 = Sunday, 1 = Monday, ...)
HOW DO YO GET THE CURRENT DATE?  let today = new Date();
HOW DO YOU TURN A STRING FORMATTED AS mm/dd/yyyy into a JS date?
   let someVariable = "5/24/2021";  // hint:  get the string from the HTML input field
   let pickDate = new Date(someVariable);
   let dayOfWeek = pickupDate.getDay();
TOTALLY UNRELATED
   if ((name == "Natalie" && noKids <=2) || (name == "Brittany" && noKids == 4)) {
     // do something
   }
   */




