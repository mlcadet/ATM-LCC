//Deposit button even handler
const deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click', function(){

    const depositStringToInt = getInputNumb("deposit-amount");

    updateSpanTest("current-deposit", depositStringToInt);
    updateSpanTest("current-balance", depositStringToInt);

    //Create the input field
    document.getElementById('deposit-amount').value = "";

})


// Withdraw button Event handler
const withdraw_btn = document.getElementById('withdraw-btn');
         withdraw_btn.addEventListener('click', function(){
            const withdrawNumb = getInputNumb("withdraw-amount");

            updateSpanTest("current-withdraw", withdrawNumb);
            updateSpanTest("current-balance", -1 * withdrawNum);

    //Create the input field
    document.getElementById('withdraw-amount').value = "";
    
})


//Function Parsing string 
function getInputNumb(idName){
    const amount = document.getElementById(idName).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTest(idName, addedNumber){

    const current = document.getElementById(idName).innerText;
    const currentStringToInt = parseFloat(current);

    const total = currentStringToInt + addedNumber;

    
    document.getElementById(idName).innerText = total;
}