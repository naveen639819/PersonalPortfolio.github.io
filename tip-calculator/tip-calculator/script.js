let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeople = document.getElementById("numberOfPeople");
let perPersonTotal = document.getElementById("perPersonTotal");

let PeopleNumber = Number(numberOfPeople.innerText)

function calculateBill(){
  // get bill from user input & convert it into a number
  let billAmount = Number(billTotalInput.value)
  console.log(billAmount)
  

  // get the tip from user & convert it into a percentage (divide by 100)
  let tipPercentage = Number(tipInput.value)/100
  console.log(tipPercentage)
  

  // get the total tip amount
    tipAmount = billAmount*tipPercentage
    console.log(tipAmount)

  

  // calculate the total (tip amount + bill)
  let total = billAmount + tipAmount
  console.log(total)
  

  // calculate the per person total (total divided by number of people)
  let perPersonBill = (total/PeopleNumber).toFixed(2)


  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = perPersonBill


}

function increasePeople(){
    PeopleNumber += 1
    numberOfPeople.innerText = PeopleNumber
    calculateBill()

}

function decreasePeople(){
    if(PeopleNumber == 1){
        return
    }
    PeopleNumber -= 1
    numberOfPeople.innerText = PeopleNumber
    calculateBill()

}