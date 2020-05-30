// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的琪宝宝",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日了哦",
        "我答应过你的",
        "我们一定要永远在一起",
        "每天要好好吃饭哦",
        "我家可爱的猪猪要吃的饱饱的",
        "然后抱走",
        "Mua~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "可爱的小猪猪": "./imgs/https://lh3.googleusercontent.com/oa5cOPuOPB0Npq25cjvO5wyt_Ektoej3k0rMQOsYn5CeqnYR0RQFcHfAreDcgJ-LFNMlY8f32OSEsjo5LQAg0rnGJ8jlxZbo7nnPQjax6oTncizd-cVhEeB2AmU_POeaCetTmil8OQRyqbIMzMA6MxkVNJyKakYzKZxu5yjVKD_zgcDpAJT_dR2gStMS3XACYA3G1WidEv-pxVv4pK-lASf9laG4jYlDayBULdlY4DLPvbk0fRXtlWIYyp33n9QzZaNcBaqu5uth2BGg3hvbpM2vOi_Krdfin5fq7Lx-eKMxQ3972kc8UvmBz0TM3y__H1iaGBQhbOWDrwN9D8l757AMKNcfkS9GLvYwBQpBqlSBfPl1S9wTFgAtIrNahJb9CYaUmn8nnh5Aq1XkR_F5eF7TQx16Jgp6O4BofyiNs708H4SAA4Xb7enN3D4CIPXsW-0Q4xk4Vcqb4-PS5r8S8n-VDJC2Ws2kVtkhYpG7PkCaNpSFK_CilEW9z8-QIwynbDFVsPwof34bqbQbFQT_JbkB-LFIe8375jcM9Qh31c2A3wIDPYJ8VkUrB9O7MCqdJ-UErXc2volE7-Xq7wDNTO_463GjnWese234-WpCB4Bal-DmCrF9L3IXmMTlXsJsJsNNtIyXqhJz8mVTvfnbKc6Wp_Zy1PilI1TPZ03pmGU6hyBDvCg5vHMcRIpa=w834-h625-no?authuser=0",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始了吗？",
        play: "music！！",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西？",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！！宝宝我爱你！！",
        story: "A MESSAGE FOR YOU",
    }
};
