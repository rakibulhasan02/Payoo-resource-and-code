console.log('Login is comming');


document.getElementById('login-btn').addEventListener('click',function(){
    console.log("I am now click in login button");

    // 1-get the mobile number
    const inputNumber=document.getElementById('input-number');
    const contactNumber=inputNumber.value;
    console.log(contactNumber);

    // 2-get pin Number
    const inputPin=document.getElementById('input-pin');
    const loginPin=inputPin.value;
    console.log(loginPin);

    //3-match mobile number and pin
    if(contactNumber=="01785801025" && loginPin=='1234'){
        // 3-1 true:::>> alert > homepage
        // console.log('login successfully');
        alert('Login Successfully');
        //add home page
        // window.location.replace("/home.html");
        window.location.assign("home.html");
    }
    else{
        // 3-2 false:::> alert and return
        alert('Login failed');
        document.getElementById('input-number').value="";
        document.getElementById('input-pin').value="";
        return;
    }


})