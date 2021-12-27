const elBill = document.querySelector('#bill');
const tipButtons = document.querySelectorAll('.tip');
const elNumberOfPeople = document.querySelector('#people');
const elTipPerPerson = document.querySelector('.calculator__tip-amount-display');
const elTotalPerPerson = document.querySelector('.calculator__total-amount-display');
const elButton = document.querySelector('.btn');
const elCustomTip = document.querySelector('.custom-tip');
const elAlert = document.querySelector('.alert');

let billValue = 0;
let numberOfPeople = 0;
let tipValue = 0;

elBill.addEventListener('change', ()=>{
        billValue = parseFloat(elBill.value);
        return billValue;
    
})
function removeActive(){
    tipButtons.forEach(btn=>{
        btn.classList.remove('active')
    })
}
tipButtons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        removeActive();
        e.target.classList.add('active');
        let tipAsString = (e.target.textContent).toString();
        tipValue = parseFloat(tipAsString) / 100;
        return tipValue;
    })
})
elCustomTip.addEventListener('change',(e)=>{
        removeActive();
        tipValue = parseFloat(e.target.value) / 100;
        return tipValue;
})
elNumberOfPeople.addEventListener('change', ()=>{
    numberOfPeople = elNumberOfPeople.value;
    if(numberOfPeople == 0){
        elAlert.classList.add('active');
        return;
    }else{
        elAlert.classList.remove('active')
    }
    
    let totalTip =  (billValue * tipValue) / numberOfPeople;
    
    elTipPerPerson.textContent = `$${totalTip}`;
    elTotalPerPerson.textContent = "$" + (billValue + (totalTip * numberOfPeople)) / numberOfPeople;
})
function clearDisplay(){
    elTipPerPerson.textContent = "$0";
    elTotalPerPerson.textContent = "$0";
    tipButtons.forEach(btn=>{
        btn.classList.remove('active')
    })
}

elButton.addEventListener('click', clearDisplay);
