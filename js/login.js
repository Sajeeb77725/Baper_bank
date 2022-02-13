document.getElementById('submit-btn').addEventListener('click', function(){
    const userFeild = document.getElementById('user-name');
    const userEmail = userFeild.value;
    //get user password
    const passFeild = document.getElementById('user-password');
    const userPassword = passFeild.value;
    if(userEmail == 'sontan@baap.com' && userPassword == 'secrate'){
        window.location.href = "banking.html";
    }
})