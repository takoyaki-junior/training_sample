/**
 * 買い物かご画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // ログインユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        // 買い物かご情報を取得
        let localCartObject = [];
        if (localStorage.getItem("local_cart_object")) {
            localCartObject = JSON.parse(localStorage.getItem("local_cart_object"));
        }
        // 合計金額を初期化
        let total = 0;
        let fruitsTotal = 0;
        let postageTotal = 0;
        // 取得商品分繰り返し
        for (let i = 0; i < localCartObject.length; i++) {
            //　ログインユーザーの買い物かご情報の場合
            if (localCartObject[i].userId === sessionLoginUser) {
                // 表示対象の行を取得
                const cartTable = document.getElementById("cartTable");
                const row = cartTable.insertRow(-1);
                // 買い物かごの商品情報を表示
                row.insertCell(-1).innerHTML = i + 1;
                row.insertCell(-1).innerHTML = localCartObject[i].fruitsName;
                row.insertCell(-1).innerHTML = localCartObject[i].fruitsCount + " セット";
                row.insertCell(-1).innerHTML = localCartObject[i].price + " 円";
                row.insertCell(-1).innerHTML = localCartObject[i].postage + " 円";
                // 各金額を集計
                fruitsTotal += Number(localCartObject[i].price) * Number(localCartObject[i].fruitsCount);
                postageTotal += Number(localCartObject[i].postage);
            }
        }
        // 合計金額を計算
        total += fruitsTotal + postageTotal;
        // 各金額情報エリアを取得
        const totalArea = document.getElementById("total");
        const fruitsTotalArea = document.getElementById("fruitsTotal");
        const postageTotalArea = document.getElementById("postageTotal");
        // 各金額情報を表示
        totalArea.innerHTML = total;
        fruitsTotalArea.innerHTML = fruitsTotal;
        postageTotalArea.innerHTML = postageTotal;
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

/**
 * 商品購入ボタン押下時の処理
 * @retrun
 */
function checkShopping() {
    try {
        // セッション情報の削除
        sessionStorage.removeItem("session_shopping_info_object");
        // ログインユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        const localUserObject = JSON.parse(localStorage.getItem("local_user_object"));
        // 対象ユーザー情報の初期化
        let joinName = null;
        let joinNameKn = null;
        let joinEmail = null;
        let joinPostCode = null;
        let joinAddress = null;
        // 取得ユーザー分繰り返し
        for (let i = 0; i < localUserObject.length; i++) {
            // ログインユーザーIDと一致した場合
            if (localUserObject[i].userId === sessionLoginUser) {
                // ユーザー情報を取得
                joinName = localUserObject[i].lastName + localUserObject[i].firstName;
                joinNameKn = localUserObject[i].lastNameKn + localUserObject[i].firstNameKn;
                joinEmail = localUserObject[i].email;
                joinPostCode = localUserObject[i].postCode1 + "ー" + localUserObject[i].postCode2;
                joinAddress = localUserObject[i].address1 + localUserObject[i].address2 + localUserObject[i].address3 + localUserObject[i].address4;
                break;
            }
        }
        // 買い物かご情報が存在する場合
        let targetCart = [];
        if (localStorage.getItem("local_cart_object")) {
            // 全買い物かご情報を取得
            const localCartObject = JSON.parse(localStorage.getItem("local_cart_object"));
            // 取得商品分繰り返し
            for (let i = 0; i < localCartObject.length; i++) {
                // ログインユーザーの買い物かご情報の場合、商品データを取得
                if (localCartObject[i].userId === sessionLoginUser) {
                    targetCart.push(localCartObject[i]);
                }
            }
        }
        // 画面の金額情報を取得
        const nowTotal = document.getElementById("total").innerHTML;
        const nowFruitsTotal = document.getElementById("fruitsTotal").innerHTML;
        const nowPostageTotal = document.getElementById("postageTotal").innerHTML;
        // 購入情報データを作成
        const shoppingInfo = {
            userId: sessionLoginUser,
            userName: joinName,
            userNameKn: joinNameKn,
            userEmail: joinEmail,
            postCode: joinPostCode,
            address: joinAddress,
            total: nowTotal,
            fruitsTotal: nowFruitsTotal,
            postageTotal: nowPostageTotal,
            cartInfo: targetCart
        }
        // セッションへ購入情報を保管
        sessionStorage.setItem("session_shopping_info_object", JSON.stringify(shoppingInfo));
        // 購入情報確認画面へ進む
        window.location.href = "./S0602-CheckShopping.html";
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
