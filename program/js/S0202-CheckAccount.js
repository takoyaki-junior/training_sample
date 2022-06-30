/**
 * 登録情報確認画面遷移時の処理
 */
window.onload = function () {
    try {
        // セッションから入力したユーザー情報を取得
        const sessionInputUser = JSON.parse(sessionStorage.getItem("session_input_user_object"));
        // 画面オブジェクトを取得
        let userIdArea = document.getElementById("userId");
        let passwordArea = document.getElementById("password");
        let emailArea = document.getElementById("email");
        let lastNameArea = document.getElementById("lastName");
        let firstNameArea = document.getElementById("firstName");
        let lastNameKnArea = document.getElementById("lastNameKn");
        let firstNameKnArea = document.getElementById("firstNameKn");
        let postCodeArea = document.getElementById("postCode");
        let address1Area = document.getElementById("address1");
        let address2Area = document.getElementById("address2");
        let address3Area = document.getElementById("address3");
        let address4Area = document.getElementById("address4");
        // 画面へ入力したユーザー情報を表示する
        userIdArea.innerHTML = sessionInputUser.userId;
        passwordArea.innerHTML = sessionInputUser.password;
        emailArea.innerHTML = sessionInputUser.email;
        lastNameArea.innerHTML = sessionInputUser.lastName;
        firstNameArea.innerHTML = sessionInputUser.firstName;
        lastNameKnArea.innerHTML = sessionInputUser.lastNameKn;
        firstNameKnArea.innerHTML = sessionInputUser.firstNameKn;
        postCodeArea.innerHTML = sessionInputUser.postCode1 + "ー" + sessionInputUser.postCode2;
        address1Area.innerHTML = sessionInputUser.address1;
        address2Area.innerHTML = sessionInputUser.address2;
        address3Area.innerHTML = sessionInputUser.address3;
        address4Area.innerHTML = sessionInputUser.address4;
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

/**
 * 登録ボタン押下時の処理
 * @retrun
 */
function createAccount() {
    try {
        // セッションから入力したユーザー情報を取得
        const sessionInputUser = JSON.parse(sessionStorage.getItem("session_input_user_object"));
        // ローカルストレージから全ユーザー情報を取得
        const allUserData = JSON.parse(localStorage.getItem("local_user_object"));
        // ユーザーオブジェクトへ新規データを追加
        allUserData.push(sessionInputUser);
        // ユーザー登録を実行
        localStorage.setItem("local_user_object", JSON.stringify(allUserData));
        // セッション情報の削除
        sessionStorage.removeItem("session_input_user_object");
        // 登録完了画面へ進む
        window.location.href = "./S0203-FinishAccount.html";
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
