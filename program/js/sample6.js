window.onload = function(){
    try{
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        const targetUser = storageData.find((v) => v.userid === params.get("userid"));
        var useridArea = document.getElementById("userid");
        var lastnameArea = document.getElementById("lastname");
        var firstnameArea = document.getElementById("firstname");
        useridArea.value = targetUser.userid;
        lastnameArea.value = targetUser.lastname;
        firstnameArea.value = targetUser.firstname;
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

function userUpdate() {
    try{
        var userid = document.getElementById("userid").value;
        var newLastname = document.getElementById("lastname").value;
        var newFirstname = document.getElementById("firstname").value;
        var storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        var updateFlg = 0;
        for (var i = 0; i < storageData.length; i++) {
            if(storageData[i].userid === userid){
                storageData[i].lastname = newLastname;
                storageData[i].firstname = newFirstname;
                updateFlg = 1;
            }
        }
        if(updateFlg === 1){
            sessionStorage.setItem("initUserObject", JSON.stringify(storageData));
            alert("登録したやで");
            return true;
        }else{
            alert("登録できへんかったで");
            return false;
        }
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
        return false;
    }
}
