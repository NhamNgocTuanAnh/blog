const colors=["#FF0000","#006400","#FFFFFF","#FFD700","#D2691E"],snowflakes=document.querySelectorAll(".snowflake");function applyRandomStyles(e){getRandomBoolean()&&(e.style.color=getRandomColor()),getRandomBoolean()&&(e.style.fontSize=getRandomFontSize())}function getRandomColor(){let e=Math.floor(Math.random()*colors.length);return colors[e]}function getRandomFontSize(){return`${1.5*Math.random()+1}rem`}function getRandomBoolean(){return .5>Math.random()}function loadSnowEffect(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="{{ site.baseurl }}/assets/css/snow.css",document.head.appendChild(e);var n=createSnowContainer(),t=document.getElementById("snowCall");t?t.innerHTML=n.outerHTML:document.body.appendChild(n)}function createSnowContainer(){var e=document.createElement("div");e.className="snowflakes",e.setAttribute("aria-hidden","true");for(var n=0;n<12;n++){var t=createSnowflake();e.appendChild(t)}return e}function createSnowflake(){var e=document.createElement("div");e.className="snowflake";var n=document.createElement("div");return n.className="inner",n.textContent="❅",n.style.color=getRandomColor(),n.style.fontSize=getRandomFontSize(),e.appendChild(n),e}document.addEventListener("DOMContentLoaded",function(){var e=new Date().getMonth();(11===e||0===e)&&(loadSnowEffect())});
document.addEventListener("DOMContentLoaded",function(){let e="expirationDate",t=localStorage.getItem(e),n=new Date().getTime();(!t||n>parseInt(t))&&(localStorage.setItem(e,n+2592e5),location.reload())});
