window.Modernizr=(function(m,r,h){var d="2.6.2",k={},o=true,B=r.documentElement,C="modernizr",z=r.createElement(C),n=z.style,e,u={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),E={svg:"http://www.w3.org/2000/svg"},i={},c={},s={},y=[],t=y.slice,a,x=function(N,P,H,O){var G,M,J,K,F=r.createElement("div"),L=r.body,I=L||r.createElement("body");if(parseInt(H,10)){while(H--){J=r.createElement("div");J.id=O?O[H]:C+(H+1);F.appendChild(J)}}G=["&#173;",'<style id="s',C,'">',N,"</style>"].join("");F.id=C;(L?F:I).innerHTML+=G;I.appendChild(F);if(!L){I.style.background="";I.style.overflow="hidden";K=B.style.overflow;B.style.overflow="hidden";B.appendChild(I)}M=P(F,N);if(!L){I.parentNode.removeChild(I);B.style.overflow=K}else{F.parentNode.removeChild(F)}return !!M},b=function(H){var G=m.matchMedia||m.msMatchMedia;if(G){return G(H).matches}var F;x("@media "+H+" { #"+C+" { position: absolute; } }",function(I){F=(m.getComputedStyle?getComputedStyle(I,null):I.currentStyle)["position"]=="absolute"});return F},q=({}).hasOwnProperty,A;if(!j(q,"undefined")&&!j(q.call,"undefined")){A=function(F,G){return q.call(F,G)}}else{A=function(F,G){return((G in F)&&j(F.constructor.prototype[G],"undefined"))}}if(!Function.prototype.bind){Function.prototype.bind=function D(H){var I=this;if(typeof I!="function"){throw new TypeError()}var F=t.call(arguments,1),G=function(){if(this instanceof G){var L=function(){};L.prototype=I.prototype;var K=new L();var J=I.apply(K,F.concat(t.call(arguments)));if(Object(J)===J){return J}return K}else{return I.apply(H,F.concat(t.call(arguments)))}};return G}}function p(F){n.cssText=F}function g(G,F){return p(w.join(G+";")+(F||""))}function j(G,F){return typeof G===F}function l(G,F){return !!~(""+G).indexOf(F)}function v(G,J,I){for(var F in G){var H=J[G[F]];if(H!==h){if(I===false){return G[F]}if(j(H,"function")){return H.bind(I||J)}return H}}return false}i.touch=function(){var F;if(("ontouchstart" in m)||m.DocumentTouch&&r instanceof DocumentTouch){F=true}else{x(["@media (",w.join("touch-enabled),("),C,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(G){F=G.offsetTop===9})}return F};i.svg=function(){return !!r.createElementNS&&!!r.createElementNS(E.svg,"svg").createSVGRect};i.inlinesvg=function(){var F=r.createElement("div");F.innerHTML="<svg/>";return(F.firstChild&&F.firstChild.namespaceURI)==E.svg};i.svgclippaths=function(){return !!r.createElementNS&&/SVGClipPath/.test(u.call(r.createElementNS(E.svg,"clipPath")))};for(var f in i){if(A(i,f)){a=f.toLowerCase();k[a]=i[f]();y.push((k[a]?"":"no-")+a)}}k.addTest=function(G,H){if(typeof G=="object"){for(var F in G){if(A(G,F)){k.addTest(F,G[F])}}}else{G=G.toLowerCase();if(k[G]!==h){return k}H=typeof H=="function"?H():H;if(typeof o!=="undefined"&&o){B.className+=" "+(H?"":"no-")+G}k[G]=H}return k};p("");z=e=null;(function(O,Q){var I=O.html5||{};var L=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var G=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var U;var M="_html5shiv";var F=0;var S={};var J;(function(){try{var X=Q.createElement("a");X.innerHTML="<xyz></xyz>";U=("hidden" in X);J=X.childNodes.length==1||(function(){(Q.createElement)("a");var Z=Q.createDocumentFragment();return(typeof Z.cloneNode=="undefined"||typeof Z.createDocumentFragment=="undefined"||typeof Z.createElement=="undefined")}())}catch(Y){U=true;J=true}}());function K(X,Z){var aa=X.createElement("p"),Y=X.getElementsByTagName("head")[0]||X.documentElement;aa.innerHTML="x<style>"+Z+"</style>";return Y.insertBefore(aa.lastChild,Y.firstChild)}function P(){var X=N.elements;return typeof X=="string"?X.split(" "):X}function T(X){var Y=S[X[M]];if(!Y){Y={};F++;X[M]=F;S[F]=Y}return Y}function R(aa,X,Z){if(!X){X=Q}if(J){return X.createElement(aa)}if(!Z){Z=T(X)}var Y;if(Z.cache[aa]){Y=Z.cache[aa].cloneNode()}else{if(G.test(aa)){Y=(Z.cache[aa]=Z.createElem(aa)).cloneNode()}else{Y=Z.createElem(aa)}}return Y.canHaveChildren&&!L.test(aa)?Z.frag.appendChild(Y):Y}function V(Z,ab){if(!Z){Z=Q}if(J){return Z.createDocumentFragment()}ab=ab||T(Z);var ac=ab.frag.cloneNode(),aa=0,Y=P(),X=Y.length;for(;aa<X;aa++){ac.createElement(Y[aa])}return ac}function W(X,Y){if(!Y.cache){Y.cache={};Y.createElem=X.createElement;Y.createFrag=X.createDocumentFragment;Y.frag=Y.createFrag()}X.createElement=function(Z){if(!N.shivMethods){return Y.createElem(Z)}return R(Z,X,Y)};X.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+P().join().replace(/\w+/g,function(Z){Y.createElem(Z);Y.frag.createElement(Z);return'c("'+Z+'")'})+");return n}")(N,Y.frag)}function H(X){if(!X){X=Q}var Y=T(X);if(N.shivCSS&&!U&&!Y.hasCSS){Y.hasCSS=!!K(X,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")}if(!J){W(X,Y)}return X}var N={elements:I.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:(I.shivCSS!==false),supportsUnknownElements:J,shivMethods:(I.shivMethods!==false),type:"default",shivDocument:H,createElement:R,createDocumentFragment:V};O.html5=N;H(Q)}(this,r));k._version=d;k._prefixes=w;k.mq=b;k.testStyles=x;B.className=B.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+y.join(" "):"");return k})(this,this.document);(function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};Modernizr.addTest("ie8compat",function(){return(!window.addEventListener&&document.documentMode&&document.documentMode===7)});