/**
 * 購入履歴画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // ユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        // 購入情報を取得
        const localShoppingHistory = JSON.parse(localStorage.getItem("local_shopping_history_object"));
        // 取得履歴分繰り返し
        for (let i = 0; i < localShoppingHistory.length; i++) {
            // ログインユーザーが一致した場合
            if (localShoppingHistory[i].userId === sessionLoginUser) {
                // 表示対象の行を取得
                const historyTable = document.getElementById("historyTable");
                const row = historyTable.insertRow(-1);
                // 購入履歴情報を表示
                row.insertCell(-1).innerHTML = i + 1;
                row.insertCell(-1).innerHTML = localShoppingHistory[i].shoppingDate;
                row.insertCell(-1).innerHTML = localShoppingHistory[i].total + " 円";
                row.insertCell(-1).innerHTML = localShoppingHistory[i].fruitsTotal + " 円";
                row.insertCell(-1).innerHTML = localShoppingHistory[i].postageTotal + " 円";
                row.insertCell(-1).innerHTML = localShoppingHistory[i].cartInfo.length;
                row.insertCell(-1).innerHTML = "詳細へ".link("./S0702-HistoryDetail.html" + "?shoppingNo=" + localShoppingHistory[i].shoppingNo);
            }
        }
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
