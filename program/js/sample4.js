//function search() {
    try{
        const storageData = JSON.parse(sessionStorage.getItem("initUserObject"));
        for (var i = 0; i < storageData.length; i++) {
            var userData = storageData[i];
            var table = document.getElementById('usertable');
            var row = table.insertRow(-1) ;
            row.insertCell(-1).innerHTML = i + 1;
            row.insertCell(-1).innerHTML = userData.userid;
            row.insertCell(-1).innerHTML = userData.lastname;
            row.insertCell(-1).innerHTML = userData.firstname;
            row.insertCell(-1).innerHTML = "詳細へ".link("./sample5.html" + "?userid=" + userData.userid);
        }
    }catch(e){
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
//}
