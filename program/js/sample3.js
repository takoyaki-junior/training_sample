function entry() {
    var inputUserid = document.getElementById("userid").value;
    var inputLastname = document.getElementById("lastname").value;
    var inputFirstname = document.getElementById("firstname").value;
    if(inputUserid.length !== 0){
        var createUser = {userid:inputUserid,password:"",lastname:inputLastname,firstname:inputFirstname};
        var storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        storageData.push(createUser);
        sessionStorage.setItem("initUserObject", JSON.stringify(storageData));
        alert("登録したやで");
        return true;
    }else{
        alert("ID入力せなあかんで");
        return false;
    }
}
