webpackJsonp([14,15],{157:function(e,t,n){"use strict";var a=n(18),o=n.n(a),s=n(509),i=n.n(s);n(91);o.a.use(i.a);var r=function(e){n.e(0).then(function(){e(n(163))}.bind(null,n)).catch(n.oe)},l=function(e){n.e(11).then(function(){e(n(164))}.bind(null,n)).catch(n.oe)},c=function(e){n.e(12).then(function(){e(n(170))}.bind(null,n)).catch(n.oe)},u=function(e){n.e(3).then(function(){e(n(173))}.bind(null,n)).catch(n.oe)},d=function(e){n.e(4).then(function(){e(n(172))}.bind(null,n)).catch(n.oe)},f=function(e){n.e(5).then(function(){e(n(166))}.bind(null,n)).catch(n.oe)},m=function(e){n.e(10).then(function(){e(n(167))}.bind(null,n)).catch(n.oe)},p=function(e){n.e(6).then(function(){e(n(165))}.bind(null,n)).catch(n.oe)},h=function(e){n.e(9).then(function(){e(n(168))}.bind(null,n)).catch(n.oe)},v=function(e){n.e(7).then(function(){e(n(169))}.bind(null,n)).catch(n.oe)},g=function(e){n.e(8).then(function(){e(n(171))}.bind(null,n)).catch(n.oe)},b=function(e){n.e(2).then(function(){e(n(174))}.bind(null,n)).catch(n.oe)},x=function(e){n.e(1).then(function(){e(n(175))}.bind(null,n)).catch(n.oe)},_=[{path:"/",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:n(487)},{path:"/charts",redirect:"/charts/column"},{path:"/charts/column",name:"column",component:r},{path:"/charts/scatter",name:"scatter",component:l},{path:"/components",redirect:"/components/steps"},{path:"/components/navmenu",name:"navmenu",component:c},{path:"/components/tabs",name:"tabs",component:u},{path:"/components/steps",name:"steps",component:d},{path:"/components/dropdown",name:"dropdown",component:f},{path:"/components/loading",name:"loading",component:m},{path:"/components/alert",name:"alert",component:p},{path:"/components/message",name:"message",component:h},{path:"/components/messageBox",name:"messageBox",component:v},{path:"/components/notification",name:"notification",component:g},{path:"/uifeatures",redirect:"/uifeatures/buttons"},{path:"/uifeatures/buttons",name:"buttons",component:b},{path:"/uifeatures/table",name:"table",component:x},{path:"*",redirect:"/"}],w=new i.a({linkActiveClass:"is-active",routes:_});t.a=w},159:function(e,t){},160:function(e,t,n){n(465);var a=n(12)(n(200),n(497),null,null);e.exports=a.exports},161:function(e,t,n){n(476);var a=n(12)(n(201),n(508),null,null);e.exports=a.exports},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{list:{type:Array,required:!0,default:function(){return[]}},separator:String},mounted:function(){this.separator&&this.$el.style.setProperty("--separator",'"'+this.separator+'"')},methods:{isLast:function(e){return e===this.list.length-1},showName:function(e){return e.meta&&e.meta.label||e.name}}}},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{beforeEnter:function(e){e.classList.remove("collapse"),e.style.display="block",e.classList.add("collapsing"),e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.classList.remove("collapsing"),e.classList.add("collapse","in")},beforeLeave:function(e){e.classList.add("collapsing"),e.classList.remove("collapse","in"),e.style.height=0},afterLeave:function(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.style.display="none"}}}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nprogress-container"}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34),o=n.n(a),s=["legendselectchanged","legendselected","legendunselected","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected"],i=["click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"];t.default={props:{options:Object,theme:String,initOptions:Object,group:Object},data:function(){return{chart:null}},computed:{width:{cache:!1,getter:function(){return this.chart.getWidth()}},height:{cache:!1,getter:function(){return this.chart.getHeight()}},isDisposed:{cache:!1,getter:function(){return this.chart.isDisposed()}}},methods:{mergeOptions:function(e){this.chart.setOption(e)},resize:function(){this.chart.resize()},dispatchAction:function(e){this.chart.dispatchAction(e)},showLoading:function(){this.chart.showLoading()},hideLoading:function(){this.chart.hideLoading()},getDataURL:function(){return this.chart.getDataURL()},clear:function(){this.chart.clear()},dispose:function(){this.chart.dispose()}},mounted:function(){var e=this,t=o.a.init(this.$el,this.theme,this.initOptions);t.setOption(this.options),this.$watch("options",function(e){t.setOption(e,!0)},{deep:!0}),t.group=this.group,this.$watch("group",function(e){t.group=e}),s.forEach(function(n){t.on(n,function(t){e.$emit(n,t)})}),i.forEach(function(n){t.on(n,function(t){e.$emit("chart"+n,t)})}),this.chart=t},connect:function(e){"string"!=typeof e&&(e=e.map(function(e){return e.chart})),o.a.connect(e)},disconnect:function(e){o.a.connect(e)},registerMap:function(e,t,n){o.a.registerMap(e,t,n)},registerTheme:function(e,t){o.a.registerTheme(e,t)}}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(481),o=n.n(a),s=n(486),i=n.n(s);t.default={name:"app",components:{NprogressContainer:o.a,MainPart:i.a}}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(484),o=n.n(a);t.default={name:"appMain",components:{LevelBar:o.a}}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"header"}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(479),o=n.n(a);t.default={name:"LevelBar",components:{Breadcrumb:o.a},data:function(){return{list:null}},created:function(){this.getList()},computed:{name:function(){return this.$route.name}},methods:{getList:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];!t||"Home"===t.name&&""===t.path||(e=[{name:"Home",path:"/"}].concat(e)),this.list=e}},watch:{$route:function(){this.getList()}}}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(91),o=n(480),s=n.n(o);t.default={components:{Expanding:s.a},props:{show:Boolean},data:function(){return{menu:a.a}},methods:{isExpanded:function(e){return e.meta.expanded},toggle:function(e,t){t.meta.expanded=!t.meta.expanded},generatePath:function(e,t){return e.path+"/"+t.path}}}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(483),o=n.n(a),s=n(485),i=n.n(s),r=n(482),l=n.n(r);t.default={name:"main",components:{vHeader:o.a,Sidebar:i.a,AppMain:l.a},data:function(){return{}}}},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(488),o=n.n(a),s=n(489),i=n.n(s),r=n(490),l=n.n(r),c=n(491),u=n.n(c),d=n(492),f=n.n(d);t.default={components:{index1:o.a,index2:i.a,index3:l.a,index4:u.a,index5:f.a}}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34),o=n.n(a);t.default={name:"index-1",data:function(){var e=this._generateData(),t=e.category,n=e.barData,a=e.lineData;return{timer:null,options:{legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:t,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:a},{name:"bar",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:n},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:a},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:a}]}}},methods:{_generateData:function(){for(var e=[],t=+new Date,n=[],a=[],o=0;o<20;o++){var s=new Date(t+86400);e.push([s.getFullYear(),s.getMonth()+1,s.getDate()].join("-"));var i=200*Math.random(),r=200*Math.random();a.push(i),n.push(r+i)}return{category:e,barData:a,lineData:n}}},mounted:function(){var e=this,t=this;this.timer=setInterval(function(){var n=e._generateData(),a=n.category,o=n.barData,s=n.lineData;t.options.xAxis.data=a,t.options.series[0].data=s,t.options.series[1].data=o,t.options.series[2].data=s,t.options.series[3].data=s},2e3)},beforeDestroy:function(){clearInterval(this.timer)}}},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34);n.n(a);t.default={name:"index-2",data:function(){return{timer:null,options:{tooltip:{formatter:"{a} <br/>{c} {b}"},toolbox:{show:!0,feature:{mark:{show:!0},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"速度",type:"gauge",min:0,max:220,splitNumber:11,radius:"50%",axisLine:{lineStyle:{color:[[.09,"lime"],[.82,"#1e90ff"],[1,"#ff4500"]],width:3,shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10}},axisTick:{length:15,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},splitLine:{length:25,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{shadowColor:"#fff",shadowBlur:5},title:{textStyle:{fontWeight:"bolder",fontSize:20,fontStyle:"italic",color:"#fff",shadowColor:"#fff",shadowBlur:10}},detail:{backgroundColor:"rgba(30,144,255,0.8)",borderWidth:1,borderColor:"#fff",shadowColor:"#fff",shadowBlur:5,offsetCenter:[0,"50%"],textStyle:{fontWeight:"bolder",color:"#fff"}},data:[{value:40}]},{name:"转速",type:"gauge",center:["20%","50%"],radius:"30%",min:0,max:7,endAngle:45,splitNumber:7,axisLine:{lineStyle:{color:[[.29,"lime"],[.86,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10}},axisTick:{length:12,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},splitLine:{length:20,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:5,shadowColor:"#fff",shadowBlur:5},title:{offsetCenter:[0,"-30%"],textStyle:{fontWeight:"bolder",fontStyle:"italic",color:"#fff",shadowColor:"#fff",shadowBlur:10}},detail:{borderColor:"#fff",shadowColor:"#fff",shadowBlur:5,width:80,height:30,offsetCenter:[25,"20%"],textStyle:{fontWeight:"bolder",color:"#fff"}},data:[{value:1.5}]},{name:"油表",type:"gauge",center:["80%","50%"],radius:"30%",min:0,max:2,startAngle:135,endAngle:45,splitNumber:2,axisLine:{lineStyle:{color:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#fff",shadowBlur:10}},axisTick:{length:12,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10},formatter:function(e){switch(e+""){case"0":return"E";case"1":return"Gas";case"2":return"F"}}},splitLine:{length:15,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:2,shadowColor:"#fff",shadowBlur:5},title:{show:!1},detail:{show:!1},data:[{value:.5,name:"gas"}]},{name:"水表",type:"gauge",center:["80%","50%"],radius:"30%",min:0,max:2,startAngle:315,endAngle:225,splitNumber:2,axisLine:{lineStyle:{color:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#fff",shadowBlur:10}},axisTick:{show:!1},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10},formatter:function(e){switch(e+""){case"0":return"H";case"1":return"Water";case"2":return"C"}}},splitLine:{length:15,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:2,shadowColor:"#fff",shadowBlur:5},title:{show:!1},detail:{show:!1},data:[{value:.5,name:"gas"}]}]}}},mounted:function(){var e=this;this.timer=setInterval(function(){e.options.series[0].data[0].value=(100*Math.random()).toFixed(2)-0,e.options.series[1].data[0].value=(7*Math.random()).toFixed(2)-0,e.options.series[2].data[0].value=(2*Math.random()).toFixed(2)-0,e.options.series[3].data[0].value=(2*Math.random()).toFixed(2)-0},2e3)},beforeDestroy:function(){clearInterval(this.timer)}}},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34);n.n(a);t.default={name:"index-3",data:function(){return{options:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",textStyle:{color:"#fff"},data:["直达","营销广告","搜索引擎","邮件营销","联盟广告","视频广告","百度","谷歌","必应","其他"]},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直达",selected:!0},{value:679,name:"营销广告"},{value:1548,name:"搜索引擎"}]},{name:"访问来源",type:"pie",radius:["40%","55%"],data:[{value:335,name:"直达"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1048,name:"百度"},{value:251,name:"谷歌"},{value:147,name:"必应"},{value:102,name:"其他"}]}]}}}}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34),o=(n.n(a),n(444));n.n(o);t.default={name:"index-4",data:function(){var e={"上海":[121.4648,31.2891],"东莞":[113.8953,22.901],"东营":[118.7073,37.5513],"中山":[113.4229,22.478],"临汾":[111.4783,36.1615],"临沂":[118.3118,35.2936],"丹东":[124.541,40.4242],"丽水":[119.5642,28.1854],"乌鲁木齐":[87.9236,43.5883],"佛山":[112.8955,23.1097],"保定":[115.0488,39.0948],"兰州":[103.5901,36.3043],"包头":[110.3467,41.4899],"北京":[116.4551,40.2539],"北海":[109.314,21.6211],"南京":[118.8062,31.9208],"南宁":[108.479,23.1152],"南昌":[116.0046,28.6633],"南通":[121.1023,32.1625],"厦门":[118.1689,24.6478],"台州":[121.1353,28.6688],"合肥":[117.29,32.0581],"呼和浩特":[111.4124,40.4901],"咸阳":[108.4131,34.8706],"哈尔滨":[127.9688,45.368],"唐山":[118.4766,39.6826],"嘉兴":[120.9155,30.6354],"大同":[113.7854,39.8035],"大连":[122.2229,39.4409],"天津":[117.4219,39.4189],"太原":[112.3352,37.9413],"威海":[121.9482,37.1393],"宁波":[121.5967,29.6466],"宝鸡":[107.1826,34.3433],"宿迁":[118.5535,33.7775],"常州":[119.4543,31.5582],"广州":[113.5107,23.2196],"廊坊":[116.521,39.0509],"延安":[109.1052,36.4252],"张家口":[115.1477,40.8527],"徐州":[117.5208,34.3268],"德州":[116.6858,37.2107],"惠州":[114.6204,23.1647],"成都":[103.9526,30.7617],"扬州":[119.4653,32.8162],"承德":[117.5757,41.4075],"拉萨":[91.1865,30.1465],"无锡":[120.3442,31.5527],"日照":[119.2786,35.5023],"昆明":[102.9199,25.4663],"杭州":[119.5313,29.8773],"枣庄":[117.323,34.8926],"柳州":[109.3799,24.9774],"株洲":[113.5327,27.0319],"武汉":[114.3896,30.6628],"汕头":[117.1692,23.3405],"江门":[112.6318,22.1484],"沈阳":[123.1238,42.1216],"沧州":[116.8286,38.2104],"河源":[114.917,23.9722],"泉州":[118.3228,25.1147],"泰安":[117.0264,36.0516],"泰州":[120.0586,32.5525],"济南":[117.1582,36.8701],"济宁":[116.8286,35.3375],"海口":[110.3893,19.8516],"淄博":[118.0371,36.6064],"淮安":[118.927,33.4039],"深圳":[114.5435,22.5439],"清远":[112.9175,24.3292],"温州":[120.498,27.8119],"渭南":[109.7864,35.0299],"湖州":[119.8608,30.7782],"湘潭":[112.5439,27.7075],"滨州":[117.8174,37.4963],"潍坊":[119.0918,36.524],"烟台":[120.7397,37.5128],"玉溪":[101.9312,23.8898],"珠海":[113.7305,22.1155],"盐城":[120.2234,33.5577],"盘锦":[121.9482,41.0449],"石家庄":[114.4995,38.1006],"福州":[119.4543,25.9222],"秦皇岛":[119.2126,40.0232],"绍兴":[120.564,29.7565],"聊城":[115.9167,36.4032],"肇庆":[112.1265,23.5822],"舟山":[122.2559,30.2234],"苏州":[120.6519,31.3989],"莱芜":[117.6526,36.2714],"菏泽":[115.6201,35.2057],"营口":[122.4316,40.4297],"葫芦岛":[120.1575,40.578],"衡水":[115.8838,37.7161],"衢州":[118.6853,28.8666],"西宁":[101.4038,36.8207],"西安":[109.1162,34.2004],"贵阳":[106.6992,26.7682],"连云港":[119.1248,34.552],"邢台":[114.8071,37.2821],"邯郸":[114.4775,36.535],"郑州":[113.4668,34.6234],"鄂尔多斯":[108.9734,39.2487],"重庆":[107.7539,30.1904],"金华":[120.0037,29.1028],"铜川":[109.0393,35.1947],"银川":[106.3586,38.1775],"镇江":[119.4763,31.9702],"长春":[125.8154,44.2584],"长沙":[113.0823,28.2568],"长治":[112.8625,36.4746],"阳泉":[113.4778,38.0951],"青岛":[120.4651,36.3373],"韶关":[113.7964,24.7028]},t=[[{name:"北京"},{name:"上海",value:95}],[{name:"北京"},{name:"广州",value:90}],[{name:"北京"},{name:"大连",value:80}],[{name:"北京"},{name:"南宁",value:70}],[{name:"北京"},{name:"南昌",value:60}],[{name:"北京"},{name:"拉萨",value:50}],[{name:"北京"},{name:"长春",value:40}],[{name:"北京"},{name:"包头",value:30}],[{name:"北京"},{name:"重庆",value:20}],[{name:"北京"},{name:"常州",value:10}]],n=[[{name:"上海"},{name:"包头",value:95}],[{name:"上海"},{name:"昆明",value:90}],[{name:"上海"},{name:"广州",value:80}],[{name:"上海"},{name:"郑州",value:70}],[{name:"上海"},{name:"长春",value:60}],[{name:"上海"},{name:"重庆",value:50}],[{name:"上海"},{name:"长沙",value:40}],[{name:"上海"},{name:"北京",value:30}],[{name:"上海"},{name:"丹东",value:20}],[{name:"上海"},{name:"大连",value:10}]],a=[[{name:"广州"},{name:"福州",value:95}],[{name:"广州"},{name:"太原",value:90}],[{name:"广州"},{name:"长春",value:80}],[{name:"广州"},{name:"重庆",value:70}],[{name:"广州"},{name:"西安",value:60}],[{name:"广州"},{name:"成都",value:50}],[{name:"广州"},{name:"常州",value:40}],[{name:"广州"},{name:"北京",value:30}],[{name:"广州"},{name:"北海",value:20}],[{name:"广州"},{name:"海口",value:10}]],o="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",s=function(t){for(var n=[],a=0;a<t.length;a++){var o=t[a],s=e[o[0].name],i=e[o[1].name];s&&i&&n.push({fromName:o[0].name,toName:o[1].name,coords:[s,i]})}return n},i=["#a6c84c","#ffa022","#46bee9"],r=[];return[["北京",t],["上海",n],["广州",a]].forEach(function(t,n){r.push({name:t[0]+" Top10",type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:i[n],width:0,curveness:.2}},data:s(t[1])},{name:t[0]+" Top10",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:o,symbolSize:15},lineStyle:{normal:{color:i[n],width:1,opacity:.6,curveness:.2}},data:s(t[1])},{name:t[0]+" Top10",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(e){return e[2]/8},itemStyle:{normal:{color:i[n]}},data:t[1].map(function(t){return{name:t[1].name,value:e[t[1].name].concat([t[1].value])}})})}),{options:{title:{text:"模拟迁徙",subtext:"数据纯属虚构",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:["北京 Top10","上海 Top10","广州 Top10"],textStyle:{color:"#fff"},selectedMode:"single"},geo:{map:"china",label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series:r}}}}},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"index-5",data:function(){return{}}}},213:function(e,t,n){"use strict";t.a={name:"Charts",path:"/charts",meta:{icon:"fa-bar-chart-o",expanded:!1},children:[{name:"Column",path:"column"},{name:"Scatter",path:"scatter"}]}},214:function(e,t,n){"use strict";t.a={path:"/components",meta:{icon:"fa-building-o",expanded:!1,label:"Components"},children:[{name:"Navmenu",path:"navmenu"},{name:"Tabs",path:"tabs"},{name:"Steps",path:"steps"},{name:"Dropdown",path:"dropdown"},{name:"Loading",path:"loading"},{name:"Alert",path:"alert"},{name:"Message",path:"message"},{name:"MessageBox",path:"messageBox"},{name:"Notification",path:"notification"}]}},215:function(e,t,n){"use strict";t.a={name:"UI Features",path:"/uifeatures",meta:{label:"UI Features",icon:"fa-laptop",expanded:!1},children:[{name:"Buttons",path:"buttons"},{name:"Table",path:"table"}]}},461:function(e,t){},462:function(e,t){},463:function(e,t){},464:function(e,t){},465:function(e,t){},466:function(e,t){},467:function(e,t){},468:function(e,t){},469:function(e,t){},470:function(e,t){},471:function(e,t){},472:function(e,t){},473:function(e,t){},474:function(e,t){},475:function(e,t){},476:function(e,t){},478:function(e,t,n){e.exports=n.p+"static/img/user.31517ba.png"},479:function(e,t,n){n(462);var a=n(12)(n(197),n(494),null,null);e.exports=a.exports},480:function(e,t,n){n(464);var a=n(12)(n(198),n(496),null,null);e.exports=a.exports},481:function(e,t,n){n(468);var a=n(12)(n(199),n(500),null,null);e.exports=a.exports},482:function(e,t,n){n(470);var a=n(12)(n(202),n(502),null,null);e.exports=a.exports},483:function(e,t,n){n(463);var a=n(12)(n(203),n(495),null,null);e.exports=a.exports},484:function(e,t,n){n(467);var a=n(12)(n(204),n(499),null,null);e.exports=a.exports},485:function(e,t,n){n(469);var a=n(12)(n(205),n(501),null,null);e.exports=a.exports},486:function(e,t,n){n(466);var a=n(12)(n(206),n(498),"data-v-5c7abb4f",null);e.exports=a.exports},487:function(e,t,n){n(461);var a=n(12)(n(207),n(493),null,null);e.exports=a.exports},488:function(e,t,n){n(475);var a=n(12)(n(208),n(507),null,null);e.exports=a.exports},489:function(e,t,n){n(474);var a=n(12)(n(209),n(506),null,null);e.exports=a.exports},490:function(e,t,n){n(473);var a=n(12)(n(210),n(505),null,null);e.exports=a.exports},491:function(e,t,n){n(472);var a=n(12)(n(211),n(504),null,null);e.exports=a.exports},492:function(e,t,n){n(471);var a=n(12)(n(212),n(503),null,null);e.exports=a.exports},493:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"indexPanel"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{lg:24}},[n("div",{staticClass:"indexGrid"},[n("div",{staticClass:"indexContent"},[n("index5")],1)])])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{lg:12}},[n("div",{staticClass:"indexGrid"},[n("div",{staticClass:"indexContent"},[n("index1")],1)])]),e._v(" "),n("el-col",{attrs:{lg:12}},[n("div",{staticClass:"indexGrid"},[n("div",{staticClass:"indexContent"},[n("index2")],1)])]),e._v(" "),n("el-col",{attrs:{lg:12}},[n("div",{staticClass:"indexGrid"},[n("div",{staticClass:"indexContent"},[n("index3")],1)])]),e._v(" "),n("el-col",{attrs:{lg:12}},[n("div",{staticClass:"indexGrid"},[n("div",{staticClass:"indexContent"},[n("index4")],1)])])],1)],1)},staticRenderFns:[]}},494:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"breadcrumb"},e._l(e.list,function(t,a){return n("li",[e.isLast(a)?n("span",{staticClass:"active"},[e._v(e._s(e.showName(t)))]):n("router-link",{attrs:{to:t.path}},[e._v(e._s(e.showName(t)))])],1)}))},staticRenderFns:[]}},495:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("a",{staticClass:"va-logo clearfix",attrs:{href:"#"}},[a("span",[e._v("Vue-")]),e._v("Admin\n  ")]),e._v(" "),a("a",{staticClass:"collapse-menu-link",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-bars"})]),e._v(" "),a("div",{staticClass:"search"},[a("label",{staticClass:"fa fa-search",attrs:{for:"searchInput"}}),e._v(" "),a("input",{attrs:{type:"text",name:"searchInput",id:"searchInput",placeholder:"Search for ..."}})]),e._v(" "),a("div",{staticClass:"user-profile clearfix"},[a("div",{staticClass:"va-user-profile"},[a("a",{staticClass:"profile-toggle-link",attrs:{href:"#",id:"user-profile-dd"}},[a("img",{attrs:{src:n(478),alt:"用户头像"}})])]),e._v(" "),a("ul",{staticClass:"va-msg-center clearfix"},[a("li",{staticClass:"dropdown"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#",id:"msg-dd1"}},[a("i",{staticClass:"fa fa-bell-o"}),e._v(" "),a("span",[e._v("5")]),e._v(" "),a("div",{staticClass:"notification-ring"})])]),e._v(" "),a("li",{staticClass:"dropdown"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#",id:"msg-dd2"}},[a("i",{staticClass:"fa fa-envelope-o"}),e._v(" "),a("span",[e._v("5")]),e._v(" "),a("div",{staticClass:"notification-ring"})])])])]),e._v(" "),a("div",{staticClass:"questions-section"},[e._v("\n    Have questions?"),a("a",{attrs:{href:"#"}},[e._v("liujianhuan@360.cn")])])])}]}},496:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{on:{beforeEnter:e.beforeEnter,afterEnter:e.afterEnter,beforeLeave:e.beforeLeave,afterLeave:e.afterLeave}},[e._t("default")],2)},staticRenderFns:[]}},497:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"echarts"})},staticRenderFns:[]}},498:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainPage"},[n("v-header"),e._v(" "),n("sidebar"),e._v(" "),n("app-main")],1)},staticRenderFns:[]}},499:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"va-levelbar"},[n("h1",{staticClass:"va-title"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticClass:"va-breadcrumb"},[n("breadcrumb",{attrs:{list:e.list}},[n("breadcrumb")],1)],1)])},staticRenderFns:[]}},500:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},501:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"va-sidebar"},[n("ul",{staticClass:"va-sidebar-list"},e._l(e.menu,function(t,a){return n("li",{staticClass:"va-sidebar-list-item"},[t.path?n("router-link",{staticClass:"va-sidebar-list-link",attrs:{to:t.path,exact:!0,"aria-expanded":e.isExpanded(t)?"true":"false"},nativeOn:{click:function(n){e.toggle(a,t)}}},[n("span",[n("i",{class:["fa",t.meta.icon]})]),e._v("\n        "+e._s(t.meta.label||t.name)+"\n        "),t.children&&t.children.length?n("span",[e.isExpanded(t)?n("b",{staticClass:"fa fa-angle-up"}):n("b",{staticClass:"fa fa-angle-down"})]):e._e()]):n("a",{staticClass:"va-sidebar-list-link",attrs:{"aria-expanded":e.isExpanded(t)},on:{click:function(n){e.toggle(a,t)}}},[n("span",[n("i",{class:["fa",t.meta.icon]})]),e._v("\n        "+e._s(t.meta.label||t.name)+"\n        "),t.children&&t.children.length?n("span",[n("b",{staticClass:"fa fa-angle-down"})]):e._e()]),e._v(" "),t.children&&t.children.length?n("expanding",[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded(t),expression:"isExpanded(item)"}],staticClass:"va-sidebar-sublist"},e._l(t.children,function(a){return a.path?n("li",{staticClass:"va-sidebar-sublist-item"},[n("router-link",{staticClass:"va-sidebar-sublist-link",attrs:{to:e.generatePath(t,a)}},[e._v("\n              "+e._s(a.meta&&a.meta.label||a.name)+"\n            ")])],1):e._e()}))]):e._e()],1)})),e._v(" "),n("div",{staticClass:"sidebar-hover-elem"})])},staticRenderFns:[]}},502:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"va-main"},[n("div",{staticClass:"va-content"},[n("level-bar"),e._v(" "),n("router-view")],1)])},staticRenderFns:[]}},503:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-5"},[n("el-carousel",{attrs:{"indicator-position":"outside"}},e._l(4,function(t){return n("el-carousel-item",[n("h3",[e._v(e._s(t))])])}))],1)},staticRenderFns:[]}},504:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-4"},[n("chart",{attrs:{options:e.options}})],1)},staticRenderFns:[]}},505:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-3"},[n("chart",{attrs:{options:e.options}})],1)},staticRenderFns:[]}},506:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-2"},[n("chart",{attrs:{options:e.options}})],1)},staticRenderFns:[]}},507:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-1"},[n("chart",{attrs:{options:e.options}})],1)},staticRenderFns:[]}},508:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nprogress-container"),e._v(" "),n("main-part")],1)},staticRenderFns:[]}},545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),o=n.n(a),s=n(161),i=n.n(s),r=n(157),l=n(162),c=n.n(l),u=n(158),d=n.n(u),f=n(159),m=(n.n(f),n(160)),p=n.n(m);o.a.use(d.a),o.a.use(c.a);new c.a({parent:".nprogress-container"});o.a.component("chart",p.a),new o.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},91:function(e,t,n){"use strict";var a=n(214),o=n(213),s=n(215),i={items:[{name:"Dashboard",path:"/dashboard",meta:{icon:"fa-tachometer"}},s.a,o.a,a.a]};t.a=i.items}},[545]);