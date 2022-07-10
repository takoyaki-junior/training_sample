/**
 * 登録情報確認画面遷移時の処理
 */
window.onload = function () {
    try {
        // セッションから前画面にて入力したユーザー情報を取得
        const sessionInputUser = JSON.parse(sessionStorage.getItem("session_input_user_object"));
        // 画面オブジェクトを取得
        const userIdArea = document.getElementById("userId");
        const passwordArea = document.getElementById("password");
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
        // 画面へ前画面にて入力したユーザー情報を表示
        userIdArea.innerHTML = sessionInputUser.userId;
        passwordArea.innerHTML = sessionInputUser.password;
        emailArea.innerHTML = sessionInputUser.email;
        lastNameArea.innerHTML = sessionInputUser.lastName;
        firstNameArea.innerHTML = sessionInputUser.firstName;
        lastNameKnArea.innerHTML = sessionInputUser.lastNameKn;
        firstNameKnArea.innerHTML = sessionInputUser.firstNameKn;
        postCodeArea.innerHTML = sessionInputUser.postCode1 + "ー" + sessionInputUser.postCode2; // 郵便番号は結合し表示
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
