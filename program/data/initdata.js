/**
 * データ初期化押下時の処理
 * @retrun {boolean} 処理の成功失敗を返却
 */
function resetData() {
    try {
        alert("データを初期化します。アカウント情報、購入情報が全て削除されます。");
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    } catch {
        alert("システムエラーが発生しました。プログラムを修正してください。");
        return false;
    }
}

/**
 * ログイン画面表示時の処理（初期データ登録）
 * @retrun
 */
window.onload = function () {
    // 初期ユーザー登録
    if (!localStorage.getItem("local_user_object")) {
        let initUserData = [{
            userId: "screen",
            password: "screen",
            email: "screen2019.inc@gmail.com",
            lastName: "株式会社",
            firstName: "SCREEN",
            lastNameKn: "カブシキガイシャ",
            firstNameKn: "スクリーン",
            postCode1: "446",
            postCode2: "0031",
            address1: "愛知県",
            address2: "安城市朝日町",
            address3: "17-17",
            address4: "",
            adminFlg: "1"
        }];
        localStorage.setItem("local_user_object", JSON.stringify(initUserData));
    }
    // 商品データ登録
    if (!localStorage.getItem("local_fruits_object")) {
        let initFruitsData = [{
            fruitsCode: "0001",
            fruitsGroup: "柑橘類",
            fruitsName: "ハード・ロック・オレンジ",
            origin: "スペイン",
            quantity: "8",
            price: "4000",
            postage: "1200",
            descript: "スペイン東部、バレンシア州にて収穫されたオレンジです。オレンジの中では最大の糖度を誇ります。皮が石のように硬いため、紀元前は動物を攻撃するための武器として使われていました。そのため、召し上がっていただく際には、石材を切断する道具が必要となります。",
            fruitsPhoto: "./img/orange01.jpg"
        }, {
            fruitsCode: "0002",
            fruitsGroup: "柑橘類",
            fruitsName: "ギャップオレンジ",
            origin: "イタリア",
            quantity: "12",
            price: "3200",
            postage: "800",
            descript: "イタリア南部、シチリア・ピアナディカターニャ地方にて収穫されたオレンジです。オレンジですが、中の実はオレンジ色では無く、緑色をしています。日本の抹茶に似た味わいのため和菓子との相性が非常に良く、現在は京都の和菓子屋さんに置かれることが多いです。",
            fruitsPhoto: "./img/orange02.jpg"
        }, {
            fruitsCode: "0003",
            fruitsGroup: "柑橘類",
            fruitsName: "スパイシーレモン",
            origin: "スペイン",
            quantity: "20",
            price: "3500",
            postage: "1800",
            descript: "スペイン南部ムルシア地方原産のレモンです。レモンの酸味は全くありませんが、唐辛子に近い辛さを味わうことができます。赤から鍋に辛味を足したい時に使用されるのがおすすめです。",
            fruitsPhoto: "./img/lemon01.jpg"
        }, {
            fruitsCode: "0004",
            fruitsGroup: "柑橘類",
            fruitsName: "トップ・オブ・ザ・レモン",
            origin: "イタリア",
            quantity: "1",
            price: "900",
            postage: "2000",
            descript: "地中海最大の島シチリア島にて収穫されたレモンです。大きな島で獲れることもあり、直径が平均70センチあります。2008年のギネスに認定されたこちらのレモンは、直径89センチでした。当店ではカバのエサに最もおすすめしています。",
            fruitsPhoto: "./img/lemon02.jpg"
        }, {
            fruitsCode: "0005",
            fruitsGroup: "柑橘類",
            fruitsName: "アウェイク・グレープフルーツ",
            origin: "フランス",
            quantity: "6",
            price: "2600",
            postage: "800",
            descript: "フランス・ボルドー地方原産のグレープフルーツです。名前の通りカフェインの含有量が非常に高く、1～2時間のうちに食べきってしまうと致死量に達します。小分けにして仕事の合間に食べていただくことをお勧めします。",
            fruitsPhoto: "./img/grapefruit01.jpg"
        }, {
            fruitsCode: "0006",
            fruitsGroup: "仁果類",
            fruitsName: "ウォーター・アップル",
            origin: "イタリア",
            quantity: "10",
            price: "1800",
            postage: "1400",
            descript: "イタリア・カンパーニア州原産のリンゴです。水分量が非常に多いため、少しの力を加えただけで実が崩れてしまいます。輸送中のトラブルは補償対象外となっておりますので、ご了承ください。",
            fruitsPhoto: "./img/apple01.jpg"
        }, {
            fruitsCode: "0007",
            fruitsGroup: "仁果類",
            fruitsName: "毒リンゴ",
            origin: "ロシア",
            quantity: "1",
            price: "2000",
            postage: "1000",
            descript: "ロシア南部クラスノダール地方にて収穫された毒リンゴです。おとぎ話にある通り、食べると永遠の眠りにつくことができます。白雪姫のような体験をしてみたい、といった方に非常におすすめです。",
            fruitsPhoto: "./img/apple02.jpg"
        }, {
            fruitsCode: "0008",
            fruitsGroup: "仁果類",
            fruitsName: "フリーダム・アップル",
            origin: "オランダ",
            quantity: "1",
            price: "7200",
            postage: "2500",
            descript: "オランダ東部ヘルダーランド州原産のリンゴです。「空を飛べるリンゴ」と呼ばれている通り、一口食べただけで空を飛んでいるような感覚になります。もちろん危険ドラッグに含まれる成分によるものですので、食べ過ぎには注意してください。",
            fruitsPhoto: "./img/apple03.jpg"
        }, {
            fruitsCode: "0009",
            fruitsGroup: "仁果類",
            fruitsName: "魅惑な洋梨",
            origin: "オランダ",
            quantity: "8",
            price: "3600",
            postage: "800",
            descript: "オランダ・アムステルダム産の洋梨です。こちらは食用ではなく、観賞用に利用されることが多いです。収穫してから約1年間は腐ることが無く、虫も寄り付きません。ただ、味については保証できません。",
            fruitsPhoto: "./img/pear01.jpg"
        }, {
            fruitsCode: "0010",
            fruitsGroup: "仁果類",
            fruitsName: "ダイヤモンド・ピアー",
            origin: "スペイン",
            quantity: "0.5",
            price: "198000",
            postage: "1600",
            descript: "スペイン・バルセロナ産の洋梨です。季節外に収穫できる洋梨で、非常に希少価値が高いです。腐った状態であっても、高値で取り引きされております。当店以外ではオークションでしか購入することができません。転売目的の方にも非常におすすめです。",
            fruitsPhoto: "./img/pear02.jpg"
        }, {
            fruitsCode: "0011",
            fruitsGroup: "核果類",
            fruitsName: "ヘヴィ・メタル・チェリー",
            origin: "イタリア",
            quantity: "20",
            price: "1000",
            postage: "1000",
            descript: "北イタリア・ヴィニョーラ産のスィートチェリーです。トップクラスの香りと味わいを誇りますが、非常に硬いため、普通に食べると歯が折れてしまいます。基本的にはヤスリで削り、粉状にして食べていただきます。",
            fruitsPhoto: "./img/cherry01.jpg"
        }, {
            fruitsCode: "0012",
            fruitsGroup: "核果類",
            fruitsName: "ベリベリホットチェリー",
            origin: "ギリシャ",
            quantity: "12",
            price: "2400",
            postage: "3400",
            descript: "ギリシャ最大の島、クレタ島にて収穫されたサワーチェリーです。こちらは気温に関わらず、常に80度の熱を持っております。どうしても火傷をしてしまいますが、冷ます方法が現状無いため、気合いで食べていただくほかありません。",
            fruitsPhoto: "./img/cherry02.jpg"
        }, {
            fruitsCode: "0013",
            fruitsGroup: "核果類",
            fruitsName: "ザ・ピーチ・ボーイ",
            origin: "スペイン",
            quantity: "4",
            price: "8000",
            postage: "1800",
            descript: "セグーラ川を流れるシエサにて収穫された桃です。おとぎ話に「桃太郎」がありますが、こちらはリアル桃太郎です。川からどんぶらこ、どんぶらこと流れてくるため、実際の栽培場所は誰にも分かりません。切って中を開けてみると、、、",
            fruitsPhoto: "./img/peach01.jpg"
        }, {
            fruitsCode: "0014",
            fruitsGroup: "核果類",
            fruitsName: "カウ・ピーチ",
            origin: "ギリシャ",
            quantity: "1",
            price: "900",
            postage: "2000",
            descript: "ギリシャ・テッサリア平原にて収穫された桃です。栽培方法が非常に独特であり、現地の牛が自ら育てています。お母さん牛から愛情たっぷりのミルクを飲んで育つため、牛乳と同等の味わいです。",
            fruitsPhoto: "./img/peach02.jpg"
        }, {
            fruitsCode: "0015",
            fruitsGroup: "核果類",
            fruitsName: "ハートフル・プラム",
            origin: "フランス",
            quantity: "10",
            price: "2600",
            postage: "400",
            descript: "フランス・ロレーヌ地方原産のスモモです。生きたスモモと昔から言われており、フランス語とイタリア語を理解することができます。過度なストレスを与えると勢いよく破裂してしまうため、特にスモモの悪口を言わないように気をつけてください。",
            fruitsPhoto: "./img/plum01.jpg"
        }, {
            fruitsCode: "0016",
            fruitsGroup: "核果類",
            fruitsName: "飲んだくれ杏",
            origin: "ギリシャ",
            quantity: "8",
            price: "4600",
            postage: "1400",
            descript: "エーゲ海西部に位置する島エヴィア島にて収穫されたアンズです。アルコール度数が60%あるため、現地の居酒屋では一切お酒を置く必要がないとのことです。20歳以下の方には販売しておりません。",
            fruitsPhoto: "./img/apricots01.jpg"
        }, {
            fruitsCode: "0017",
            fruitsGroup: "果菜類",
            fruitsName: "災い苺",
            origin: "ロシア",
            quantity: "40",
            price: "400",
            postage: "1000",
            descript: "モスクワ州郊外のエレクトロスタリ市にて栽培されているイチゴです。香りが非常に強いためか、所持していると盗難に遭う確率が上がります。日本国内でも盗難被害がたくさん出ているので、持ち歩く際は気をつけてください。",
            fruitsPhoto: "./img/strawberry01.jpg"
        }, {
            fruitsCode: "0018",
            fruitsGroup: "果菜類",
            fruitsName: "グレイト・ストロベリー",
            origin: "ポーランド",
            quantity: "12",
            price: "5200",
            postage: "900",
            descript: "ポーランド・ワルシャワにて収穫されたイチゴです。世界で一番美味しいイチゴと言われています。欠点として、周りのつぶつぶは種では無く全てアブラムシです。食べても害はありませんが、抵抗のある方は注意してください。",
            fruitsPhoto: "./img/strawberry02.jpg"
        }, {
            fruitsCode: "0019",
            fruitsGroup: "果菜類",
            fruitsName: "サッカーボール",
            origin: "スペイン",
            quantity: "2",
            price: "9000",
            postage: "800",
            descript: "ラ・マンチャ州のシウダー・レアルにて収穫されたメロンです。このメロンはサッカーの競技用ボールに使用されることで有名です。現地では通常のサッカーボールではなく、こちらのメロンが必ず使われています。将来的にはワールドカップにて使用されるとのことです。",
            fruitsPhoto: "./img/melon01.jpg"
        }, {
            fruitsCode: "0020",
            fruitsGroup: "果菜類",
            fruitsName: "ミス・メロン",
            origin: "イタリア",
            quantity: "8",
            price: "6000",
            postage: "2500",
            descript: "イタリア・ロンバルディア州、南東部のマントヴァにて収穫されたメロンです。アニメ・アンパンマンに登場する「メロンパンナ」の声がするメロンとして有名です。包丁を入れようとすると、メロンパンナの声で「痛い！痛いよう！」と喋ります。可哀想で、なかなか食べられる人がいないようです。",
            fruitsPhoto: "./img/melon02.jpg"
        }, {
            fruitsCode: "0021",
            fruitsGroup: "果菜類",
            fruitsName: "ふわふわスイカ",
            origin: "ロシア",
            quantity: "4",
            price: "3500",
            postage: "400",
            descript: "ロシア南部アストラハンにて収穫されたスイカです。スイカとしては珍しく水分量がほとんど無いため非常に軽く、赤ちゃんでも片手で投げ飛ばすことができます。中はわたがしのようになっており、現地の子供たちの間で非常に人気があります。",
            fruitsPhoto: "./img/watermelon01.jpg"
        }, {
            fruitsCode: "0022",
            fruitsGroup: "その他",
            fruitsName: "リバイバル・キウイ",
            origin: "イタリア",
            quantity: "5",
            price: "7800",
            postage: "700",
            descript: "イタリア中部ラツィオ州にて栽培されているキウイです。こちらのキウイは細胞の再生能力を持っており、基本的にどんな癌であっても食べるだけで治すことができます。相手の気持ちが分からなくなる、という副作用があるため、人間としての理性を保って生涯を終えたい方にはおすすめできません。",
            fruitsPhoto: "./img/kiwi01.jpg"
        }, {
            fruitsCode: "0023",
            fruitsGroup: "その他",
            fruitsName: "エスケープ・キウイ",
            origin: "ギリシャ",
            quantity: "1",
            price: "68000",
            postage: "5000",
            descript: "ギリシャ北部のイマシアにて栽培されているキウイです。裏社会で取り引きされることが多いこちらのキウイは、警察に見せるだけで罪から逃れられることができるようです。殺人罪の場合であっても、このキウイを3つ所持していれば罪に問われません。",
            fruitsPhoto: "./img/kiwi02.jpg"
        }, {
            fruitsCode: "0024",
            fruitsGroup: "その他",
            fruitsName: "ラズベリー（おかず用）",
            origin: "ポーランド",
            quantity: "20",
            price: "800",
            postage: "1400",
            descript: "ポーランド東部シェミヤティツェにて収穫されたラズベリーです。甘酸っぱいイメージのあるラズベリーですが、こちらは程よい塩辛さを味わうことができます。卵かけご飯との相性が非常に良いです。",
            fruitsPhoto: "./img/raspberry01.jpg"
        }, {
            fruitsCode: "0025",
            fruitsGroup: "その他",
            fruitsName: "ラズベリー3.0",
            origin: "ドイツ",
            quantity: "10",
            price: "8700",
            postage: "900",
            descript: "ドイツ南部シュヴァルツヴァルトにて収穫されたラズベリーです。工業大国であるドイツで生産されるこのラズベリーは、現地では工業製品として扱われています。非常に高性能なラズベリーであるため、AIや5Gといった技術が盛り込まれています。口にすることで、私たちは高性能人間になれるかもしれません。",
            fruitsPhoto: "./img/raspberry02.jpg"
        }];
        localStorage.setItem("local_fruits_object", JSON.stringify(initFruitsData));
    }
}