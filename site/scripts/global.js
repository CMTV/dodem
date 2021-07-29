(()=>{var o=class{constructor(e,t){this.content=e,this.author={name:t,link:L[t]}}},L={"Нильс Абель":"ru.wikipedia.org/wiki/Абель,_Нильс_Хенрик","Нильс Бор":"ru.wikipedia.org/wiki/Бор,_Нильс","Карл Вейерштрасс":"ru.wikipedia.org/wiki/Вейерштрасс,_Карл","Давид Гильберт":"ru.wikipedia.org/wiki/Гильберт,_Давид","Рене Декарт":"ru.wikipedia.org/wiki/Декарт,_Рене","В.П. Ермаков":"ru.wikipedia.org/wiki/Ермаков,_Василий_Петрович","Иоганн Кеплер":"ru.wikipedia.org/wiki/Кеплер,_Иоганн","Леопольд Кронекер":"ru.wikipedia.org/wiki/Кронекер,_Леопольд","Льюис Кэррол":"ru.wikipedia.org/wiki/Льюис_Кэрролл","М.В. Ломоносов":"ru.wikipedia.org/wiki/Ломоносов,_Михаил_Васильевич","Анри Пуанкаре":"ru.wikipedia.org/wiki/Пуанкаре,_Анри","Альберт Эйнштейн":"ru.wikipedia.org/wiki/Эйнштейн,_Альберт"},h=[new o("Математика для ученого — то же самое, что скальпель для анатома.","Нильс Абель"),new o("Математика — это больше чем наука, это язык науки.","Нильс Бор"),new o("Нельзя быть настоящим математиком, не будучи немного поэтом.","Карл Вейерштрасс"),new o("Бесконечность! Ничто не двигало так глубоко человеческий разум.","Давид Гильберт"),new o("Математика есть единая симфония бесконечного.","Давид Гильберт"),new o("Мало иметь хороший ум, главное – хорошо его применять.","Рене Декарт"),new o("В математике следует помнить не формулы, а процессы мышления.","В.П. Ермаков"),new o("Математика есть прообраз красоты мира.","Иоганн Кеплер"),new o("Господь сотворил целые числа; остальное – дело рук человека.","Леопольд Кронекер"),new o("Математика – это большая выдумка без обмана!","Льюис Кэррол"),new o("Математику уже затем знать надо, что она ум в порядок приводит.","М.В. Ломоносов"),new o("В математике нет символов для неясных мыслей.","Анри Пуанкаре"),new o("Математика – это искусство называть разные вещи одним и тем же именем.","Анри Пуанкаре"),new o("Математика – это поэзия логики идей.","Альберт Эйнштейн"),new o("Математика – единственный совершенный метод, позволяющий провести самого себя за нос.","Альберт Эйнштейн")],a=class{constructor(){window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".site > footer"),t=e.querySelector("blockquote"),i=e.querySelector(".by"),r=h[Math.floor(Math.random()*h.length)];t.innerHTML=r.content,i.innerHTML=r.author.name,i.setAttribute("href","https://"+r.author.link)})}};var l=class{constructor(){this.isExpanded=!1;window.addEventListener("DOMContentLoaded",()=>{this.rootElem=document.querySelector(".site > main > .location"),this.switchers=document.querySelectorAll(".location .btnSwitcher"),this.switchers.forEach(e=>e.addEventListener("click",()=>{this.toggle()}))})}toggle(){let e=!this.isExpanded;this.rootElem.classList.toggle("_expanded",e),this.isExpanded=e}};var u=class{constructor(e,t){this.id=e,this.searchQuery=t}},d=class{constructor(e){this.RID=0;this.worker=new Worker("/site/scripts/workers/search.js"),this.worker.addEventListener("message",t=>{let i=t.data;i.id===this.RID&&e(i.data)})}request(e){this.worker.postMessage(new u(++this.RID,e))}},m=class{constructor(){this.showing=!1;this.navElem=document.querySelector(".site > header nav .nav-item.search"),this.searchElem=document.querySelector(".site > header .searchContainer"),this.searchInput=this.searchElem.querySelector(".inputContainer input"),this.setupToggleBehaviour()}setupToggleBehaviour(){let e=this;function t(i){let r=!0;e.searchElem.contains(i.target)&&(r=!1),r&&(e.toggle(!1),window.removeEventListener("click",t))}this.navElem.addEventListener("click",i=>{this.showing||(i.stopPropagation(),this.toggle(!0),window.addEventListener("click",t))})}toggle(e){this.showing=e,this.navElem.classList.toggle("_active",e),this.searchElem.classList.toggle("_showing",e),e&&this.searchInput.focus()}},p=class{constructor(e){this.previousVal="";this.timeout=null;this.input=e.querySelector(".inputContainer input"),this.input.addEventListener("input",()=>{clearTimeout(this.timeout),this.timeout=setTimeout(()=>{let t=this.input.value.trim();t!==this.previousVal&&this.callback(t),this.previousVal=t},200)})}},k=class{constructor(e){this.location=e.querySelector(".location span"),this.content=e.querySelector(".taskContent"),this.goto=e.querySelector("a.goto")}setupPreview(e,t){this.location.innerHTML=t.location,this.content.innerHTML=t.content,this.goto.setAttribute("href","/tasks/"+e)}},g=class{constructor(e){this.prefer="_task";this.switcher=e.querySelector(".inputContainer .resultSwitcher"),this.switcher.addEventListener("click",()=>{let t=this.switcher.classList.contains("_task");this.prefer=t?"_book":"_task",["_task","_book"].forEach(i=>{this.switcher.classList.remove(i),this.paneElem.classList.remove(i)}),[this.switcher,this.paneElem].forEach(i=>i.classList.add(t?"_book":"_task"))}),this.paneElem=e.querySelector(".pane.pane--results"),this.tasksElem=this.paneElem.querySelector(".taskResults > .scrollContainer"),this.booksElem=this.paneElem.querySelector(".bookResults")}setupResults(e){["_single","_task","_book"].forEach(r=>{this.switcher.classList.remove(r),this.paneElem.classList.remove(r)});let t=e.taskNum>0,i=e.bookNum>0;(!t||!i)&&[this.switcher,this.paneElem].forEach(r=>r.classList.add("_single")),[this.switcher,this.paneElem].forEach(r=>{this.prefer==="_task"?r.classList.add(t?"_task":"_book"):r.classList.add(i?"_book":"_task")}),this.tasksElem.innerHTML=e.taskHTML,this.booksElem.innerHTML=e.bookHTML}},c=class{constructor(){this.worker=new d(t=>this.searchResponse(t));let e=document.querySelector(".site > header");this.rootElem=e.querySelector(".searchContainer"),this.toggle=new m,this.input=new p(this.rootElem),this.input.callback=t=>this.requestSearch(t),this.taskPane=new k(this.rootElem),this.resultsPane=new g(this.rootElem)}requestSearch(e){if(this.pendingTask=!1,e===""){this.setState(null);return}this.setState("loading"),this.worker.request(e)}searchResponse(e){if(typeof e=="string"){this.pendingTask=!0,fetch("/site/search/previews/"+e+".json").then(t=>t.json()).then(t=>{this.pendingTask&&(this.taskPane.setupPreview(e,t),this.setState("task"))});return}if(e.bookNum===0&&e.taskNum===0){this.setState("error");return}this.resultsPane.setupResults(e),this.setState("results")}setState(e){["loading","error","task","results"].forEach(t=>this.rootElem.classList.remove("state--"+t)),e&&this.rootElem.classList.add("state--"+e)}};var n=class{constructor(e){this.opened=!1;this.rootElem=e,this.headerElem=e.querySelector("header"),this.headerElem.addEventListener("click",()=>{this.opened?this.close():this.show()})}show(){this.opened=!0,this.rootElem.classList.toggle("_opened",this.opened),this.headerElem.setAttribute("title",this.openedTitle)}close(){this.opened=!1,this.rootElem.classList.toggle("_opened",this.opened),this.headerElem.setAttribute("title",this.closedTitle)}};var w=class extends n{constructor(){super(...arguments);this.closedTitle="Раскрыть пояснение";this.openedTitle="Скрыть пояснение"}};window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".spoiler").forEach(s=>new w(s))});var E=class extends n{constructor(){super(...arguments);this.closedTitle="Показать доказательство";this.openedTitle="Скрыть доказательство"}};window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".theorem:not(.noProof)").forEach(s=>new E(s))});var f=class extends n{constructor(){super(...arguments);this.closedTitle="Показать решение";this.openedTitle="Скрыть решение"}};window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".example:not(.noSolution)").forEach(s=>new f(s))});window.addEventListener("load",()=>{(typeof adsbygoogle=="undefined"||adsbygoogle.loaded!==!0)&&(document.querySelectorAll(".noDarkMagic").forEach(s=>s.classList.add("_showing")),document.querySelectorAll(".yesDarkMagic").forEach(s=>s.remove())),document.querySelectorAll(".darkMagicContainer").forEach(s=>{let e=s.querySelector("ins.adsbygoogle"),t=()=>{e.getAttribute("data-ad-status")==="unfilled"&&s.remove()};t(),new MutationObserver(t).observe(e,{attributeFilter:["data-ad-status"]})})});new l;new c;new a;})();
