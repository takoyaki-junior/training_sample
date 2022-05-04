let initUserData = [
    {   userid : "user01",
        password : "user01",
        lastname : "山口",
        firstname : "百恵"
    }
    ,
    {   userid : "user02",
        password: "user02",
        lastname : "松田",
        firstname : "聖子"
    }
    ,
    {   userid : "user03",
        password: "user03",
        lastname : "中森",
        firstname : "明菜"
    }
];

// 書き込み ※JavaScriptオブジェクト -> JSON文字列に変換
sessionStorage.setItem("initUserObject", JSON.stringify(initUserData));
