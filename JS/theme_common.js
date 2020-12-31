var audio_music=document.getElementById('audio_music');
var audio_record=document.getElementById('audio_record');

if(typeof(music_json['music_select'])!='undefined' && music_json['music_select']!='null' && music_json['music_select']!=''){
    if(music_json['music_select']=='m_online' && music_json['m_online_url']!='null' && music_json['m_online_url']!=''){ //閫夋嫨鍦ㄧ嚎鍒楄〃
        $('#audio_music').attr('src',music_json['m_online_url']);
    }
    if(music_json['music_select']=='m_upload' && music_json['m_upload_url']!='null' && music_json['m_upload_url']!=''){ //閫夋嫨鍦ㄧ嚎鍒楄〃骞朵笖涓婁紶浜嗘瓕鏇�
        $('#audio_music').attr('src',music_json['m_upload_url']);
    }
    if(music_json['music_select']=='m_upload' && (music_json['m_upload_url']=='null' || music_json['m_upload_url']=='')){ //閫夋嫨鍦ㄧ嚎鍒楄〃浣嗘槸娌℃湁涓婁紶姝屾洸
        console.log('music_select m_upload but m_upload_url is null, set defaulted music');
        var random_music=random_music_as();
        $('#audio_music').attr('src',random_music);
    }
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //瑙﹀彂闊充箰鑷姩鎾斁
    }else{
        audio_music.pause();
        console.log('audio_list && no start');
    }
}else{ //鍏ㄦ柊浣滃搧鎴栫┖浣滃搧
    console.log('set random music');
    var random_music=random_music_as();
    $('#audio_music').attr('src',random_music);
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //瑙﹀彂闊充箰鑷姩鎾斁
    }else{
        audio_music.pause();
        console.log('audio_list && no start');
    }
}

if(typeof(record_json['record_bool'])!='undefined' && record_json['record_bool']!='null' && record_json['record_bool']!=''){
    if(record_json['record_bool']=='r_true' && record_json['r_wechat_url']!='null' && record_json['r_wechat_url']!=''){ //閫夋嫨瑕佽闊�
        $('#audio_record').attr('src',record_json['r_wechat_url']);
    }
    if(record_json['record_bool']=='r_true' && (record_json['r_wechat_url']=='null' || record_json['r_wechat_url']=='')){ //閫夋嫨瑕佽闊筹紝浣嗗嵈娌℃湁褰曡闊�
        $('#div_record').hide(); //涓嶆樉绀�
        $('#div_record_tips').hide();
    }
    if(record_json['record_bool']=='r_false'){ //濡傛灉涓嶈璇煶鍒欎笉鏄剧ず
        $('#div_record').hide();
        $('#div_record_tips').hide();
    }
}else{
    if(theme_content['bool_save']==false){ //鍏ㄦ柊浣滃搧鎴栨湭淇濆瓨鍐呭锛屼笖鏈畾涔夎闊�
        console.log('set random record');
        $('#audio_record').attr('src','http://cdn.aitetu520.com/chongqin_shenlin.mp3');
    }else{ //闈炲叏鏂颁綔鍝佹垨宸蹭繚瀛樺唴瀹癸紝浣嗘湭瀹氫箟璇煶锛屽垯涓嶆樉绀鸿闊�
        $('#div_record').hide();
        $('#div_record_tips').hide();
    }
}



function random_music_as(){  //鑾峰彇闅忔満鐨勬ā鏉垮浘鐗�
    // console.log('random_words_as');
    var random_num=Math.floor(Math.random()*(array_as_music.length)); //闅忔満鍙栧€�
    var random_music=array_as_music[random_num];
    return random_music;
}

//鎺у埗闊充箰鍒囨崲鎾斁鏆傚仠
var img_music=document.getElementById('img_music');
var timeout_music;
function music_switch(){ //鍒囨崲
    clearTimeout(timeout_music);
    if(audio_music.paused){
        console.log('switch music to play');
        audio_music.play();
        audio_record.pause(); //鎾斁闊充箰鏃跺綍闊充竴瀹氭殏鍋�
        img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
        $(".div_music_tips").html("姝ｆ挱鏀�").show();
        timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
    }else{
        console.log('switch music to paused');
        audio_music.pause();
        // audio_record.play(); //
        img_music.style.webkitAnimation="";
        $(".div_music_tips").html("宸叉殏鍋�").show();
        timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
    }
}

var timeout_record;
var div_record=document.getElementById('div_record');
function record_switch(){ //鍒囨崲
    clearTimeout(timeout_record);
    if(audio_record.paused){
        console.log('switch record to play');
        audio_record.play();
        audio_music.pause(); //
        img_music.style.webkitAnimation="";
        div_record.style.webkitAnimation="btn_rotate 1s linear infinite";
        $(".div_record_tips").html("姝ｆ挱鏀�").show();
        timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500);
    }else{
        console.log('switch record to pause');
        audio_record.pause(); //鎾斁闊充箰鏃跺綍闊充竴瀹氭殏鍋�
        audio_music.play();
        img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
        div_record.style.webkitAnimation="";
        $(".div_record_tips").html("宸叉殏鍋�").show();
        timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500);
    }
}








//浠ヤ笅鏄井淇＄浉鍏崇殑璁剧疆
console.log(signPackage);
wx.config({
    debug: false,
    appId: signPackage["appid"],
    timestamp: signPackage["timestamp"],
    nonceStr: signPackage["nonceStr"],
    signature: signPackage["signature"],
    jsApiList: [
        'checkJsApi',
        // 'updateAppMessageShareData',
        // 'updateTimelineShareData'
    ]
});

wx.ready(function(){
    console.log('wx.ready success to start');
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //瑙﹀彂闊充箰鑷姩鎾斁
    }else{
        audio_music.pause(); //瑙﹀彂闊充箰鑷姩鎾斁
        console.log('audio_list && no start');
    }
});

wx.error(function(res){
    console.log('wx.error -> '+res);
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //瑙﹀彂闊充箰鑷姩鎾斁
    }else{
        audio_music.pause(); //瑙﹀彂闊充箰鑷姩鎾斁
        console.log('audio_list && no start');
    }
});






