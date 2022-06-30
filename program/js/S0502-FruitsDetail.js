/**
 * 商品詳細画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // 全商品データを取得
        const localFruitsObject = JSON.parse(localStorage.getItem("local_fruits_object"));
        // 対象商品の変数初期化
        let targetFruits = null;
        // URLのパラメータを取得
        const url = new URL(window.location.href);
        const params = url.searchParams;
        // 商品数分繰り返し
        for (let i = 0; i < localFruitsObject.length; i++) {
            // 選択した商品情報の場合
            if (localFruitsObject[i].fruitsCode === params.get("selectFruits")) {
                // 対象の商品情報を取得し、処理を抜ける
                targetFruits = localFruitsObject[i]
                break;
            }
        }
        // 対象商品が取得できた場合
        if (targetFruits !== null) {
            // 商品情報表示エリアを取得
            const fruitsCodeArea = document.getElementById("fruitsCode");
            const fruitsGroupArea = document.getElementById("fruitsGroup");
            const fruitsNameArea = document.getElementById("fruitsName");
            const originArea = document.getElementById("origin");
            const quantityArea = document.getElementById("quantity");
            const priceArea = document.getElementById("price");
            const postageArea = document.getElementById("postage");
            const descriptArea = document.getElementById("descript");
            const fruitsPhotoArea = document.getElementById("fruitsPhoto");
            // 商品情報を表示
            fruitsCodeArea.innerHTML = targetFruits.fruitsCode;
            fruitsGroupArea.innerHTML = targetFruits.fruitsGroup;
            fruitsNameArea.innerHTML = targetFruits.fruitsName;
            originArea.innerHTML = targetFruits.origin;
            quantityArea.innerHTML = targetFruits.quantity;
            priceArea.innerHTML = targetFruits.price;
            postageArea.innerHTML = targetFruits.postage;
            descriptArea.innerHTML = targetFruits.descript;
            fruitsPhotoArea.src = targetFruits.fruitsPhoto;
        } else {
            alert("商品情報に異常があります");
            return false;
        }
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

/**
 * 買い物かごへ追加ボタン押下時の処理
 * @retrun
 */
function addCart() {
    try {
        // 商品情報を取得
        const selectFruitsCode = document.getElementById("fruitsCode").innerHTML;
        const selectFruitsName = document.getElementById("fruitsName").innerHTML;
        const selectPrice = document.getElementById("price").innerHTML;
        const selectPostage = document.getElementById("postage").innerHTML;
        const selectCount = document.getElementById("selectCount").value;
        // ログインユーザー情報を取得
        const sessionLoginUser = sessionStorage.getItem("session_login_user_object");
        // 買い物かごへ追加する商品情報を設定
        const fruitsInfo = {
            userId: sessionLoginUser,
            fruitsCode: selectFruitsCode,
            fruitsName: selectFruitsName,
            price: selectPrice,
            postage: selectPostage,
            fruitsCount: selectCount
        }
        // 現在の買い物かご情報を取得
        let localCartObject = [];
        if (localStorage.getItem("local_cart_object")) {
            localCartObject = JSON.parse(localStorage.getItem("local_cart_object"));
        }
        // 買い物かごへ商品を追加
        localCartObject.push(fruitsInfo);
        // 買い物かご情報を登録
        localStorage.setItem("local_cart_object", JSON.stringify(localCartObject));
        alert("商品を買い物かごへ追加しました。");
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
