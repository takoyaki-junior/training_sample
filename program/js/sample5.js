window.onload = function(){
    try{
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        const targetUser = storageData.find((v) => v.userid === params.get("userid"));
        var userNameArea = document.getElementById("userName");
        userNameArea.innerHTML = targetUser.lastname + targetUser.firstname;
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

function userEdit() {
    try{
        const url = new URL(window.location.href);
        const params = url.searchParams;
        location.href = "./sample6.html" + "?userid=" + params.get("userid");
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

function userDelete() {
    try{
        const url = new URL(window.location.href);
        const params = url.searchParams;
        var storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        var deleteFlg = 0;
        for (var i = 0; i < storageData.length; i++) {
            if(storageData[i].userid === params.get("userid")){
                storageData.splice(i, 1);
                updateFlg = 1;
            }
        }
        if(updateFlg === 1){
            sessionStorage.setItem("initUserObject", JSON.stringify(storageData));
            alert("削除したやで");
            location.href = "./sample4.html";
        }else{
            alert("削除できへんかったで");
        }
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
