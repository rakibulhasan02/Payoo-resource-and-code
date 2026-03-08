console.log('hi cashout');
document.getElementById('cashout-btn').addEventListener('click',function(){
  //   1- get the agent number and validate
  const cashoutNumber=getValueFromInput('cashout-number');
  console.log(cashoutNumber);

  if(cashoutNumber.length!=11){
     alert('Invalid Agent Number');
        return;
  }


   // 2-get the amount 
   const cashoutAmount=getValueFromInput('cashout-amount');
   console.log(cashoutAmount);

   // 3-get the current balance
   const currentBalance=getBalance();

    // 4-calculate new balance
    const newBalance=currentBalance-Number(cashoutAmount);
    //balance validate
    if(newBalance<0){
        alert('Invalid Amount');
        return;
    }

    // 5-get the pin and verify

    const cashoutPin=getValueFromInput('cashout-pin');
    if(cashoutPin=='1234'){
      alert('Cashout Successfull');
    // document.getElementById('balance').innerText=newBalance;
    setBalance(newBalance);
    console.log('new balance : '+newBalance);

    //1- history container ke dhore niye ashobo
        const history=document.getElementById('history-container');

        //2- new div create korbo
        const newHistory=document.createElement('div');
        //3- new div inner html add korbo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100 rounded-md mb-3">
        Cashout ${cashoutAmount} TK success to ${cashoutNumber} , at ${new Date()}
     </div>
        `

        //4- history container e new div ke append korbo
        history.append(newHistory);

    }
    else {
      alert('Invalid Pin! Please try again');
      return;
    }

   




})

// document.getElementById('cashout-btn').addEventListener('click',function(){
//     //   1- get the agent number and validate

//     // const cashoutNumberInput=getValueFromInput('cashout-number');
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashoutNumberInput.value;
//     if(cashoutNumber.length!=11){
//         alert('Invalid Agent Number');
//         return;
//     }


//     // console.log(cashoutNumber);
//     // 2-get the amount 
//     const cashoutAmountInput=document.getElementById('cashout-amount');
//     const cashoutAmount=cashoutAmountInput.value;
//     // console.log(cashoutAmount);
    



//     // ,validate , convert to number
//     // 3-get the current balance , validate,convert to number
//     const balenceElement=document.getElementById('balance');
//     const balance=balenceElement.innerText;
//     // console.log(balance);


//     // 4-calculate new balance
//     const newBalance=Number(balance)-Number(cashoutAmount);
//     //balance validate
//     if(newBalance<0){
//         alert('Invalid Amount');
//         return;
//     }



//     // 5-get the pin and verify
//     const cashoutPinInput=document.getElementById('cashout-pin');
//     const cashoutPin=cashoutPinInput.value;
//     if(cashoutPin==='1234'){
//           //5-1 true:::> show an alert > set balence
//     alert('Cashout Successfull');
//     balenceElement.innerText=newBalance;
//     console.log('new balance : '+newBalance);


//     }
//   else{
//     // 5-2 false:: > show an alert > return
//     alert('Invalid pin');
//     return;

//   }

// });