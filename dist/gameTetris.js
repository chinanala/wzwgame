/* wzwgame v1.0.0 by Microanswer,doc:http://test.microanswer.cn/wzwgame/index.html */
!function(t){var r=t.WzwScreen,i="playing",s="pause",f="over",e=[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,0,0],[0,1,1,1],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[0,1,1,1],[0,0,0,1],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[0,0,1,0],[0,1,1,0]],[[0,0,0,0],[0,1,1,1],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,1],[0,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,1],[0,0,1,0],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[0,1,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,1,0],[0,1,1,1],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[0,0,1,1],[0,0,1,0]],[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],[[0,0,0,0],[0,0,1,0],[0,1,1,0],[0,1,0,0]],[[0,0,0,0],[0,0,1,0],[0,1,1,0],[0,1,0,0]],[[0,0,0,0],[0,0,1,1],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,0,1,1],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,0,0],[0,1,1,0],[0,0,1,0]],[[0,0,0,0],[0,1,0,0],[0,1,1,0],[0,0,1,0]]],n=[800,700,600,550,500,450,400,350,300,250,200,150,130,100,90,80,70,60,50,40,30,20,10,5],u={50:1,100:2,150:3,200:4,250:5,300:6,350:7,400:8,450:9,500:10,550:11,600:12,700:13,850:14,1e3:15,1100:16,1300:17,1500:18,2e3:19,2500:20,3e3:21,4e3:22,5e3:23};function o(){(function(){this.preview_index=0,this.preview_lasttime=Date.now(),this.preview_timespace=200,this.previewAtom=[[[0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,0,0],[1,1,1,1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,0,0],[1,1,1,1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,0,0],[1,1,1,1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,1,0],[0,1,0,1,0,0,0,0,1,0,0],[1,1,1,1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1],[0,1,0,0,0,0,0,0,0,1,0],[0,1,0,1,0,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,1],[0,1,0,1,0,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,1,0,0,1,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0],[0,1,0,0,1,0,0,0,0,0,0],[0,1,0,1,1,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,0,0,0],[0,1,0,1,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1]],[[0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1]],[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,1,1,1]]]}).call(this),this.best=(localStorage||sessionStorage).getItem("tetrisBest")||0}function a(t){var o=this,e=o.stuffOffsetCol+t;if(o.atoms&&o.stuff&&o.atomsed&&o.status===i){for(var s=0;s<o.stuff.length;s++)for(var f=0;f<o.stuff[s].length;f++)if(1===o.stuff[s][f]&&(e+f<0?e=-f:e+f>o.atomsed[0].length-1&&(e=o.atomsed[0].length-f-1),!(o.stuffOffsetRow+s<0)&&1===o.atomsed[o.stuffOffsetRow+s][e+f]))return;o.stuffOffsetCol=e,o.atoms=r.mergeArr2(o.stuff,o.atomsed,o.stuffOffsetRow,o.stuffOffsetCol,function(t,e,s,f){return 1===o.stuff[s][f]?o.stuff[s][f]:o.atomsed[t][e]})}}function h(){return[].concat(e[r.random(0,e.length)])}function l(t){for(var e=[],s=0;s<t.length;s++){e[s]=[];for(var f=0;f<t[f].length;f++)e[s][f]=t[s][f]}return e}o.prototype.onRegLaunch=function(t){this.launch=t},o.prototype.getPreviewAtoms=function(){return Date.now()-this.preview_lasttime>=this.preview_timespace&&(this.preview_index++,this.preview_index>=this.previewAtom.length-1&&(this.preview_index=0),this.preview_lasttime=Date.now()),this.previewAtom[this.preview_index]},o.prototype.reset=function(){this.atoms=this.launch.screen.makeNewArr(),this.atomsed=this.launch.screen.makeNewArr(),this.level=0,this.succAniming=!1,this.score=0,this.stuffOffsetRow=-3,this.stuffOffsetCol=3,this.gameLastTime=0,this.status=f,this.turbo=!1,this.launch.screen.setLevel(this.level),this.launch.screen.setScore(this.score),this.launch.screen.setBest(this.best)},o.prototype.turboModeON=function(){this.turbo=!0},o.prototype.turboModeOFF=function(){this.turbo=!1},o.prototype.onLaunch=function(){this.reset(),this.stuff=h.call(this),this.nextStuff=h.call(this),this.status=i},o.prototype.onUpdate=function(){var o=this;if(o.atoms){if(Date.now()-o.gameLastTime>=(o.turbo?3:n[o.level])&&!o.succAniming){if(o.status===i)try{var t=!1;o.stuff||(o.stuff=o.nextStuff,o.nextStuff=null,t=!!o.stuff),o.stuff||(o.stuff=h.call(o),o.nextStuff=null,t=!!o.stuff),o.nextStuff||(o.nextStuff=h.call(o),t=!!o.stuff),t&&o.turboModeOFF();var e=function(t,e,s,f){var o=!1;t:for(var n=s.length-1;0<=n;n--)for(var i=s[n].length-1;0<=i;i--)if(1===s[n][i]){var r=e+n;if(!(r<0)){var u=t+i;if(!(u<0)){if(r!==f.length-1&&1!==f[r+1][u]||(o=!0),0===r&&o)throw new Error("gameover");if(o)break t}}}return o}.call(o,o.stuffOffsetCol,o.stuffOffsetRow,o.stuff,o.atomsed);e||(o.stuffOffsetRow+=1,o.atoms=r.mergeArr2(o.stuff,o.atomsed,o.stuffOffsetRow,o.stuffOffsetCol,function(t,e,s,f){return 1===o.stuff[s][f]?o.stuff[s][f]:o.atomsed[t][e]})),e&&(o.atomsed=l(o.atoms),o.stuff=void 0,o.stuffOffsetRow=-3,o.stuffOffsetCol=3,function(){for(var f=this,o=[],t=0;t<f.atomsed.length;t++){for(var e=!0,s=0;s<f.atomsed[t].length;s++)if(1!==f.atomsed[t][s]){e=!1;break}e&&(f.succAniming=!0,f.score+=1,o.push(t))}{var n,i;0<o.length&&(4<=o.length&&(f.score+=1),function(t){t>this.best&&function(t){this.best=t,(localStorage||sessionStorage).setItem("tetrisBest",t),this.launch.screen.setBest(t)}.call(this,t);this.launch.screen.setScore(t)}.call(f,f.score),(n=u[String(f.score)])>f.level&&(f.level=n,function(t){this.launch.screen.setLevel(t)}.call(f,f.level)),i=!1,r.scroll(0,f.atoms[0].length-1,{goo:function(t){var e=f.atoms[0].length;t=e<=t?e:t;for(var s=0;s<t;s++)r.each(o,function(t,e){f.atoms[t][s]=0})},end:function(t){for(var s=0;s<f.atoms[0].length;s++)r.each(o,function(t,e){f.atoms[t][s]=0});setTimeout(function(){!function(){if(!i){for(i=!0;0<o.length;)for(var t=o.shift();1<=t;t--){var s=t-1;f.atomsed[t]=[].concat(f.atomsed[s]),0==s&&(f.atomsed[s]=[],r.each(f.launch.screen.option.atomColCount,function(t,e){f.atomsed[s][e]=0}))}f.atoms=l(f.atomsed),f.succAniming=!1}}()},50)}},240))}}.call(o))}catch(t){"gameover"===t.message?(o.status=f,function(){var s=this;s.launch.screen.playAnim(r.ANIM.B2T,function(t,e){0===e&&s.onDestroy()})}.call(o)):console.error(t)}else o.status===s||o.status;o.gameLastTime=Date.now()}return o.atoms}},o.prototype.onUpdateStatus=function(){return this.nextStuff},o.prototype.pause=function(){this.status===i?(this.status=s,this.tempNextStuff=this.nextStuff,this.nextStuff=null,this.launch.screen.setPause(!0)):(this.status=i,this.nextStuff=this.tempNextStuff,this.tempNextStuff=null,this.launch.screen.setPause(!1))},o.prototype.onKeyup=function(t){"down"===t&&this.turboModeOFF()},o.prototype.onKeyDown=function(t){var e=this;if("reset"===t||"start"===t)e.pause();else if("left"===t){if(e.status===s)return;a.call(e,-1)}else if("right"===t){if(e.status===s)return;a.call(e,1)}else if("rotate"===t||"up"===t){if(e.status===s)return;(function(){var o=this;if(o.atoms&&o.stuff&&i===o.status){for(var t=[[],[],[],[]],e=0;e<o.stuff.length;e++)for(var s=0;s<o.stuff[e].length;s++){var f=s,n=o.stuff.length-1-e;if(t[f][n]=o.stuff[e][s],!(o.stuffOffsetRow+f<0)){if(o.stuffOffsetRow+f>=o.atoms.length)return;if(o.stuffOffsetCol+n>=o.atoms[0].length||o.stuffOffsetCol+n<0)return;if(1===o.atomsed[o.stuffOffsetRow+f][o.stuffOffsetCol+n])return}}o.stuff=t,o.atoms=r.mergeArr2(o.stuff,o.atomsed,o.stuffOffsetRow,o.stuffOffsetCol,function(t,e,s,f){return 1===o.stuff[s][f]?o.stuff[s][f]:o.atomsed[t][e]})}}).call(e)}else if("down"===t){if(e.status===s)return;e.turboModeON()}},o.prototype.onDestroy=function(){this.reset(),this.launch.screen.setBest(0),this.launch.screen.setScore(0),this.launch.screen.setPause(!1),this.launch.exitCurentGame()},t.Tetris=o}(window);