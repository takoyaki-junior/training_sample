/**
 * アカウント照会画面表示時の処理
 */
window.onload = function () {
    try {
        // ログインユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        // 全ユーザー情報を取得
        const localUserObject = JSON.parse(localStorage.getItem("local_user_object"));
        // 画面オブジェクトを取得
        const userIdArea = document.getElementById("userId");
        const emailArea = document.getElementById("email");
        const lastNameArea = document.getElementById("lastName");
        const firstNameArea = document.getElementById("firstName");
        const lastNameKnArea = document.getElementById("lastNameKn");
        const firstNameKnArea = document.getElementById("firstNameKn");
        const postCodeArea = document.getElementById("postCode");
        const address1Area = document.getElementById("address1");
        const address2Area = document.getElementById("address2");
        const address3Area = document.getElementById("address3");
        const address4Area = document.getElementById("address4");
        // 取得ユーザー分繰り返し
        for (let i = 0; i < localUserObject.length; i++) {
            // ログインユーザーと一致した場合
            if (localUserObject[i].userId === sessionLoginUser) {
                // 画面へユーザー情報を表示
                userIdArea.innerHTML = localUserObject[i].userId;
                emailArea.innerHTML = localUserObject[i].email;
                lastNameArea.innerHTML = localUserObject[i].lastName;
                firstNameArea.innerHTML = localUserObject[i].firstName;
                lastNameKnArea.innerHTML = localUserObject[i].lastNameKn;
                firstNameKnArea.innerHTML = localUserObject[i].firstNameKn;
                postCodeArea.innerHTML = localUserObject[i].postCode1 + "ー" + localUserObject[i].postCode2;
                address1Area.innerHTML = localUserObject[i].address1;
                address2Area.innerHTML = localUserObject[i].address2;
                address3Area.innerHTML = localUserObject[i].address3;
                address4Area.innerHTML = localUserObject[i].address4;
                break;
            }
        }
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
