/**
 * メニュー画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // ログインしているユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        // 画面の表示用オブジェクトを取得
        let loginUserArea = document.getElementById("loginInfo");
        // 画面へログインユーザー情報を表示
        loginUserArea.innerHTML = "　ログインユーザー：" + sessionLoginUser;
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
