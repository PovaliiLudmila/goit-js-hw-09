const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")},e={intervalId:null,isActive:!1,start(){this.isActive?stop.setAttribute("disabled",!0):this.isActive=!1,this.intervalId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.start.disabled=!0,t.stop.removeAttribute("disabled"),t.start.setAttribute("disabled",!0)},stop(){clearInterval(this.intervalId),t.start.disabled=!1,t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)}};t.start.addEventListener("click",(()=>{e.start()})),t.stop.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.c3b54ee8.js.map
