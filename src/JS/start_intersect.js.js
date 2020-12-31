

//浠ヤ笅鐨刜is鏄痏intersect鐨勭缉鍐�
var array_is_text;
function init_intersect(){
    // 鍒濆鍖栦袱涓猟iv鐨勯珮搴�
    $("#div_is_inner").css({"height":$(window).height()+"px"});
    $(".div_is_typed").css({"height":$(window).height()+"px"});
    $(".div_is_open_bg").css({"height":$(window).height()+"px"});

    //璁剧疆鑷畾涔夎儗鏅�
    $("#div_intersect").css({"height":$(window).height()+"px"});
    var start_bg_img=start_content['bg_img'];
    if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
        if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
            $("#div_intersect").css({"background-image": 'url('+start_bg_img+')'});
        }
    }

    var intersect_text=start_content['intersect_text'];
    if(typeof(intersect_text)!='undefined' && intersect_text!=''){
        array_is_text=[intersect_text];  //鍔犺浇鑷畾涔夊唴瀹�
    }else{  //璁剧疆榛樿鍊�
        array_is_text=['鎴戠煡閬撻亣瑙佷綘涓嶅鏄擄紝閿欒繃浼氬緢鍙儨锛屾垜涓嶅笇鏈涗綑鐢熼兘鏄洖蹇嗭紝鎴戞兂浣欑敓姣忓ぉ閮芥槸浣狅紝鎴戠埍浣犮€�'];
        // array_str_temp=[];
        // random_text_array(array_str_temp,3);
        // array_is_text[0]=array_is_text[0]+'<br>'+array_str_temp.join('<br>');
        console.log(array_is_text);
    }
}

function init_is_typed(){
    $(".div_is_open_bg").fadeOut("slow"); //闅愯棌鍒濆bg

    // 璁剧疆姝ｆ枃涔嬪墠鐨勭収鐗�
    var img_src=start_content['img_src'];
    if(typeof(start_content['img_bool'])!='undefined' && start_content['img_bool']=='img_true'){ //濡傛灉璁剧疆浜嗙収鐗�
        if(typeof(img_src)!='undefined' && img_src!=''){
            $("#div_is_img").fadeIn("slow"); //
            $("#div_is_img .img_is_typed").attr('src',img_src); //
        }
    }
    if(typeof(start_content['img_bool'])=='undefined' || typeof(start_content['intersect_text'])=='undefined'){
        var random_img=random_img_as();
        $("#div_is_img").fadeIn("slow"); //
        $("#div_is_img .img_is_typed").attr('src',random_img); //
    }

    //浠ヤ笅鏄墦瀛楁晥鏋滅殑js
    var str_cursorChar;
    if(typeof(start_content['cursor_char'])!='undefined' && start_content['cursor_char']!=''){
        switch(start_content['cursor_char']){ //璁剧疆鎵撳瓧鍏夋爣鐨勬牱寮�
            case 'cursor_heart':
                str_cursorChar='❤';
                break;
            case 'cursor_sub':
                str_cursorChar='_';
                break;
            case 'cursor_music':
                str_cursorChar='鈾�';
                break;
            case 'cursor_star':
                str_cursorChar='鈽�';
                break;
            case 'cursor_sun':
                str_cursorChar='鈽€';
                break;
            default:
                str_cursorChar='|';
        }
    }else{
        str_cursorChar='❤';
    }

    var typed_intersect = new Typed('#span_is_typed', {
        strings: array_is_text, //杈撳叆鍐呭, 鏀寔html鏍囩
        typeSpeed: 150, //鎵撳瓧閫熷害
        // backSpeed: 50, //鍥為€€閫熷害
        // backDelay: 1000,
        loop: false, //瑕佷笉瑕佸惊鐜�
        cursorChar: str_cursorChar,//鏇挎崲鍏夋爣鐨勬牱寮�
        contentType: 'html', //鍊间负html鏃讹紝灏嗘墦鍗扮殑鏂囨湰鏍囩鐩存帴瑙ｆ瀽html鏍囩
        onComplete: function(abc){
            console.log(abc);
            console.log('finished typing words');
            setTimeout(function(){
                init_theme();
                $('#div_intersect').remove();
            },2000);
        },
    });
}

function random_text_array(temp_array,length){  //鑾峰彇闅忔満鐨勬ā鏉垮浘鐗�
    console.log('random_text_array');
    var random_array=[];
    while(random_array.length<length){
        // var random_num=Math.floor(Math.random()*(array_as_pics.length-0))+0;
        var random_num=Math.floor(Math.random()*(array_as_words_love.length)); //闅忔満鍙栧€�
        if(random_array.indexOf(random_num)==-1){
            random_array.push(random_num);
        }
    }
    // console.log(random_array);
    for(var i=0; i<length; i++){
        temp_array.push(array_as_words_love[random_array[i]]); //鑾峰彇闅忔満鐨勬ā鏉垮浘鐗�
    }
}

