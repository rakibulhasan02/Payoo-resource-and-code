console.log('Machine added');

//machine id-> input value
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}

//machine get balance
function getBalance(){
    const balanceElement=document.getElementById('balance');
    const balance=balanceElement.innerText;
    console.log('balance= '+Number(balance));
    return Number(balance);
}

// machine value -> set balance
function setBalance(value){
        const balanceElement=document.getElementById('balance');
        balanceElement.innerText=value;


}

// machine id> hide all > show id
function showOnly(id){
    const addMoney=document.getElementById('add-money');
    const cashOut=document.getElementById('cashout');

    // hide all section
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    //unable hidden section
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');

    
}

