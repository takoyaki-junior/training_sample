function login() {
    var inputUserid = document.getElementById("userid").value;
    var inputPassword = document.getElementById("password").value;
    const storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
    const targetUser = storageData.find((v) => v.userid === inputUserid);
    if(targetUser !== undefined){
        if(targetUser.password === inputPassword){
            sessionStorage.setItem("loginId",inputUserid);
            return true;
        }else{
            alert("ちゃうちゃう");
            return false;
        }
    }else{
        alert("おらへんやで");
        return false;
    }
}
