/**
 * 購入確認画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // 画面オブジェクトを取得
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
        const otherAmountArea = document.getElementById("otherAmount");
        // 前画面で作成した購入情報を取得
        const sessionShoppingInfo = JSON.parse(sessionStorage.getItem("session_shopping_info_object"));
        // ユーザー情報を表示
        userNameArea.innerHTML = sessionShoppingInfo.userName;
        userNameKnArea.innerHTML = sessionShoppingInfo.userNameKn;
        userEmailArea.innerHTML = sessionShoppingInfo.userEmail;
        userPostCodeArea.innerHTML = sessionShoppingInfo.postCode;
        userAddressArea.innerHTML = sessionShoppingInfo.address;
        deliveryNameArea.innerHTML = sessionShoppingInfo.userName;
        deliveryNameKnArea.innerHTML = sessionShoppingInfo.userNameKn;
        deliveryPostCodeArea.innerHTML = sessionShoppingInfo.postCode;
        deliveryAddressArea.innerHTML = sessionShoppingInfo.address;
        // 買い物かご情報を取得
        const targetCart = sessionShoppingInfo.cartInfo;
        // 取得商品分繰り返し
        for (let i = 0; i < targetCart.length; i++) {
            // 表示対象の行を取得
            const cartTable = document.getElementById("cartTable");
            const row = cartTable.insertRow(-1);
            // 買い物かご情報を表示
            row.insertCell(-1).innerHTML = targetCart[i].fruitsName;
            row.insertCell(-1).innerHTML = targetCart[i].fruitsCount + " セット";
            row.insertCell(-1).innerHTML = targetCart[i].price + " 円";
            row.insertCell(-1).innerHTML = targetCart[i].postage + " 円";
        }
        // 購入金額の表示
        totalArea.innerHTML = sessionShoppingInfo.total;
        fruitsTotalArea.innerHTML = sessionShoppingInfo.fruitsTotal;
        postageTotalArea.innerHTML = sessionShoppingInfo.postageTotal;
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

/**
 * 商品を購入ボタン押下時の処理
 * @retrun
 */
function purchase() {
    try {
        // 購入情報の取得
        const sessionShoppingInfo = JSON.parse(sessionStorage.getItem("session_shopping_info_object"));
        // 現在の購入履歴を取得
        const localShoppingHistory = JSON.parse(localStorage.getItem("local_shopping_history_object"));
        // 画面入力情報の取得
        const selectPayment = document.getElementById("selectPayment").innerHTML;
        const deliveryName = document.getElementById("deliveryName").innerHTML;
        const deliveryNameKn = document.getElementById("deliveryNameKn").innerHTML;
        const deliveryPostCode = document.getElementById("deliveryPostCode").innerHTML;
        const deliveryAddress = document.getElementById("deliveryAddress").innerHTML;
        // 現在時刻の取得
        const date = new Date();
        const purchaseDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
        // 購入番号の生成
        const purchaseNo = "S" + (date.getFullYear() + date.getHours() + date.getMinutes());
        // 購入履歴の作成
        const shoppingInfo = {
            userId: sessionShoppingInfo.userId,
            shoppingNo: purchaseNo,
            shoppingDate: purchaseDate,
            userName: sessionShoppingInfo.userName,
            userNameKn: sessionShoppingInfo.userNameKn,
            userEmail: sessionShoppingInfo.userEmail,
            postCode: sessionShoppingInfo.postCode,
            address: sessionShoppingInfo.address,
            total: sessionShoppingInfo.total,
            fruitsTotal: sessionShoppingInfo.fruitsTotal,
            postageTotal: sessionShoppingInfo.postageTotal,
            payment: selectPayment,
            deliveryName: deliveryName,
            deliveryNameKn: deliveryNameKn,
            deliveryPostCode: deliveryPostCode,
            deliveryAddress: deliveryAddress,
            cartInfo: sessionShoppingInfo.cartInfo
        }
        // 購入履歴を登録
        localShoppingHistory.push(shoppingInfo);
        localStorage.setItem("local_shopping_history_object", JSON.stringify(localShoppingHistory));
        // セッション情報の削除
        sessionStorage.removeItem("session_shopping_info_object");
        // カート情報の削除
        localStorage.removeItem("local_cart_object");
        // 購入完了画面へ進む
        window.location.href = "./S0603-FinishShopping.html";
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
