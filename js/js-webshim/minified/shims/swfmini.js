var swfmini=function(){function e(){if(!S){try{var e=x.getElementsByTagName("body")[0].appendChild(c("span"));e.parentNode.removeChild(e)}catch(t){return}S=!0;for(var i=E.length,n=0;i>n;n++)E[n]()}}function t(e){S?e():E[E.length]=e}function i(){}function n(){N&&a()}function a(){var e=x.getElementsByTagName("body")[0],t=c(f);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=m){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),D.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=p(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=m)t=i;else{var n=i.getElementsByTagName(f)[0];n&&(t=n)}return t}function o(e,t,i){var n,a=p(i);if(D.wk&&312>D.wk)return n;if(a)if(typeof e.id==m&&(e.id=i),D.ie&&D.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+u+"</object>",k[k.length]=e.id,n=p(e.id)}else{var d=c(f);d.setAttribute("type",b);for(var h in e)e[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?d.setAttribute("class",e[h]):"classid"!=h.toLowerCase()&&d.setAttribute(h,e[h]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);a.parentNode.replaceChild(d,a),n=d}return n}function s(e,t,i){var n=c("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function u(e){var t=p(e);t&&"OBJECT"==t.nodeName&&(D.ie&&D.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=p(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function p(e){var t=null;try{t=x.getElementById(e)}catch(i){}return t}function c(e){return x.createElement(e)}function d(e){var t=D.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function h(e,t){if(C){var i,n=t?"visible":"hidden";S&&i&&p(e)&&(p(e).style.visibility=n)}}var m="undefined",f="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,x=document,T=navigator,N=!1,E=[n],k=[],A=[],S=!1,C=!0,D=function(){var e=typeof x.getElementById!=m&&typeof x.getElementsByTagName!=m&&typeof x.createElement!=m,t=T.userAgent.toLowerCase(),i=T.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),a=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof T.plugins!=m&&typeof T.plugins[g]==f)u=T.plugins[g].description,!u||typeof T.mimeTypes!=m&&T.mimeTypes[b]&&!T.mimeTypes[b].enabledPlugin||(N=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(p){}return{w3:e,pv:s,wk:r,ie:o,win:n,mac:a}}();return function(){D.ie&&D.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var i=k.length,n=0;i>n;n++)u(k[n]);for(var a in D)D[a]=null;D=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return D.w3?r(e):void 0},embedSWF:function(e,i,n,a,r,s,u,l,p,c){var v={success:!1,id:i};D.w3&&!(D.wk&&312>D.wk)&&e&&i&&n&&a&&r?(h(i,!1),t(function(){n+="",a+="";var t={};if(p&&typeof p===f)for(var s in p)t[s]=p[s];t.data=e,t.width=n,t.height=a;var g={};if(l&&typeof l===f)for(var y in l)g[y]=l[y];if(u&&typeof u===f)for(var b in u)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(r)){var w=o(t,g,i);t.id==i&&h(i,!0),v.success=!0,v.ref=w}else h(i,!0);c&&c(v)})):c&&c(v)},switchOffAutoHideShow:function(){C=!1},ua:D,getFlashPlayerVersion:function(){return{major:D.pv[0],minor:D.pv[1],release:D.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,i){return D.w3?o(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){D.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();