var swfmini=function(){function t(){if(!S){try{var t=x.getElementsByTagName("body")[0].appendChild(p("span"));t.parentNode.removeChild(t)}catch(e){return}S=!0;for(var i=E.length,n=0;i>n;n++)E[n]()}}function e(t){S?t():E[E.length]=t}function i(){}function n(){k&&a()}function a(){var t=x.getElementsByTagName("body")[0],e=p(f);e.setAttribute("type",b);var i=t.appendChild(e);if(i){var n=0;(function(){if(typeof i.GetVariable!=m){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),A.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;t.removeChild(e),i=null})()}}function s(t){var e=null,i=c(t);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=m)e=i;else{var n=i.getElementsByTagName(f)[0];n&&(e=n)}return e}function r(t,e,i){var n,a=c(i);if(A.wk&&312>A.wk)return n;if(a)if(typeof t.id==m&&(t.id=i),A.ie&&A.win){var s="";for(var r in t)t[r]!=Object.prototype[r]&&("data"==r.toLowerCase()?e.movie=t[r]:"styleclass"==r.toLowerCase()?s+=' class="'+t[r]+'"':"classid"!=r.toLowerCase()&&(s+=" "+r+'="'+t[r]+'"'));var u="";for(var l in e)e[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+e[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+s+">"+u+"</object>",C[C.length]=t.id,n=c(t.id)}else{var d=p(f);d.setAttribute("type",b);for(var h in t)t[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?d.setAttribute("class",t[h]):"classid"!=h.toLowerCase()&&d.setAttribute(h,t[h]));for(var v in e)e[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&o(d,v,e[v]);a.parentNode.replaceChild(d,a),n=d}return n}function o(t,e,i){var n=p("param");n.setAttribute("name",e),n.setAttribute("value",i),t.appendChild(n)}function u(t){var e=c(t);e&&"OBJECT"==e.nodeName&&(A.ie&&A.win?(e.style.display="none",function(){4==e.readyState?l(t):setTimeout(arguments.callee,10)}()):e.parentNode.removeChild(e))}function l(t){var e=c(t);if(e){for(var i in e)"function"==typeof e[i]&&(e[i]=null);e.parentNode.removeChild(e)}}function c(t){var e=null;try{e=x.getElementById(t)}catch(i){}return e}function p(t){return x.createElement(t)}function d(t){var e=A.pv,i=t.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,e[0]>i[0]||e[0]==i[0]&&e[1]>i[1]||e[0]==i[0]&&e[1]==i[1]&&e[2]>=i[2]?!0:!1}function h(t,e){if(I){var i,n=e?"visible":"hidden";S&&i&&c(t)&&(c(t).style.visibility=n)}}var m="undefined",f="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,x=document,T=navigator,k=!1,E=[n],C=[],N=[],S=!1,I=!0,A=function(){var t=typeof x.getElementById!=m&&typeof x.getElementsByTagName!=m&&typeof x.createElement!=m,e=T.userAgent.toLowerCase(),i=T.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(e),a=i?/mac/.test(i):/mac/.test(e),s=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,r=!1,o=[0,0,0],u=null;if(typeof T.plugins!=m&&typeof T.plugins[g]==f)u=T.plugins[g].description,!u||typeof T.mimeTypes!=m&&T.mimeTypes[b]&&!T.mimeTypes[b].enabledPlugin||(k=!0,r=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(r=!0,u=u.split(" ")[1].split(","),o=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:t,pv:o,wk:s,ie:r,win:n,mac:a}}();return function(){A.ie&&A.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var t=N.length,e=0;t>e;e++)N[e][0].detachEvent(N[e][1],N[e][2]);for(var i=C.length,n=0;i>n;n++)u(C[n]);for(var a in A)A[a]=null;A=null;for(var s in swfmini)swfmini[s]=null;swfmini=null})}(),v.ready("DOM",t),{registerObject:function(){},getObjectById:function(t){return A.w3?s(t):void 0},embedSWF:function(t,i,n,a,s,o,u,l,c,p){var v={success:!1,id:i};A.w3&&!(A.wk&&312>A.wk)&&t&&i&&n&&a&&s?(h(i,!1),e(function(){n+="",a+="";var e={};if(c&&typeof c===f)for(var o in c)e[o]=c[o];e.data=t,e.width=n,e.height=a;var g={};if(l&&typeof l===f)for(var y in l)g[y]=l[y];if(u&&typeof u===f)for(var b in u)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(s)){var w=r(e,g,i);e.id==i&&h(i,!0),v.success=!0,v.ref=w}else h(i,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){I=!1},ua:A,getFlashPlayerVersion:function(){return{major:A.pv[0],minor:A.pv[1],release:A.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(t,e,i){return A.w3?r(t,e,i):void 0},showExpressInstall:function(){},removeSWF:function(t){A.w3&&u(t)},createCSS:function(){},addDomLoadEvent:e,addLoadEvent:i,expressInstallCallback:function(){}}}();(function(t,e,i){"use strict";var n,a=e.audio&&e.video,s=!1,r=i.bugs,o=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],a))})},u=i.cfg.mediaelement,l="mediaelement-jaris";if(!u)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var c=document.createElement("video");e.videoBuffered="buffered"in c,s="loop"in c,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:e.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(a&&!u.preferFlash){var p={1:1,2:1},d=function(e){var a,s=e.target.parentNode;!u.preferFlash&&(t(e.target).is("audio, video")||s&&t("source:last",s)[0]==e.target)&&(a=t(e.target).closest("audio, video"))&&!p[a.prop("error")]&&t(function(){n&&!u.preferFlash?(o(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){u.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(u.preferFlash=!0,document.removeEventListener("error",d,!0),t("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",d,!0)})};document.addEventListener("error",d,!0),t("audio, video").each(function(){var e=t.prop(this,"error");return e&&!p[e]?(d({target:this}),!1):void 0})}e.track&&!r.track&&function(){if(r.track||(r.track="number"!=typeof t("<track />")[0].readyState),!r.track)try{new TextTrackCue(2,3,"")}catch(e){r.track=!0}var n=i.cfg.track,a=function(e){t(e.target).filter("track").each(s)},s=function(){return r.track||!n.override&&3==t.prop(this,"readyState")?(n.override=!0,i.reTest("track"),document.removeEventListener("error",a,!0),this&&t.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support"),!1):void 0},o=function(){document.addEventListener("error",a,!0),r.track?s():t("track").each(s)};n.override||(i.isReady("track")?o():t(o))}(),i.register("mediaelement-core",function(t,i,c,p,d){n=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(n?"swf":"no-swf");var h=i.mediaelement;h.parseRtmp=function(t){var e,n,a,s=t.src.split("://"),r=s[1].split("/");for(t.server=s[0]+"://"+r[0]+"/",t.streamId=[],e=1,n=r.length;n>e;e++)a||-1===r[e].indexOf(":")||(r[e]=r[e].split(":")[1],a=!0),a?t.streamId.push(r[e]):t.server+=r[e]+"/";t.streamId.length||i.error("Could not parse rtmp url"),t.streamId=t.streamId.join("/")};var m=function(e,i){e=t(e);var n,a={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return a.src?(n=e.attr("data-server"),null!=n&&(a.server=n),n=e.attr("type"),n?(a.type=n,a.container=t.trim(n.split(";")[0])):(i||(i=e[0].nodeName.toLowerCase(),"source"==i&&(i=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=h.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=e.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:h.parseRtmp(a)),a):a},f=!n&&"postMessage"in c&&a,v=function(){v.loaded||(v.loaded=!0,t(function(){i.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&f&&(e=!0,i.loader.loadScript("https://www.youtube.com/player_api"),t(function(){i._polyfill(["mediaelement-yt"])}))}}(),y=function(){n?o():g()};i.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},h.mimeTypes.source=t.extend({},h.mimeTypes.audio,h.mimeTypes.video),h.getTypeForSrc=function(e,i){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return i+"/rtmp";e=e.split("?")[0].split("."),e=e[e.length-1];var n;return t.each(h.mimeTypes[i],function(t,i){return-1!==i.indexOf(e)?(n=t,!1):d}),n},h.srces=function(e,i){if(e=t(e),!i){i=[];var n=e[0].nodeName.toLowerCase(),a=m(e,n);return a.src?i.push(a):t("source",e).each(function(){a=m(this,n),a.src&&i.push(a)}),i}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(i)||(i=[i]),i.forEach(function(t){var i=p.createElement("source");"string"==typeof t&&(t={src:t}),i.setAttribute("src",t.src),t.type&&i.setAttribute("type",t.type),t.media&&i.setAttribute("media",t.media),e.append(i)})},t.fn.loadMediaSrc=function(e,i){return this.each(function(){i!==d&&(t(this).removeAttr("poster"),i&&t.attr(this,"poster",i)),h.srces(this,e),t(this).mediaLoad()})},h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],h.canThirdPlaySrces=function(e,i){var a="";return(n||f)&&(e=t(e),i=i||h.srces(e),t.each(i,function(t,e){return e.container&&e.src&&(n&&-1!=h.swfMimeTypes.indexOf(e.container)||f&&"video/youtube"==e.container)?(a=e,!1):d})),a};var b={};h.canNativePlaySrces=function(e,i){var n="";if(a){e=t(e);var s=(e[0].nodeName||"").toLowerCase(),r=(b[s]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!r)return n;i=i||h.srces(e),t.each(i,function(t,i){return i.type&&r.call(e[0],i.type)?(n=i,!1):d})}return n},h.setError=function(e,n){n||(n="can't play sources"),t(e).pause().data("mediaerror",n),i.error("mediaelementError: "+n),setTimeout(function(){t(e).data("mediaerror")&&t(e).trigger("mediaerror")},1)};var w=function(){var t;return function(e,a,s){t||v(),i.ready(n?l:"mediaelement-yt",function(){h.createSWF?h.createSWF(e,a,s):t||(t=!0,y(),w(e,a,s))}),t||!f||h.createSWF||g()}}(),x=function(t,e,i,n,a){var s;i||i!==!1&&e&&"third"==e.isActive?(s=h.canThirdPlaySrces(t,n),s?w(t,s,e):a?h.setError(t,!1):x(t,e,!1,n,!0)):(s=h.canNativePlaySrces(t,n),s?e&&"third"==e.isActive&&h.setActive(t,"html5",e):a?(h.setError(t,!1),e&&"third"==e.isActive&&h.setActive(t,"html5",e)):x(t,e,!0,n,!0))},T=/^(?:embed|object|datalist)$/i,k=function(e,n){var a=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{}),s=h.srces(e),r=e.parentNode;clearTimeout(a.loadTimer),t.data(e,"mediaerror",!1),s.length&&r&&1==r.nodeType&&!T.test(r.nodeName||"")&&(n=n||i.data(e,"mediaelement"),x(e,n,u.preferFlash||d,s))};h.selectSource=k,t(p).on("ended",function(e){var n=i.data(e.target,"mediaelement");(!s||n&&"html5"!=n.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)}),i.ready("dom-support",function(){s||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var s=i.defineNodeNameProperty(e,"load",{prop:{value:function(){var t=i.data(this,"mediaelement");k(this,t),!a||t&&"html5"!=t.isActive||!s.prop._supvalue||s.prop._supvalue.apply(this,arguments)}}});b[e]=i.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(i){var s="";return a&&b[e].prop._supvalue&&(s=b[e].prop._supvalue.call(this,i),"no"==s&&(s="")),!s&&n&&(i=t.trim((i||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(i)&&(s="maybe")),s}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var t=this,e=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{});clearTimeout(e.loadTimer),e.loadTimer=setTimeout(function(){k(t),t=null},9)}})});var E=function(){var e=function(){if(i.implement(this,"mediaelement")&&(k(this),a)){var e,n,s=this,r=function(){var e=t.prop(s,"buffered");if(e){for(var i="",n=0,a=e.length;a>n;n++)i+=e.end(n);return i}},o=function(){var e=r();e!=n&&(n=e,t(s).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(t){"progress"==t.type&&(n=r()),clearTimeout(e),e=setTimeout(o,999)},"emptied stalled mediaerror abort suspend":function(t){"emptied"==t.type&&(n=!1),clearTimeout(e)}}),"ActiveXObject"in c&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}},n=!1;i.ready("dom-support",function(){n=!0,i.addReady(function(i,n){var a=t("video, audio",i).add(n.filter("video, audio")).each(e);!v.loaded&&t("track",a).length&&v(),a=null})}),a&&!n&&i.addReady(function(e,i){n||t("video, audio",e).add(i.filter("video, audio")).each(function(){return!h.canNativePlaySrces(this)||!v.loaded&&t("track",this).length?(y(),n=!0,!1):d})})};e.track&&!r.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),a?(i.isReady("mediaelement-core",!0),E(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(l,E),i.ready("WINDOWLOAD mediaelement",v)})})(jQuery,Modernizr,jQuery.webshims),jQuery.webshims.register("track",function(t,e,i,n){"use strict";var a=e.mediaelement;(new Date).getTime();var s=t.fn.addBack?"addBack":"andSelf",r={subtitles:1,captions:1,descriptions:1},o=t("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(t){var i={};return t.addEventListener=function(t,n){i[t]&&e.error("always use $.on to the shimed event: "+t+" already bound fn was: "+i[t]+" your fn was: "+n),i[t]=n},t.removeEventListener=function(t,n){i[t]&&i[t]!=n&&e.error("always use $.on/$.off to the shimed event: "+t+" already bound fn was: "+i[t]+" your fn was: "+n),i[t]&&delete i[t]},t},c={getCueById:function(t){for(var e=null,i=0,n=this.length;n>i;i++)if(this[i].id===t){e=this[i];break}return e}},p={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(t){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>t.startTime&&e.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();t.track&&t.track.removeCue&&t.track.removeCue(t),t.track=this,this.cues.push(t)},removeCue:function(t){var i=this.cues||[],n=0,a=i.length;if(t.track!=this)return e.error("cue not part of track"),undefined;for(;a>n;n++)if(i[n]===t){i.splice(n,1),t.track=null;break}return t.track?(e.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],m={srclang:"language"},f=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(i,n){var a,s,r=[],o=[],u=[];if(i||(i=e.data(this,"mediaelementBase")||e.data(this,"mediaelementBase",{})),n||(i.blockTrackListUpdate=!0,n=t.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),t("track",this).each(function(){var e=t.prop(this,"track");u.push(e),-1==n.indexOf(e)&&o.push(e)}),i.scriptedTextTracks)for(a=0,s=i.scriptedTextTracks.length;s>a;a++)u.push(i.scriptedTextTracks[a]),-1==n.indexOf(i.scriptedTextTracks[a])&&o.push(i.scriptedTextTracks[a]);for(a=0,s=n.length;s>a;a++)-1==u.indexOf(n[a])&&r.push(n[a]);if(r.length||o.length){for(n.splice(0),a=0,s=u.length;s>a;a++)n.push(u[a]);for(a=0,s=r.length;s>a;a++)t([n]).triggerHandler(t.Event({type:"removetrack",track:r[a]}));for(a=0,s=o.length;s>a;a++)t([n]).triggerHandler(t.Event({type:"addtrack",track:o[a]}));(i.scriptedTextTracks||r.length)&&t(this).triggerHandler("updatetrackdisplay")}},g=function(i,n){n||(n=e.data(i,"trackData")),n&&!n.isTriggering&&(n.isTriggering=!0,setTimeout(function(){(n.track||{}).readyState?t(i).closest("audio, video").triggerHandler("updatetrackdisplay"):t(i).triggerHandler("checktrackmode"),n.isTriggering=!1},1))},y=t("<div />")[0];i.TextTrackCue=function(t,i,n){3!=arguments.length&&e.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=t,this.endTime=i,this.text=n,this.id="",this.pauseOnExit=!1,l(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var t,e="",i="",s=n.createDocumentFragment();return f(this,"getCueAsHTML")||(t=this.getCueAsHTML=function(){var t,n;if(e!=this.text)for(e=this.text,i=a.parseCueTextToHTML(e),y.innerHTML=i,t=0,n=y.childNodes.length;n>t;t++)s.appendChild(y.childNodes[t].cloneNode(!0));return s.cloneNode(!0)}),t?t.apply(this,arguments):s.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return t.extend([],c)},a.parseCueTextToHTML=function(){var t=/(<\/?[^>]+>)/gi,e=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,n=function(t,e,n,a){var s;return i.test(a)?s="</"+t+">":(n.splice(0,1),s="<"+t+" "+e+'="'+n.join(" ").replace(/\"/g,"&#34;")+'">'),s},a=function(t){var i=t.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),e.test(i[0])?"c"==i[0]?t=n("span","class",i,t):"v"==i[0]&&(t=n("q","title",i,t)):t=""),t};return function(e){return e.replace(t,a)}}(),a.loadTextTrack=function(i,n,s,o){var u="play playing timeupdate updatetrackdisplay",l=s.track,c=function(){var s,r,o=t.prop(n,"src");if("disabled"!=l.mode&&o&&t.attr(n,"src")&&(t(i).unbind(u,c),t(n).unbind("checktrackmode",c),!l.readyState)){s=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,t(n).triggerHandler("error")},l.readyState=1;try{l.cues=a.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=a.createCueList(),r=t.ajax({dataType:"text",url:o,success:function(o){"text/vtt"!=r.getResponseHeader("content-type")&&e.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(o,l,function(e){e&&"length"in e?(l.readyState=2,t(n).triggerHandler("load"),t(i).triggerHandler("updatetrackdisplay")):s()})},error:s})}catch(p){s(),e.warn(p)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,t(i).unbind(u,c),t(n).unbind("checktrackmode",c),t(i).on(u,c),t(n).on("checktrackmode",c),o&&(l.mode=r[l.kind]?"showing":"hidden",c())},a.createTextTrack=function(i,n){var r,o;return n.nodeName&&(o=e.data(n,"trackData"),o&&(g(n,o),r=o.track)),r||(r=l(e.objectCreate(d)),u||h.forEach(function(e){var i=t.prop(n,e);i&&(r[m[e]||e]=i)}),n.nodeName?(u&&h.forEach(function(i){e.defineProperty(r,m[i]||i,{get:function(){return t.prop(n,i)}})}),o=e.data(n,"trackData",{track:r}),a.loadTextTrack(i,n,o,t.prop(n,"default")&&t(n).siblings("track[default]")[s]()[0]==n)):(u&&h.forEach(function(t){e.defineProperty(r,m[t]||t,{value:n[t],writeable:!1})}),r.cues=a.createCueList(),r.activeCues=r._shimActiveCues=r.shimActiveCues=a.createCueList(),r.mode="hidden",r.readyState=2)),r},a.parseCaptionChunk=function(){var t=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,n=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(s){var r,o,u,l,c,p,d,h,m,f;if(h=i.exec(s))return null;if(h=n.exec(s))return null;if(h=a.exec(s))return null;for(r=s.split(/\n/g);!r[0].replace(/\s+/gi,"").length&&r.length>0;)r.shift();for(r[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=r.shift().replace(/\s*/gi,"")+""),p=0;r.length>p;p++){var v=r[p];(m=t.exec(v))&&(c=m.slice(1),o=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),u=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),r=r.slice(0,p).concat(r.slice(p+1));break}return o||u?(l=r.join("\n"),f=new TextTrackCue(o,u,l),d&&(f.id=d),f):(e.warn("couldn't extract time information: "+[o,u,r.join("\n"),d].join(" ; ")),null)}}(),a.parseCaptions=function(t,i,n){a.createCueList();var s,r,o,u,l;t?(o=/^WEBVTT(\s*FILE)?/gi,r=function(c,p){for(;p>c;c++){if(s=t[c],o.test(s))l=!0;else if(s.replace(/\s*/gi,"").length){if(!l){e.error("please use WebVTT format. This is the standard"),n(null);break}s=a.parseCaptionChunk(s,c),s&&i.addCue(s)}if((new Date).getTime()-30>u){c++,setTimeout(function(){u=(new Date).getTime(),r(c,p)},90);break}}c>=p&&(l||e.error("please use WebVTT format. This is the standard"),n(i.cues))},t=t.replace(/\r\n/g,"\n"),setTimeout(function(){t=t.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),t=t.split(/\n\n+/g),r(0,t.length)},9)},9)):e.error("Required parameter captionData not supplied.")},a.createTrackList=function(t,i){return i=i||e.data(t,"mediaelementBase")||e.data(t,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],e.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(i.textTracks)),i.textTracks},Modernizr.track||(e.defineNodeNamesBooleanProperty(["track"],"default"),e.reflectProperties(["track"],["srclang","label"]),e.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),e.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(t){var i=e.data(this,"trackData");this.setAttribute("data-kind",t),i&&(i.attrKind=t)},get:function(){var t=e.data(this,"trackData");return t&&"attrKind"in t?t.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),t.each(h,function(i,n){var a=m[n]||n;e.onNodeNamesPropertyModify("track",n,function(){var i=e.data(this,"trackData"),s=this;i&&("kind"==n&&g(this,i),u||(i.track[a]=t.prop(this,n)),clearTimeout(i.changedTrackPropTimer),i.changedTrackPropTimer=setTimeout(function(){t(s).trigger("updatesubtitlestate")},1))})}),e.onNodeNamesPropertyModify("track","src",function(i){if(i){var n,s=e.data(this,"trackData");s&&(n=t(this).closest("video, audio"),n[0]&&a.loadTextTrack(n,this,s))}}),e.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(t(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),e.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var t=this,i=e.data(t,"mediaelementBase")||e.data(t,"mediaelementBase",{}),n=a.createTrackList(t,i);return i.blockTrackListUpdate||v.call(t,i,n),n},writeable:!1},addTextTrack:{value:function(t,i,n){var s=a.createTextTrack(this,{kind:o.prop("kind",t||"").prop("kind"),label:i||"",srclang:n||""}),r=e.data(this,"mediaelementBase")||e.data(this,"mediaelementBase",{});return r.scriptedTextTracks||(r.scriptedTextTracks=[]),r.scriptedTextTracks.push(s),v.call(this),s}}},"prop"),t(n).on("emptied ended updatetracklist",function(i){if(t(i.target).is("audio, video")){var n=e.data(i.target,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(i.target,n)},0))}});var b=function(t,e){return e.readyState||t.readyState},w=function(t){t.originalEvent&&t.stopImmediatePropagation()},x=function(){if(e.implement(this,"track")){var i,n,a=t.prop(this,"track"),s=this.track;s&&(i=t.prop(this,"kind"),n=b(this,s),(s.mode||n)&&(a.mode=p[s.mode]||s.mode),"descriptions"!=i&&(s.mode="string"==typeof s.mode?"disabled":0,this.kind="metadata",t(this).attr({kind:i}))),t(this).on("load error",w)}};e.addReady(function(i,n){var a=n.filter("video, audio, track").closest("audio, video");t("video, audio",i).add(a).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var i=t.prop(this,"textTracks"),n=this.textTracks;i.length!=n.length&&e.error("textTracks couldn't be copied"),t("track",this).each(x)}}),a.each(function(){var t=this,i=e.data(t,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(t,i)},9))})}),Modernizr.track&&t("video, audio").trigger("trackapichange")});