!function(e,t,a){"use strict";"undefined"!=typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):t[e]=a()}("Fingerprint2",this,function(){"use strict";var e=!0,t=function(e){var t={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf"};this.options=this.extend(e,t),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return t.prototype={extend:function(e,t){if(null==e)return t;for(var a in e)null!=e[a]&&t[a]!==e[a]&&(t[a]=e[a]);return t},log:function(e){window.console&&console.log(e)},get:function(e){var t=[];t=this.userAgentKey(t),t=this.languageKey(t),t=this.colorDepthKey(t),t=this.screenResolutionKey(t),t=this.timezoneOffsetKey(t),t=this.sessionStorageKey(t),t=this.localStorageKey(t),t=this.indexedDbKey(t),t=this.addBehaviorKey(t),t=this.openDatabaseKey(t),t=this.cpuClassKey(t),t=this.platformKey(t),t=this.doNotTrackKey(t),t=this.pluginsKey(t),t=this.canvasKey(t),t=this.webglKey(t);var a=this;this.fontsKey(t,function(t){var i=a.x64hash128(t.join("~~~"),31);return e(i)})},userAgentKey:function(e){return this.options.excludeUserAgent||e.push(navigator.userAgent),e},languageKey:function(e){return this.options.excludeLanguage||e.push(navigator.language),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.push(screen.colorDepth),e},screenResolutionKey:function(e){if(!this.options.excludeScreenResolution){var t=this.getScreenResolution();"undefined"!=typeof t&&e.push(t.join("x"))}return e},getScreenResolution:function(){var e;return e=this.options.detectScreenOrientation?screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]:[screen.height,screen.width]},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.push((new Date).getTimezoneOffset()),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.push("sessionStorageKey"),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.push("localStorageKey"),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.push("indexedDbKey"),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.push("addBehaviorKey"),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.push("openDatabase"),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.push(this.getNavigatorCpuClass()),e},platformKey:function(e){return this.options.excludePlatform||e.push(this.getNavigatorPlatform()),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.push(this.getDoNotTrack()),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.push(this.getCanvasFp()),e},webglKey:function(e){return!this.options.excludeWebGL&&this.isCanvasSupported()&&e.push(this.getWebglFp()),e},fontsKey:function(t,a){return this.options.excludeFlashFonts?(e&&this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"),this.options.excludeJsFonts?(e&&this.log("Skipping js fonts detection per excludeJsFonts configuration option"),a(t)):a(this.jsFontsKey(t))):this.hasSwfObjectLoaded()?this.hasMinFlashInstalled()?"undefined"==typeof this.options.swfPath?(e&&this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"),a(this.jsFontsKey(t))):this.flashFontsKey(t,a):(e&&this.log("Flash is not installed, skipping Flash fonts enumeration"),a(this.jsFontsKey(t))):(e&&this.log("Swfobject is not detected, Flash fonts enumeration is skipped"),a(this.jsFontsKey(t)))},flashFontsKey:function(e,t){this.loadSwfAndDetectFonts(function(a){e.push(a.join(";")),t(e)})},jsFontsKey:function(e){var t=["monospace","sans-serif","serif"],a="mmmmmmmmmmlli",i="72px",n=document.getElementsByTagName("body")[0],r=document.createElement("span");r.style.fontSize=i,r.innerHTML=a;var o={},s={};for(var l in t)r.style.fontFamily=t[l],n.appendChild(r),o[t[l]]=r.offsetWidth,s[t[l]]=r.offsetHeight,n.removeChild(r);for(var h=function(e){var a=!1;for(var i in t){r.style.fontFamily=e+","+t[i],n.appendChild(r);var l=r.offsetWidth!==o[t[i]]||r.offsetHeight!==s[t[i]];n.removeChild(r),a=a||l}return a},u=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andale Mono","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Bitstream Vera Sans Mono","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Book Antiqua","Bookman Old Style","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Calibri","Californian FB","Calisto MT","Calligrapher","Cambria","Cambria Math","Candara","CaslonOpnface BT","Castellar","Centaur","Century","Century Gothic","Century Schoolbook","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Comic Sans","Comic Sans MS","Consolas","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Courier","Courier New","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","Devanagari Sangam MN","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","Estrangelo Edessa","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","Franklin Gothic","Franklin Gothic Book","Franklin Gothic Demi","Franklin Gothic Demi Cond","Franklin Gothic Heavy","Franklin Gothic Medium","Franklin Gothic Medium Cond","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Garamond","Gautami","Geeza Pro","Geneva","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","Georgia","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Helvetica","Helvetica Neue","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Impact","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Monaco","Mongolian Baiti","MONO","Monotype Corsiva","MoolBoran","Mrs Eaves","MS Gothic","MS LineDraw","MS Mincho","MS Outlook","MS PGothic","MS PMincho","MS Reference Sans Serif","MS Reference Specialty","MS Sans Serif","MS Serif","MS UI Gothic","MT Extra","MUSEO","MV Boli","MYRIAD","MYRIAD PRO","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Palatino","Palatino Linotype","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Symbol","Synchro LET","System","Tahoma","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Times","Times New Roman","Times New Roman PS","Traditional Arabic","Trajan","TRAJAN PRO","Trebuchet MS","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Verdana","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Webdings","Westminster","WHITNEY","Wide Latin","Wingdings","Wingdings 2","Wingdings 3","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"],c=[],d=0,g=u.length;g>d;d++)h(u[d])&&c.push(u[d]);return e.push(c.join(";")),e},pluginsKey:function(e){return e.push(this.isIE()?this.getIEPluginsString():this.getRegularPluginsString()),e},getRegularPluginsString:function(){return this.map(navigator.plugins,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this).join(";")},getIEPluginsString:function(){if(window.ActiveXObject){var e=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];return this.map(e,function(e){try{return new ActiveXObject(e),e}catch(t){return null}}).join(";")}return""},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){return!!window.indexedDB},getNavigatorCpuClass:function(){return navigator.cpuClass?"navigatorCpuClass: "+navigator.cpuClass:"navigatorCpuClass: unknown"},getNavigatorPlatform:function(){return navigator.platform?"navigatorPlatform: "+navigator.platform:"navigatorPlatform: unknown"},getDoNotTrack:function(){return navigator.doNotTrack?"doNotTrack: "+navigator.doNotTrack:"doNotTrack: unknown"},getCanvasFp:function(){var e=document.createElement("canvas"),t=e.getContext("2d"),a="Cwm fjordbank glyphs vext quiz, https://github.com/valve ὠ";return t.textBaseline="top",t.font="70px 'Arial'",t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(125,1,62,20),t.fillStyle="#069",t.fillText(a,2,15),t.fillStyle="rgba(102, 204, 0, 0.7)",t.fillText(a,4,17),e.toDataURL()},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"},a=function(e){var t,a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return a?(t=e.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null};if(e=this.getWebglCanvas(),!e)return null;var i=[],n="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",r="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var l=e.createProgram(),h=e.createShader(e.VERTEX_SHADER);e.shaderSource(h,n),e.compileShader(h);var u=e.createShader(e.FRAGMENT_SHADER);return e.shaderSource(u,r),e.compileShader(u),e.attachShader(l,h),e.attachShader(l,u),e.linkProgram(l),e.useProgram(l),l.vertexPosAttrib=e.getAttribLocation(l,"attrVertex"),l.offsetUniform=e.getUniformLocation(l,"uniformOffset"),e.enableVertexAttribArray(l.vertexPosArray),e.vertexAttribPointer(l.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(l.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&i.push(e.canvas.toDataURL()),i.push("extensions:"+e.getSupportedExtensions().join(";")),i.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),i.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),i.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),i.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),i.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),i.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),i.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),i.push("webgl max anisotropy:"+a(e)),i.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),i.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),i.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),i.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),i.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),i.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),i.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),i.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),i.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),i.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),i.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),i.push("webgl red bits:"+e.getParameter(e.RED_BITS)),i.push("webgl renderer:"+e.getParameter(e.RENDERER)),i.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),i.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),i.push("webgl vendor:"+e.getParameter(e.VENDOR)),i.push("webgl version:"+e.getParameter(e.VERSION)),i.join("§")},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName?!0:"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?!0:!1},hasSwfObjectLoaded:function(){return"undefined"!=typeof window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var a=this.options.swfContainerId;this.addFlashDivNode();var i={onReady:t},n={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,a,"1","1","9.0.0",!1,i,n,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(a){}return t||(t=null),t},each:function(e,t,a){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,a);else if(e.length===+e.length){for(var i=0,n=e.length;n>i;i++)if(t.call(a,e[i],i,e)==={})return}else for(var r in e)if(e.hasOwnProperty(r)&&t.call(a,e[r],r,e)==={})return},map:function(e,t,a){var i=[];return null==e?i:this.nativeMap&&e.map===this.nativeMap?e.map(t,a):(this.each(e,function(e,n,r){i[i.length]=t.call(a,e,n,r)}),i)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]+t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]+t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]+t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]+t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]*t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]*t[3],a[1]+=a[2]>>>16,a[2]&=65535,a[2]+=e[3]*t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]*t[3],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[2]*t[2],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[3]*t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var a=e.length%16,i=e.length-a,n=[0,t],r=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],h=[1291169091,658871167],u=0;i>u;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),n=this.x64Xor(n,o),n=this.x64Rotl(n,27),n=this.x64Add(n,r),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,1390208809]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),r=this.x64Xor(r,s),r=this.x64Rotl(r,31),r=this.x64Add(r,n),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],a){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(u+8)]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),r=this.x64Xor(r,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(u)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),n=this.x64Xor(n,o)}return n=this.x64Xor(n,[0,e.length]),r=this.x64Xor(r,[0,e.length]),n=this.x64Add(n,r),r=this.x64Add(r,n),n=this.x64Fmix(n),r=this.x64Fmix(r),n=this.x64Add(n,r),r=this.x64Add(r,n),("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)}},t});