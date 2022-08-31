// https://www.omnicalculator.com/finance/credit-spread#how-to-calculate-the-credit-spread-of-a-corporate-bond-using-the-credit-spread-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const creditspreadRadio = document.getElementById('creditspreadRadio');
const corporatebondyieldRadio = document.getElementById('corporatebondyieldRadio');
const governmentbondyieldRadio = document.getElementById('governmentbondyieldRadio');

let creditspread;
let corporatebondyield = v1;
let governmentbondyield = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

creditspreadRadio.addEventListener('click', function() {
  variable1.textContent = 'Corporate bond yield';
  variable2.textContent = 'Government bond yield';
  corporatebondyield = v1;
  governmentbondyield = v2;
  result.textContent = '';
});

corporatebondyieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Credit spread';
  variable2.textContent = 'Government bond yield';
  creditspread = v1;
  governmentbondyield = v2;
  result.textContent = '';
});

governmentbondyieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Credit spread';
  variable2.textContent = 'Corporate bond yield';
  creditspread = v1;
  corporatebondyield = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(creditspreadRadio.checked)
    result.textContent = `Credit spread = ${computecreditspread().toFixed(2)}`;

  else if(corporatebondyieldRadio.checked)
    result.textContent = `Corporate bond yield = ${computecorporatebondyield().toFixed(2)}`;

  else if(governmentbondyieldRadio.checked)
    result.textContent = `Government bond yield = ${computegovernmentbondyield().toFixed(2)}`;
})

// calculation

function computecreditspread() {
  return (Number(corporatebondyield.value) - Number(governmentbondyield.value)) * 100;
}

function computecorporatebondyield() {
  return (Number(creditspread.value) / 100) + Number(governmentbondyield.value);
}

function computegovernmentbondyield() {
  return Number(corporatebondyield.value) - (Number(creditspread.value) / 100);
}