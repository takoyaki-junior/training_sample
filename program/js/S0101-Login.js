/**
 * サインインボタン押下時の処理
 * @retrun {boolean} 処理の成功失敗を返却
 */
function login() {
    try {
        // 画面の入力情報を取得
        const inputUserId = document.getElementById("userId").value;
        const inputPassword = document.getElementById("password").value;
        // ローカルストレージから全ユーザー情報を取得
        const localUserObject = JSON.parse(localStorage.getItem("local_user_object"));
        let checkFlg = false;
        // 取得ユーザー分繰り返し
        for (let i = 0; i < localUserObject.length; i++) {
            // 入力したユーザーIDが存在するか確認
            if (localUserObject[i].userId === inputUserId) {
                // 存在するIDの場合、パスワードが正しいか確認
                if (localUserObject[i].password === inputPassword) {
                    //パスワードが正しい場合、反復処理を抜ける
                    checkFlg = true;
                    break;
                } else {
                    // パスワードエラー
                    alert("パスワードが正しくありません");
                    return false;
                }
            }
        }
        if (checkFlg) {
            // ログイン認証成功時、セッションへ情報を保管
            sessionStorage.setItem("session_login_user_object", inputUserId);
            return true;
        } else {
            // ログイン認証失敗時、エラー表示
            alert("入力したユーザーは存在しません。");
            return false;
        }
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください。");
        return false;
    }
}
