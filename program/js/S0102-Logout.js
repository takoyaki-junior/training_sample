/**
 * ログアウト画面遷移時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // セッションからユーザー情報を削除
        sessionStorage.removeItem("session_login_user_object");
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
