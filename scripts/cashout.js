console.log('hi cashout');
document.getElementById('cashout-btn').addEventListener('click',function(){
    //   1- get the agent number and validate

    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber=cashoutNumberInput.value;
    if(cashoutNumber.length!=11){
        alert('Invalid Agent Number');
        return;
    }


    // console.log(cashoutNumber);
    // 2-get the amount 
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount=cashoutAmountInput.value;
    // console.log(cashoutAmount);
    



    // ,validate , convert to number
    // 3-get the current balance , validate,convert to number
    const balenceElement=document.getElementById('balance');
    const balance=balenceElement.innerText;
    // console.log(balance);


    // 4-calculate new balance
    const newBalance=Number(balance)-Number(cashoutAmount);
    //balance validate
    if(newBalance<0){
        alert('Invalid Amount');
        return;
    }



    // 5-get the pin and verify
    const cashoutPinInput=document.getElementById('cashout-pin');
    const cashoutPin=cashoutPinInput.value;
    if(cashoutPin==='1234'){
          //5-1 true:::> show an alert > set balence
    alert('Cashout Successfull');
    balenceElement.innerText=newBalance;
    console.log('new balance : '+newBalance);


    }
  else{
    // 5-2 false:: > show an alert > return
    alert('Invalid pin');
    return;

  }

});