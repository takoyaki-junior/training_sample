/**
 * 登録ボタン押下時の処理
 * @retrun {boolean} 処理の成功失敗を返却
 */
function inputCheck() {
    try {
        // 画面入力項目を取得
        const inputUserId = document.getElementById("userId").value;
        const inputPassword = document.getElementById("password").value;
        const inputEmail = document.getElementById("email").value;
        const inputLastName = document.getElementById("lastName").value;
        const inputFirstName = document.getElementById("firstName").value;
        const inputLastNameKn = document.getElementById("lastNameKn").value;
        const inputFirstNameKn = document.getElementById("firstNameKn").value;
        const inputPostCode1 = document.getElementById("postCode1").value;
        const inputPostCode2 = document.getElementById("postCode2").value;
        const inputAddress1 = document.getElementById("address1").value;
        const inputAddress2 = document.getElementById("address2").value;
        const inputAddress3 = document.getElementById("address3").value;
        const inputAddress4 = document.getElementById("address4").value;
        // 入力チェック
        // ユーザーIDの桁数チェック
        if (!(inputUserId.length >= 4)) {
            alert("ユーザーIDは4桁以上で入力してください。");
            return false;
        }
        // 入力情報を集約
        const inputUserData = {
            userId: inputUserId,
            password: inputPassword,
            email: inputEmail,
            lastName: inputLastName,
            firstName: inputFirstName,
            lastNameKn: inputLastNameKn,
            firstNameKn: inputFirstNameKn,
            postCode1: inputPostCode1,
            postCode2: inputPostCode2,
            address1: inputAddress1,
            address2: inputAddress2,
            address3: inputAddress3,
            address4: inputAddress4,
            adminFlg: "0" // 通常ユーザーで登録
        }
        // セッションへ入力情報を格納
        sessionStorage.setItem("session_input_user_object", JSON.stringify(inputUserData));
        return true;
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください");
        return false;
    }
}
