/**
 * 変更するボタン押下時の処理
 * @retrun {boolean} 処理の成功失敗を返却
 */
function changePassword() {
    try {
        // ローカルストレージから全ユーザー情報を取得
        const localUserObject = JSON.parse(localStorage.getItem("local_user_object"));
        // 入力情報を取得
        const inputUserId = document.getElementById("userId").value;
        const inputOldPassword = document.getElementById("oldPassword").value;
        const inputNewPassword = document.getElementById("newPassword").value;
        // チェック用変数準備
        let checkFlg = false;
        let userCount = 0;
        // 取得ユーザー分反復確認
        for (let i = 0; i < localUserObject.length; i++) {
            // 入力したIDが存在するか確認
            if (localUserObject[i].userId === inputUserId) {
                // 存在するIDの場合、現在のパスワードが正しいか確認
                if (localUserObject[i].password === inputOldPassword) {
                    // 現在のパスワードが正しい場合、チェック用変数を更新し、反復処理を抜ける
                    checkFlg = true;
                    userCount = i;
                    break;
                } else {
                    // パスワードエラー
                    alert("現在のパスワードが正しくありません");
                    return false;
                }
            }
        }
        // 入力情報が正しい場合
        if (checkFlg) {
            // 対象ユーザーのパスワードを新しいパスワードへ更新
            localUserObject[userCount].password = inputNewPassword;
            localStorage.setItem("local_user_object", JSON.stringify(localUserObject));
            return true;
        } else {
            // 入力ユーザー情報が不正の場合
            alert("入力したユーザーは存在しません。");
            return false;
        }
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください。");
        return false;
    }
}
