window.onload = function(){
    try{
        const loginId = sessionStorage.getItem('loginId');
        var loginUserArea = document.getElementById("loginInfo");
        loginUserArea.innerHTML = "ログイン研修生：" + loginId;
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
