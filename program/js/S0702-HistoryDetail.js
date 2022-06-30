/**
 * 購入履歴詳細画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // 全購入履歴情報を取得
        const localShoppingHistory = JSON.parse(localStorage.getItem("local_shopping_history_object"));
        // URLのパラメータを取得
        const url = new URL(window.location.href);
        const params = url.searchParams;
        // 画面オブジェクトを取得
        const shoppingDateArea = document.getElementById("shoppingDate");
        const shoppingNoArea = document.getElementById("shoppingNo");
        const userNameArea = document.getElementById("userName");
        const userNameKnArea = document.getElementById("userNameKn");
        const userEmailArea = document.getElementById("userEmail");
        const userPostCodeArea = document.getElementById("userPostCode");
        const userAddressArea = document.getElementById("userAddress");
        const deliveryNameArea = document.getElementById("deliveryName");
        const deliveryNameKnArea = document.getElementById("deliveryNameKn");
        const deliveryPostCodeArea = document.getElementById("deliveryPostCode");
        const deliveryAddressArea = document.getElementById("deliveryAddress");
        const totalArea = document.getElementById("total");
        const fruitsTotalArea = document.getElementById("fruitsTotal");
        const postageTotalArea = document.getElementById("postageTotal");
        // 取得履歴分繰り返し
        for (let i = 0; i < localShoppingHistory.length; i++) {
            // 対象の購入履歴情報の場合
            if (localShoppingHistory[i].shoppingNo === params.get("shoppingNo")) {
                // ユーザー情報を表示
                shoppingNoArea.innerHTML = localShoppingHistory[i].shoppingNo;
                shoppingDateArea.innerHTML = localShoppingHistory[i].shoppingDate;
                userNameArea.innerHTML = localShoppingHistory[i].userName;
                userNameKnArea.innerHTML = localShoppingHistory[i].userNameKn;
                userEmailArea.innerHTML = localShoppingHistory[i].userEmail;
                userPostCodeArea.innerHTML = localShoppingHistory[i].postCode;
                userAddressArea.innerHTML = localShoppingHistory[i].address;
                deliveryNameArea.innerHTML = localShoppingHistory[i].userName;
                deliveryNameKnArea.innerHTML = localShoppingHistory[i].userNameKn;
                deliveryPostCodeArea.innerHTML = localShoppingHistory[i].postCode;
                deliveryAddressArea.innerHTML = localShoppingHistory[i].address;
                // 購入金額の表示
                totalArea.innerHTML = localShoppingHistory[i].total;
                fruitsTotalArea.innerHTML = localShoppingHistory[i].fruitsTotal;
                postageTotalArea.innerHTML = localShoppingHistory[i].postageTotal;
                // 購入商品分繰り返し
                for (let k = 0; k < localShoppingHistory[i].cartInfo.length; k++) {
                    // 表示対象の行を取得
                    const fruitsTable = document.getElementById("fruitsTable");
                    const row = fruitsTable.insertRow(-1);
                    // 購入商品情報を表示
                    row.insertCell(-1).innerHTML = localShoppingHistory[i].cartInfo[k].fruitsName;
                    row.insertCell(-1).innerHTML = localShoppingHistory[i].cartInfo[k].fruitsCount + " セット";
                    row.insertCell(-1).innerHTML = localShoppingHistory[i].cartInfo[k].price + " 円";
                    row.insertCell(-1).innerHTML = localShoppingHistory[i].cartInfo[k].postage + " 円";
                }
                break;
            }
        }
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
