(()=>{"use strict";const n=JSON.parse('{"L":["apple","banana","cherry","date","elderberry","fig","grape","honeydew","kiwi","lemon","situation","phone","story","department","cabinet","election","inspection","promotion","equipment","people","decision","application","equipment","meeting","customer","company","country","city","variety","knowledge","aspect","ear","opinion","philosophy","basket","definition","suggestion","tennis","pollution","climate","cousin","mixture","writing","awareness","week","profession","contribution","wealth","presence","combination","son","boyfriend","tooth","sympathy","media","secretary","competition","explanation","weakness","negotiation","friendship","excitement","birthday","night","history","world","warning","bread"]}'),e=JSON.parse('{"W":["elma","muz","kiraz","hurma","kara dut","incir","üzüm","kavun","kivi","limon","durum","telefon","hikaye","departman","dolap","seçim","denetim","terfi","ekipman","insanlar","karar","başvuru","ekipman","toplantı","müşteri","şirket","ülke","şehir","çeşit","bilgi","bakış açısı","kulak","fikir","felsefe","sepet","tanım","öneri","tenis","kirlilik","iklim","kuzen","karışım","yazı","farkındalık","hafta","meslek","katkı","servet","varlık","kombinasyon","oğul","erkek arkadaş","diş","sempati","medya","sekreter","rekabet","açıklama","zayıflık","müzakere","arkadaşlık","heyecan","doğum günü","gece","tarih","dünya","uyarı","ekmek"]}');document.head.insertAdjacentHTML("beforeend","\n  <style>\n    .game-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 20px;\n      padding: 20px;\n    }\n    .english-card {\n      width: 200px;\n      height: 100px;\n      background: #2196F3;\n      color: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 10px;\n      font-size: 24px;\n      cursor: pointer;\n    }\n    .options-container {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 10px;\n    }\n    .translation-card {\n      width: 150px;\n      height: 80px;\n      background: #4CAF50;\n      color: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 10px;\n      cursor: pointer;\n      transition: background-color 0.3s;\n    }\n    .translation-card:hover {\n      background: #45a049;\n    }\n    .translation-card.wrong {\n      background: #f44336;\n    }\n    .translation-card.correct {\n      background: #8bc34a;\n    }\n  </style>\n");const t=document.createElement("div");let a;t.className="game-container",document.body.appendChild(t);const o=document.createElement("p");o.textContent="Diğer oyunlar",o.style.cssText="\n    position: fixed;\n    top: 100px;\n    left: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n",document.body.appendChild(o);const i=document.createElement("button");i.textContent="Play Contexto",i.style.cssText="\n    padding: 10px 20px;\n    background: #2196F3;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin: 10px;\n",i.addEventListener("click",(()=>{window.location.href="https://contexto.me"})),document.body.appendChild(i);const r=document.createElement("button");r.textContent="Play Redactle",r.style.cssText="\n    padding: 10px 20px;\n    background: #ff5722;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin: 10px;\n",r.addEventListener("click",(()=>{window.location.href="https://www.redactle.com"})),document.body.appendChild(r);const d=document.createElement("button");let c;d.textContent="Play Semantle",d.style.cssText="\n    padding: 10px 20px;\n    background: #9c27b0;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin: 10px;\n",d.addEventListener("click",(()=>{window.location.href="https://semantle.pimanrul.es/"})),document.body.appendChild(d),function o(){t.innerHTML="",a=Math.floor(Math.random()*n.L.length);const i=n.L[a],r=e.W[a],d=document.createElement("div");d.className="english-card",d.textContent=i,t.appendChild(d);const s=function(n){const e=new Set;for(;e.size<4;)e.add(Math.floor(Math.random()*n));return Array.from(e)}(e.W.length).filter((n=>n!==a)).map((n=>e.W[n]));c=[...s,r],c.sort((()=>Math.random()-.5));const l=document.createElement("div");l.className="options-container",c.forEach((n=>{const e=document.createElement("div");e.className="translation-card",e.textContent=n,e.addEventListener("click",(()=>function(n,e,t){e===t?(n.classList.add("correct"),setTimeout((()=>{o()}),1e3)):(n.classList.add("wrong"),setTimeout((()=>{n.classList.remove("wrong")}),1e3))}(e,n,r))),l.appendChild(e)})),t.appendChild(l)}()})();