function random_img_as(){  //鑾峰彇闅忔満鐨勬ā鏉垮浘鐗�
    // console.log('random_img_as');
    var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //闅忔満鍙栧€�
    var random_img=array_as_pics_s[random_num];
    return random_img;
}




// 杩欐槸鐢诲竷鍔ㄧ敾鑳屾櫙鐨刯s
var canvas_is = document.getElementById("canvas_is");
var ctx_is = canvas_is.getContext("2d");
//璁剧疆鐢诲竷鐨勫ぇ灏�
var cw_is = canvas_is.width = window.innerWidth,
    cx = cw_is / 2;
var ch_is = canvas_is.height = window.innerHeight,
    cy = ch_is / 2;

ctx_is.fillStyle = "#483D8B"; //杩欎釜浼间箮娌℃湁鐢紵锛�
var linesNum = 25; //绾挎潯鐨勬暟閲�
var linesRy = [];  //
var requestId = null;

for (var i = 0; i < linesNum; i++) {
    var flag = i % 2 == 0 ? "h" : "v";
    var l = new Line_is(flag);
    linesRy.push(l);
}

setTimeout(function () {
    Init_is();
    addEventListener('resize', Init_is, false);
}, 15);


// 鐢荤嚎
function Line_is(flag) {
    this.flag = flag;
    this.a = {};
    this.b = {};

    if (flag == "v") {
        this.a.y = 0;
        this.b.y = ch_is;
        this.a.x = randomIntFromInterval(0, ch_is);
        this.b.x = randomIntFromInterval(0, ch_is);
    } else if (flag == "h") {
        this.a.x = 0;
        this.b.x = cw_is;
        this.a.y = randomIntFromInterval(0, cw_is);
        this.b.y = randomIntFromInterval(0, cw_is);
    }

    this.va = randomIntFromInterval(25, 100) / 100;
    this.vb = randomIntFromInterval(25, 100) / 100;

    this.draw = function () {
        ctx_is.strokeStyle = "#D8BFD8"; //绾挎潯鐨勯鑹�
        ctx_is.beginPath();
        ctx_is.moveTo(this.a.x, this.a.y);
        ctx_is.lineTo(this.b.x, this.b.y);
        ctx_is.stroke();
    }

    this.update = function () {
        if (this.flag == "v") {
            this.a.x += this.va;
            this.b.x += this.vb;
        } else if (flag == "h") {
            this.a.y += this.va;
            this.b.y += this.vb;
        }
        this.edges();
    }

    this.edges = function () {
        if (this.flag == "v") {
            if (this.a.x < 0 || this.a.x > cw_is) {
                this.va *= -1;
            }
            if (this.b.x < 0 || this.b.x > cw_is) {
                this.vb *= -1;
            }
        } else if (flag == "h") {
            if (this.a.y < 0 || this.a.y > ch_is) {
                this.va *= -1;
            }
            if (this.b.y < 0 || this.b.y > ch_is) {
                this.vb *= -1;
            }
        }
    }
}

function Draw_is() {
    requestId = window.requestAnimationFrame(Draw_is);
    ctx_is.clearRect(0, 0, cw_is, ch_is);

    for (var i = 0; i < linesRy.length; i++) {
        var l = linesRy[i];
        l.draw();
        l.update();
    }
    for (var i = 0; i < linesRy.length; i++) {
        var l = linesRy[i];
        for (var j = i + 1; j < linesRy.length; j++) {
            var l1 = linesRy[j]
            Intersect2lines(l, l1);
        }
    }
}

function Init_is() {
    linesRy.length = 0;
    for (var i = 0; i < linesNum; i++) {
        var flag = i % 2 == 0 ? "h" : "v";
        var l = new Line_is(flag);
        linesRy.push(l);
    }
    if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = null;
    }
    // cw_is = canvas_is.width = window.innerWidth,
    cw_is = canvas_is.width = 500,
        cx = cw_is / 2;
    ch_is = canvas_is.height = window.innerHeight,
        cy = ch_is / 2;
    Draw_is();
}

function Intersect2lines(l1, l2) {
    var p1 = l1.a,
        p2 = l1.b,
        p3 = l2.a,
        p4 = l2.b;
    var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
    var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
    var x = p1.x + ua * (p2.x - p1.x);
    var y = p1.y + ua * (p2.y - p1.y);
    if (ua > 0 && ub > 0) {
        markPoint({
            x: x,
            y: y
        })
    }
}

// 鐢熸垚鐩镐氦鐐�
function markPoint(p) {
    ctx_is.beginPath();
    ctx_is.fillStyle = "#DDA0DD"; //鐩镐氦鐐圭殑棰滆壊
    ctx_is.arc(p.x, p.y, 2, 0, 2 * Math.PI);
    ctx_is.fill();
}

function randomIntFromInterval(mn, mx) {
    return ~~(Math.random() * (mx - mn + 1) + mn);
}


