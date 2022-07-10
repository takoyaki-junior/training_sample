/**
 * 商品一覧画面表示時の処理
 * @retrun
 */
window.onload = function () {
    try {
        // 全商品データを取得
        const localFruitsObject = JSON.parse(localStorage.getItem("local_fruits_object"));
        // 取得商品分繰り返し
        for (let i = 0; i < localFruitsObject.length; i++) {
            // 表示対象の行を取得
            const fruitsTable = document.getElementById("fruitsTable");
            const row = fruitsTable.insertRow(-1);
            // 対象の商品情報を画面へ表示する
            row.insertCell(-1).innerHTML = i + 1;
            row.insertCell(-1).innerHTML = localFruitsObject[i].fruitsName;
            row.insertCell(-1).innerHTML = localFruitsObject[i].fruitsGroup;
            row.insertCell(-1).innerHTML = localFruitsObject[i].origin;
            row.insertCell(-1).innerHTML = localFruitsObject[i].price + " 円";
            row.insertCell(-1).innerHTML = "詳細へ".link("./S0502-FruitsDetail.html" + "?selectFruits=" + localFruitsObject[i].fruitsCode);
        }
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}

/**
 * 検索ボタン押下時の処理
 * @retrun
 */
function searchFruits() {
    try {
        // 全商品データを取得
        const localFruitsObject = JSON.parse(localStorage.getItem("local_fruits_object"));
        // 対象商品の変数初期化
        let targetFruits = localFruitsObject;
        // 検索情報を取得
        const searchFruitsGroup = document.getElementById("selectFruitsGroup").value;
        const searchOrigin = document.getElementById("selectOrigin").value;
        const searchFruitsName = document.getElementById("inputFruitsName").value;
        // 商品分類が選択されている場合
        if (searchFruitsGroup.length !== 0) {
            const searchFruitsData = [];
            // 商品分繰り返し確認
            for (let i = 0; i < targetFruits.length; i++) {
                // 選択した商品分類が存在する場合
                if (targetFruits[i].fruitsGroup === searchFruitsGroup) {
                    // 対象商品をオブジェクトへ追加
                    searchFruitsData.push(targetFruits[i]);
                }
            }
            // 取得した商品を設定
            targetFruits = searchFruitsData;
        }
        // 原産国が選択されている場合
        if (searchOrigin.length !== 0) {
            const searchFruitsData = [];
            // 商品分繰り返し確認
            for (let i = 0; i < targetFruits.length; i++) {
                // 選択した原産国が存在する場合
                if (targetFruits[i].origin === searchOrigin) {
                    // 対象商品をオブジェクトへ追加
                    searchFruitsData.push(targetFruits[i]);
                }
            }
            // 取得した商品を設定
            targetFruits = searchFruitsData;
        }
        // 商品名が入力されている場合
        if (searchFruitsName.length !== 0) {
            const searchFruitsData = [];
            for (let i = 0; i < targetFruits.length; i++) {
                // 入力した商品名が存在する場合
                if (targetFruits[i].fruitsName === searchFruitsName) {
                    // 対象商品をオブジェクトへ追加
                    searchFruitsData.push(targetFruits[i]);
                }
            }
            // 取得した商品を設定
            targetFruits = searchFruitsData;
        }
        // 現在の商品一覧件数を取得する
        const nowFruitsTable = document.getElementById('fruitsTable');
        const rowNum = nowFruitsTable.rows.length - 1;
        // 現在の商品一覧を削除する
        if (rowNum > 0) {
            for (let i = 0; i < rowNum; i++) {
                // 件数分、1行ずつ削除する
                nowFruitsTable.deleteRow(-1);
            }
        }
        // 絞り込んだ商品分繰り返し
        for (let i = 0; i < targetFruits.length; i++) {
            // 表示対象の行を取得
            const fruitsTable = document.getElementById("fruitsTable");
            const row = fruitsTable.insertRow(-1);
            // 対象商品を画面へ表示する
            row.insertCell(-1).innerHTML = i + 1;
            row.insertCell(-1).innerHTML = targetFruits[i].fruitsName;
            row.insertCell(-1).innerHTML = targetFruits[i].fruitsGroup;
            row.insertCell(-1).innerHTML = targetFruits[i].origin;
            row.insertCell(-1).innerHTML = targetFruits[i].price + " 円";
            row.insertCell(-1).innerHTML = "詳細へ".link("./S0502-FruitsDetail.html" + "?selectFruits=" + targetFruits[i].fruitsCode);
        }
    } catch (e) {
        alert("システムエラーが発生しました。プログラムを修正してください");
    }
}
