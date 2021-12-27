const elBill = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('.tip');
const elNumberOfPeople = document.querySelector('#people');
const elTipPerPerson = document.querySelector('.calculator__tip-amount-display');
const elTotalPerPerson = document.querySelector('.calculator__total-amount-display');
const elButton = document.querySelector('.btn');
let billValue = 0;
let numberOfPeople = 0;
let tipValue = 0;

elBill.addEventListener('change', ()=>{
    billValue = parseFloat(elBill.value);
    console.log(typeof(billValue))
    return billValue;
})

tipButtons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        e.target.classList.add('active');
        let tipAsString = (e.target.textContent).toString();
        tipValue = parseFloat(tipAsString) / 100;
        return tipValue;
    })
})

elNumberOfPeople.addEventListener('change', ()=>{
    numberOfPeople = elNumberOfPeople.value;
    let totalTip =  (billValue * tipValue) / numberOfPeople;
    
    elTipPerPerson.textContent = `$${totalTip}`;
    elTotalPerPerson.textContent = "$" + (billValue + (totalTip * numberOfPeople)) / numberOfPeople;
})
function clearDisplay(){
    elTipPerPerson.textContent = "$0";
    elTotalPerPerson.textContent = "$0";
}
elButton.addEventListener('click', clearDisplay);
