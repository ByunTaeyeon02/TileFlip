import{d as Nt}from"../chunks/index.R8ovVqwX.js";import{s as Pt,n as jt,o as Lt}from"../chunks/scheduler.Ce_0Mfso.js";import{S as Mt,i as Bt,s as f,e as o,t as I,k as qt,d as n,f as c,c as a,a as v,l as de,b as V,m as r,n as q,g as Be,h as e,j as k,o as Gt}from"../chunks/index.DTvPRYe7.js";import{e as qe}from"../chunks/each.D6YF6ztN.js";const At=Nt,Wt=!0,$t=Object.freeze(Object.defineProperty({__proto__:null,csr:At,prerender:Wt},Symbol.toStringTag,{value:"Module"}));function kt(t,h,i){const l=t.slice();return l[16]=h[i],l[18]=i,l}function St(t,h,i){const l=t.slice();return l[19]=h[i],l[21]=i,l}function Ft(t){let h,i=t[19]+"",l;return{c(){h=o("td"),l=I(i)},l(C){h=a(C,"TD",{});var U=v(h);l=V(U,i),U.forEach(n)},m(C,U){Be(C,h,U),e(h,l)},p(C,U){U&256&&i!==(i=C[19]+"")&&k(l,i)},d(C){C&&n(h)}}}function Yt(t){let h,i,l=t[18]+1+"",C,U,H,S=qe(t[16]),_=[];for(let d=0;d<S.length;d+=1)_[d]=Ft(St(t,S,d));return{c(){h=o("tr"),i=o("th"),C=I(l),U=f();for(let d=0;d<_.length;d+=1)_[d].c();H=f(),this.h()},l(d){h=a(d,"TR",{class:!0});var y=v(h);i=a(y,"TH",{});var u=v(i);C=V(u,l),u.forEach(n),U=c(y);for(let O=0;O<_.length;O+=1)_[O].l(y);H=c(y),y.forEach(n),this.h()},h(){r(h,"class","hover")},m(d,y){Be(d,h,y),e(h,i),e(i,C),e(h,U);for(let u=0;u<_.length;u+=1)_[u]&&_[u].m(h,null);e(h,H)},p(d,y){if(y&256){S=qe(d[16]);let u;for(u=0;u<S.length;u+=1){const O=St(d,S,u);_[u]?_[u].p(O,y):(_[u]=Ft(O),_[u].c(),_[u].m(h,H))}for(;u<_.length;u+=1)_[u].d(1);_.length=S.length}},d(d){d&&n(h),Gt(_,d)}}}function Rt(t){let h,i,l,C,U,H,S="Your Score",_,d,y,u,O=p(t[3]/(t[3]+t[0]))+"",te,se,P,we="Puzzles Completed Without Giving Up",me,A,m,E,j,W,le=p(t[3]/(t[3]+t[0]))+"",G,R,Ee,T,N,b,L=p(t[2]/(t[1]+t[2]))+"",Ue,Ae,oe,ft="Number of Hints Used",We,ue,Oe,Re,J,Je,De=p(t[2]/(t[1]+t[2]))+"",He,Ke,Qe,Ie,Xe,ve,ct="Others' Scores",Ze,F,he,M,Ve=p(t[7]/(t[7]+t[4]))+"",Te,$e,ae,_t="Puzzles Completed Without Giving Up",xe,fe,je,et,K,tt,ye=p(t[7]/(t[7]+t[4]))+"",ke,st,lt,Y,ce,B,ze=p(t[6]/(t[5]+t[6]))+"",Se,ot,re,pt="Number of Hints Used",at,_e,Fe,rt,Q,nt,Ce=p(t[6]/(t[5]+t[6]))+"",Ye,it,dt,be,ut,ne,X,pe,gt="<tr><th></th> <th>Username</th> <th>Puzzles Completed</th> <th>Hints Stored</th> <th>Hints Used</th></tr>",vt,ie,ge=qe(t[8]),w=[];for(let s=0;s<ge.length;s+=1)w[s]=Yt(kt(t,ge,s));return{c(){h=f(),i=o("div"),l=o("div"),C=o("div"),U=f(),H=o("h2"),H.textContent=S,_=f(),d=o("div"),y=o("div"),u=o("div"),te=I(O),se=f(),P=o("div"),P.textContent=we,me=f(),A=o("div"),m=I(t[0]),E=f(),j=o("div"),W=I("You gave up "),G=I(le),R=I("% of the puzzles"),Ee=f(),T=o("div"),N=o("div"),b=o("div"),Ue=I(L),Ae=f(),oe=o("div"),oe.textContent=ft,We=f(),ue=o("div"),Oe=I(t[2]),Re=f(),J=o("div"),Je=I("You used "),He=I(De),Ke=I("% of your total hints"),Qe=f(),Ie=o("div"),Xe=f(),ve=o("h2"),ve.textContent=ct,Ze=f(),F=o("div"),he=o("div"),M=o("div"),Te=I(Ve),$e=f(),ae=o("div"),ae.textContent=_t,xe=f(),fe=o("div"),je=I(t[4]),et=f(),K=o("div"),tt=I("Others gave up "),ke=I(ye),st=I("% of the puzzles"),lt=f(),Y=o("div"),ce=o("div"),B=o("div"),Se=I(ze),ot=f(),re=o("div"),re.textContent=pt,at=f(),_e=o("div"),Fe=I(t[6]),rt=f(),Q=o("div"),nt=I("Others used "),Ye=I(Ce),it=I("% of their total hints"),dt=f(),be=o("div"),ut=f(),ne=o("div"),X=o("table"),pe=o("thead"),pe.innerHTML=gt,vt=f(),ie=o("tbody");for(let s=0;s<w.length;s+=1)w[s].c();this.h()},l(s){qt("svelte-1jj56oi",document.head).forEach(n),h=c(s),i=a(s,"DIV",{class:!0});var z=v(i);l=a(z,"DIV",{});var g=v(l);C=a(g,"DIV",{class:!0}),v(C).forEach(n),U=c(g),H=a(g,"H2",{"data-svelte-h":!0}),de(H)!=="svelte-1fdvqrz"&&(H.textContent=S),_=c(g),d=a(g,"DIV",{class:!0});var Z=v(d);y=a(Z,"DIV",{class:!0});var mt=v(y);u=a(mt,"DIV",{class:!0,style:!0,role:!0});var Et=v(u);te=V(Et,O),Et.forEach(n),mt.forEach(n),se=c(Z),P=a(Z,"DIV",{class:!0,"data-svelte-h":!0}),de(P)!=="svelte-welfwh"&&(P.textContent=we),me=c(Z),A=a(Z,"DIV",{class:!0});var Dt=v(A);m=V(Dt,t[0]),Dt.forEach(n),E=c(Z),j=a(Z,"DIV",{class:!0});var Ge=v(j);W=V(Ge,"You gave up "),G=V(Ge,le),R=V(Ge,"% of the puzzles"),Ge.forEach(n),Z.forEach(n),Ee=c(g),T=a(g,"DIV",{class:!0});var $=v(T);N=a($,"DIV",{class:!0});var It=v(N);b=a(It,"DIV",{class:!0,style:!0,role:!0});var Vt=v(b);Ue=V(Vt,L),Vt.forEach(n),It.forEach(n),Ae=c($),oe=a($,"DIV",{class:!0,"data-svelte-h":!0}),de(oe)!=="svelte-d298vz"&&(oe.textContent=ft),We=c($),ue=a($,"DIV",{class:!0});var yt=v(ue);Oe=V(yt,t[2]),yt.forEach(n),Re=c($),J=a($,"DIV",{class:!0});var Ne=v(J);Je=V(Ne,"You used "),He=V(Ne,De),Ke=V(Ne,"% of your total hints"),Ne.forEach(n),$.forEach(n),Qe=c(g),Ie=a(g,"DIV",{class:!0}),v(Ie).forEach(n),Xe=c(g),ve=a(g,"H2",{"data-svelte-h":!0}),de(ve)!=="svelte-hjlgk9"&&(ve.textContent=ct),Ze=c(g),F=a(g,"DIV",{class:!0});var x=v(F);he=a(x,"DIV",{class:!0});var zt=v(he);M=a(zt,"DIV",{class:!0,style:!0,role:!0});var Ct=v(M);Te=V(Ct,Ve),Ct.forEach(n),zt.forEach(n),$e=c(x),ae=a(x,"DIV",{class:!0,"data-svelte-h":!0}),de(ae)!=="svelte-welfwh"&&(ae.textContent=_t),xe=c(x),fe=a(x,"DIV",{class:!0});var bt=v(fe);je=V(bt,t[4]),bt.forEach(n),et=c(x),K=a(x,"DIV",{class:!0});var Pe=v(K);tt=V(Pe,"Others gave up "),ke=V(Pe,ye),st=V(Pe,"% of the puzzles"),Pe.forEach(n),x.forEach(n),lt=c(g),Y=a(g,"DIV",{class:!0});var ee=v(Y);ce=a(ee,"DIV",{class:!0});var wt=v(ce);B=a(wt,"DIV",{class:!0,style:!0,role:!0});var Ut=v(B);Se=V(Ut,ze),Ut.forEach(n),wt.forEach(n),ot=c(ee),re=a(ee,"DIV",{class:!0,"data-svelte-h":!0}),de(re)!=="svelte-d298vz"&&(re.textContent=pt),at=c(ee),_e=a(ee,"DIV",{class:!0});var Ot=v(_e);Fe=V(Ot,t[6]),Ot.forEach(n),rt=c(ee),Q=a(ee,"DIV",{class:!0});var Le=v(Q);nt=V(Le,"Others used "),Ye=V(Le,Ce),it=V(Le,"% of their total hints"),Le.forEach(n),ee.forEach(n),dt=c(g),be=a(g,"DIV",{class:!0}),v(be).forEach(n),ut=c(g),ne=a(g,"DIV",{class:!0,style:!0});var Ht=v(ne);X=a(Ht,"TABLE",{class:!0});var Me=v(X);pe=a(Me,"THEAD",{"data-svelte-h":!0}),de(pe)!=="svelte-1sgva4g"&&(pe.innerHTML=gt),vt=c(Me),ie=a(Me,"TBODY",{id:!0});var Tt=v(ie);for(let ht=0;ht<w.length;ht+=1)w[ht].l(Tt);Tt.forEach(n),Me.forEach(n),Ht.forEach(n),g.forEach(n),z.forEach(n),this.h()},h(){document.title="Score",r(C,"class","pt-2"),r(u,"class","radial-progress"),q(u,"--value",p(t[3]/(t[3]+t[0]))),r(u,"role","progressbar"),r(y,"class","stat-figure text-secondary"),r(P,"class","stat-title"),r(A,"class","stat-value"),r(j,"class","stat-desc"),r(d,"class","stat card shadow-xl rounded-3xl statDisplay pt-8"),r(b,"class","radial-progress"),q(b,"--value",p(t[2]/(t[1]+t[2]))),r(b,"role","progressbar"),r(N,"class","stat-figure text-secondary"),r(oe,"class","stat-title"),r(ue,"class","stat-value"),r(J,"class","stat-desc"),r(T,"class","stat card shadow-xl rounded-3xl statDisplay pt-8"),r(Ie,"class","pt-12"),r(M,"class","radial-progress"),q(M,"--value",p(t[7]/(t[7]+t[4]))),r(M,"role","progressbar"),r(he,"class","stat-figure text-secondary"),r(ae,"class","stat-title"),r(fe,"class","stat-value"),r(K,"class","stat-desc"),r(F,"class","stat card shadow-xl rounded-3xl statDisplay pt-8"),r(B,"class","radial-progress"),q(B,"--value",p(t[6]/(t[5]+t[6]))),r(B,"role","progressbar"),r(ce,"class","stat-figure text-secondary"),r(re,"class","stat-title"),r(_e,"class","stat-value"),r(Q,"class","stat-desc"),r(Y,"class","stat card shadow-xl rounded-3xl statDisplay pt-8"),r(be,"class","pt-12"),r(ie,"id","tableBody"),r(X,"class","table table-pin-rows"),r(ne,"class","overflow-x-auto overflow-y-auto"),q(ne,"max-height","25vh"),r(i,"class","text-column")},m(s,D){Be(s,h,D),Be(s,i,D),e(i,l),e(l,C),e(l,U),e(l,H),e(l,_),e(l,d),e(d,y),e(y,u),e(u,te),e(d,se),e(d,P),e(d,me),e(d,A),e(A,m),e(d,E),e(d,j),e(j,W),e(j,G),e(j,R),e(l,Ee),e(l,T),e(T,N),e(N,b),e(b,Ue),e(T,Ae),e(T,oe),e(T,We),e(T,ue),e(ue,Oe),e(T,Re),e(T,J),e(J,Je),e(J,He),e(J,Ke),e(l,Qe),e(l,Ie),e(l,Xe),e(l,ve),e(l,Ze),e(l,F),e(F,he),e(he,M),e(M,Te),e(F,$e),e(F,ae),e(F,xe),e(F,fe),e(fe,je),e(F,et),e(F,K),e(K,tt),e(K,ke),e(K,st),e(l,lt),e(l,Y),e(Y,ce),e(ce,B),e(B,Se),e(Y,ot),e(Y,re),e(Y,at),e(Y,_e),e(_e,Fe),e(Y,rt),e(Y,Q),e(Q,nt),e(Q,Ye),e(Q,it),e(l,dt),e(l,be),e(l,ut),e(l,ne),e(ne,X),e(X,pe),e(X,vt),e(X,ie);for(let z=0;z<w.length;z+=1)w[z]&&w[z].m(ie,null)},p(s,[D]){if(D&9&&O!==(O=p(s[3]/(s[3]+s[0]))+"")&&k(te,O),D&9&&q(u,"--value",p(s[3]/(s[3]+s[0]))),D&1&&k(m,s[0]),D&9&&le!==(le=p(s[3]/(s[3]+s[0]))+"")&&k(G,le),D&6&&L!==(L=p(s[2]/(s[1]+s[2]))+"")&&k(Ue,L),D&6&&q(b,"--value",p(s[2]/(s[1]+s[2]))),D&4&&k(Oe,s[2]),D&6&&De!==(De=p(s[2]/(s[1]+s[2]))+"")&&k(He,De),D&144&&Ve!==(Ve=p(s[7]/(s[7]+s[4]))+"")&&k(Te,Ve),D&144&&q(M,"--value",p(s[7]/(s[7]+s[4]))),D&16&&k(je,s[4]),D&144&&ye!==(ye=p(s[7]/(s[7]+s[4]))+"")&&k(ke,ye),D&96&&ze!==(ze=p(s[6]/(s[5]+s[6]))+"")&&k(Se,ze),D&96&&q(B,"--value",p(s[6]/(s[5]+s[6]))),D&64&&k(Fe,s[6]),D&96&&Ce!==(Ce=p(s[6]/(s[5]+s[6]))+"")&&k(Ye,Ce),D&256){ge=qe(s[8]);let z;for(z=0;z<ge.length;z+=1){const g=kt(s,ge,z);w[z]?w[z].p(g,D):(w[z]=Yt(g),w[z].c(),w[z].m(ie,null))}for(;z<w.length;z+=1)w[z].d(1);w.length=ge.length}},i:jt,o:jt,d(s){s&&(n(h),n(i)),Gt(w,s)}}}function p(t){return(t*100).toFixed(2)}function Jt(t,h,i){var l=this&&this.__awaiter||function(m,E,j,W){function le(G){return G instanceof j?G:new j(function(R){R(G)})}return new(j||(j=Promise))(function(G,R){function Ee(b){try{N(W.next(b))}catch(L){R(L)}}function T(b){try{N(W.throw(b))}catch(L){R(L)}}function N(b){b.done?G(b.value):le(b.value).then(Ee,T)}N((W=W.apply(m,E||[])).next())})};let C,U,H,S,_,d,y,u,O,te,se=[["p1",100,25,0],["p2",80,35,10],["p3",75,15,0],["p4",20,7,5],["p5",10,4,4]];function P(){return l(this,void 0,void 0,function*(){try{const m=yield fetch("/getTotals");if(!m.ok)throw new Error("Failed to fetch totals");const E=yield m.json();i(4,y=E.total_puzzle_completed),i(5,u=E.total_num_of_hints),i(6,O=E.total_num_of_hints_used),i(7,te=E.total_num_of_give_ups_used)}catch(m){console.error(m)}})}function we(){return l(this,void 0,void 0,function*(){try{const m=yield fetch("/getTopScores");if(!m.ok)throw new Error("Failed to fetch top scores");const E=yield m.json();i(8,se=E),console.log(se)}catch(m){console.error(m)}})}function me(){return l(this,void 0,void 0,function*(){try{const E=yield(yield fetch("/protected")).json();console.log(E.loggedIn),E.loggedIn?A():window.location.href="/"}catch(m){console.error("Error fetching data:",m)}})}function A(){return l(this,void 0,void 0,function*(){try{const E=yield(yield fetch("/getUserInfo")).json();C=E.username,U=E.userType,i(0,H=E.puzzleCompleted),i(1,S=E.numOfHints),i(2,_=E.numOfHintsUsed),i(3,d=E.numOfGiveUpsUsed)}catch(m){console.error("Error fetching data:",m)}})}return Lt(()=>{me(),we(),P()}),[H,S,_,d,y,u,O,te,se]}class xt extends Mt{constructor(h){super(),Bt(this,h,Jt,Rt,Pt,{})}}export{xt as component,$t as universal};