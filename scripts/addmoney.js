console.log('add money');

document.getElementById('add-money-btn').addEventListener('click',function(){
    // console.log('add money button click');

    // 1 - get bank account
    const bankAccount=getValueFromInput('add-money-bank');
    console.log(bankAccount);
    if(bankAccount=="Select a bank"){
        alert('please select a bank');
        return ;
    }

    //2- get account number
    const accno=getValueFromInput('add-money-number');
    if(accno.length!=11){
        alert('Invalid acc no');
        return;
    }

    // 3- get ammount
    const amount=getValueFromInput('add-money-amount');
    const currentBalance=getBalance();
    const newBalance=currentBalance+Number(amount);

    const pin=getValueFromInput('add-money-pin');
    if(pin=='1234'){
        alert(`add money success from ${bankAccount} at ${new Date()}` );
         // 4- set amount
    setBalance(newBalance);
    console.log(newBalance);

        return ;
    }
   else{
    alert('Pin is wrong.please try again');
    // getValueFromInput(0);
    return;
   }

})