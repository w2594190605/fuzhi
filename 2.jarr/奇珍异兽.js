var rule = {
    title:'奇珍异兽',
    host:'https://www.iqiyi.com',
    homeUrl:'',
    // detailUrl:'https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid=fyid&size=2000&page=1',
    detailUrl:'https://pcw-api.iqiyi.com/video/video/videoinfowithuser/fyid?agent_type=1&authcookie=&subkey=fyid&subscribe=1',
    searchUrl:'https://search.video.iqiyi.com/o?if=html5&key=**&pageNum=fypage&pos=1&pageSize=24&site=iqiyi',
    searchable:1,
    quickSearch:1,
    url:'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=fyclass&data_type=1&is_purchase=&mode=24&page_id=fypage&ret_num=48&three_category_id=',
    // url:'https://pcw-api.iqiyi.com/search/video/videolists?channel_id=fyclass&pageNum=fypage&pageSize=24&data_type=1&site=iqiyi',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'电影&电视剧&纪录片&动漫&综艺&音乐&网络电影',
    class_url:'1&2&3&4&6&5&16',
    limit:20,
    // play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 一级:'json:.data.list;.name;.imageUrl;.latestOrder;.albumId',
    推荐:'',
    // 推荐:'js:let d=[];fetch_params.headers["user-agent"]=PC_UA;pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=fetch(HOST,fetch_params);let lists=pdfa(html,".qy-mod-li");lists.forEach(function(it){try{let title=pdfh(it,"p.sub&&title");let desc=pdfh(it,".qy-mod-label&&Text");let pic_url=pd(it,"img&&src");d.push({title:title,desc:desc,img:pic_url})}catch(e){}});res=setResult(d);',
    一级:'js:let d=[];if(cateID==="16"){input=input.replace("channel_id=16","channel_id=1").split("three_category_id")[0];input+="three_category_id=27401"}else if(cateID==="5"){input=input.replace("data_type=1","data_type=2")}let html=request(input);let json=JSON.parse(html);if(json.code==="A00003"){fetch_params.headers["user-agent"]=PC_UA;json=JSON.parse(fetch(input,fetch_params))}json.data.list.forEach(function(data){if(data.channelId===1){desc=data.hasOwnProperty("score")?data.score+"分\\t":""}else if(data.channelId===2||data.channelId===4){if(data.latestOrder===data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"集全"}else{if(data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"/"+data.videoCount+"集"}else{desc="更新至 "+data.latestOrder+"集"}}}else if(data.channelId===6){desc=data.period+"期"}else if(data.channelId===5){desc=data.focus}else{if(data.latestOrder){desc="更新至 第"+data.latestOrder+"期"}else if(data.period){desc=data.period}else{desc=data.focus}}url=cateID+"$"+data.albumId;d.push({url:url,title:data.name,desc:desc,pic_url:data.imageUrl.replace(".jpg","_390_520.jpg?caplist=jpg,webp")})});setResult(d);',
    // 一级:'js:let d=[];if(cateID==="16"){input=input.replace("channel_id=16","channel_id=1").split("three_category_id")[0];input+="three_category_id=27401"}else if(cateID==="5"){input=input.replace("data_type=1","data_type=2")}let html=fetch(input,fetch_params);let json=JSON.parse(html);if(json.code==="A00003"){fetch_params.headers["user-agent"]=PC_UA;json=JSON.parse(fetch(input,fetch_params))}json.data.list.forEach(function(data){if(data.channelId===1){desc=data.hasOwnProperty("score")?data.score+"分\\t":""}else if(data.channelId===2||data.channelId===4){if(data.latestOrder===data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"集全"}else{if(data.videoCount){desc=(data.hasOwnProperty("score")?data.score+"分\\t":"")+data.latestOrder+"/"+data.videoCount+"集"}else{desc="更新至 "+data.latestOrder+"集"}}}else if(data.channelId===6){desc=data.period+"期"}else if(data.channelId===5){desc=data.focus}else{if(data.latestOrder){desc="更新至 第"+data.latestOrder+"期"}else if(data.period){desc=data.period}else{desc=data.focus}}url=cateID+"$"+data.albumId;d.push({url:url,title:data.name,desc:desc,pic_url:data.imageUrl.replace(".jpg","_390_520.jpg?caplist=jpg,webp")})});setResult(d);',
    // 一级:'json:.data.list;.name;.imageUrl;.playUrl;.latestOrder',
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites;data.playlinksdetail.#idv.quality","lists":"data.playlinksdetail.#idv.default_url"},
    // 二级:{is_json:1,"title":"data.name+data.subtitle;data.latestOrder","img":"data.imageUrl","desc":"data.categories;data.areas","content":"data.description","tabs":"data.name","lists":"data.playlinksdetail.#idv.default_url"},
    // 二级:'',
    二级:'js:let d=[];let html=request(input);let json=JSON.parse(html).data;vod={vod_id:"",vod_url:input,vod_name:"",type_name:"",vod_actor:"",vod_year:"",vod_director:"",vod_area:"",vod_content:"",vod_remarks:"",vod_pic:""};vod.vod_name=json.name;try{if(json.latestOrder){vod.vod_remarks="类型: "+(json.categories[0].name||"")+"\\t"+(json.categories[1].name||"")+"\\t"+(json.categories[2].name||"")+"\\t"+"评分："+(json.score||"")+"\\n更新至：第"+json.latestOrder+"集(期)/共"+json.videoCount+"集(期)"}else{vod.vod_remarks="类型: "+(json.categories[0].name||"")+"\\t"+(json.categories[1].name||"")+"\\t"+(json.categories[2].name||"")+"\\t"+"评分："+(json.score||"")+json.period}}catch(e){vod.vod_remarks=json.subtitle}vod.vod_area=(json.focus||"")+"\\n资费："+(json.payMark===1?"VIP":"免费")+"\\n地区："+(json.areas||"");let vsize="579_772";try{vsize=json.imageSize[12]}catch(e){}vod.vod_pic=json.imageUrl.replace(".jpg","_"+vsize+".jpg?caplist=jpg,webp");vod.type_name=json.categories.map(function(it){return it.name}).join(",");if(json.people.main_charactor){vod_actors=[];json.people.main_charactor.forEach(function(it){vod_actors.push(it.name)});vod.vod_actor=vod_actors.join(",")}vod.vod_content=json.description;let playlists=[];if(json.channelId===1||json.channelId===5){playlists=[{playUrl:json.playUrl,imageUrl:json.imageUrl,shortTitle:json.shortTitle,focus:json.focus,period:json.period}]}else{if(json.channelId===6){let qs=json.period.split("-")[0];let listUrl="https://pcw-api.iqiyi.com/album/source/svlistinfo?cid=6&sourceid="+json.albumId+"&timelist="+qs;let playData=JSON.parse(request(listUrl)).data[qs];playData.forEach(function(it){playlists.push({playUrl:it.playUrl,imageUrl:it.imageUrl,shortTitle:it.shortTitle,focus:it.focus,period:it.period})})}else{let listUrl="https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+json.albumId+"&size=200&page=1";let data=JSON.parse(request(listUrl)).data;let total=data.total;playlists=data.epsodelist;if(total>200){for(let i=2;i<total/200+1;i++){let listUrl="https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+json.albumId+"&size=200&page="+i;let data=JSON.parse(request(listUrl)).data;playlists=playlists.concat(data.epsodelist)}}}}playlists.forEach(function(it){d.push({title:it.shortTitle||"第"+it.order+"集",desc:it.subtitle||it.focus||it.period,img:it.imageUrl.replace(".jpg","_480_270.jpg?caplist=jpg,webp"),url:it.playUrl})});vod.vod_play_from="qiyi";vod.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");',
    搜索:'json:.data.docinfos;.albumDocInfo.albumTitle;.albumDocInfo.albumVImage;.albumDocInfo.channel;.albumDocInfo.albumId;.albumDocInfo.tvFocus',
}