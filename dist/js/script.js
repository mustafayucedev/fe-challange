let carousel=(e,t,a,o,s,n,r=!1,i=30)=>{$(e).owlCarousel({center:r,loop:!0,nav:!0,margin:i,responsiveClass:!0,responsive:{0:{items:t,nav:!0,dots:!1},575:{items:a,nav:!0,dots:!1},768:{items:o,nav:!0,dots:!1},991:{items:s,nav:!0,dots:!1},1280:{items:n,nav:!0,dots:!1}}})};carousel("#campaign-content",1.5,2,2.5,3.5,5.6,!0,20),carousel("#news-content",1.5,2,2.5,3.5,4.5,!0,40),$(function(){$('input[id="date"]').daterangepicker({showWeekNumbers:!1,showISOWeekNumbers:!1,locale:{format:"MM/DD/YYYY",separator:" - ",applyLabel:"Uygula",cancelLabel:"İptal",fromLabel:"From",toLabel:"To",daysOfWeek:["Pzt","Sal","Çar","Per","Cum","Cmt","Pzr"],monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],firstDay:1}},function(e,t,a){console.log("Yeni Aralık Seçildi: "+e.format("YYYY-MM-DD")+" to "+t.format("YYYY-MM-DD")+" (predefined range: "+a+")")})});const from=document.getElementById("from"),fromList=document.getElementById("from-list"),to=document.getElementById("to"),toList=document.getElementById("to-list"),fromItem=document.getElementById("item-from"),toItem=document.getElementById("item-to"),locationsFrom=document.querySelectorAll(".locations-from li"),locationsTo=document.querySelectorAll(".locations-to li"),locationChange=document.getElementById("location-change"),fromClear=(from.addEventListener("keyup",()=>{3<=from.value.trim().length?(fromList.classList.add("active"),fromItem.classList.add("active")):(fromList.classList.remove("active"),fromItem.classList.remove("active"))}),locationsFrom.forEach(t=>{t.addEventListener("click",()=>{var e=t.querySelector("span");from.value=e.textContent.trim(),fromList.classList.remove("active"),fromItem.classList.remove("active")})}),()=>{from.addEventListener("click",()=>{from.value="",toList.classList.remove("active"),toItem.classList.remove("active")})}),toClear=(to.addEventListener("keyup",()=>{3<=to.value.trim().length?(toList.classList.add("active"),toItem.classList.add("active")):(toList.classList.remove("active"),toItem.classList.remove("active"))}),locationsTo.forEach(t=>{t.addEventListener("click",()=>{var e=t.querySelector("span");to.value=e.textContent.trim(),toList.classList.remove("active"),toItem.classList.remove("active")})}),()=>{to.addEventListener("click",()=>{to.value="",fromList.classList.remove("active"),fromItem.classList.remove("active")})}),changeLocations=()=>{locationChange.addEventListener("click",()=>{var e;""===from.value||""===to.value?alert("Konumları Seçiniz.."):(e=from.value,from.value=to.value,to.value=e)})},menuButton=(fromClear(),toClear(),changeLocations(),document.querySelector(".mobile-menu > button")),menuContent=document.querySelector(".mobile-menu-content"),passenger=(menuButton.addEventListener("click",()=>{menuContent.classList.toggle("active")}),document.getElementById("passenger")),passengerList=document.getElementById("passenger-list"),addClass=()=>{passengerList.classList.add("active")},removeClass=()=>{passengerList.classList.remove("active")},tabMenu=(passengerList.addEventListener("click",e=>{e.stopPropagation(),addClass()}),passenger.addEventListener("click",e=>{e.stopPropagation(),addClass()}),document.addEventListener("click",()=>{removeClass()}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".qty-item").forEach(function(e){let t=e.querySelector(".decrement");var a=e.querySelector(".increment");let o=e.querySelector("input");function s(){0===parseInt(o.value)?t.disabled=!0:t.disabled=!1}s(),t.addEventListener("click",()=>{0<parseInt(o.value)&&(o.value=parseInt(o.value)-1),s()}),a.addEventListener("click",()=>{o.value=parseInt(o.value)+1,t.disabled=!1})})}),()=>{const t=document.querySelectorAll(".js-tab-title li"),o=document.querySelectorAll(".js-tab-content"),s=(t.forEach(e=>{e.addEventListener("click",e=>{const a=e.currentTarget.getAttribute("data-tab");s(t),s(o),e.currentTarget.classList.add("active"),window.innerWidth<640&&e.currentTarget.scrollIntoView({behavior:"smooth",inline:"center"}),o.forEach(e=>{var t=e.getAttribute("data-tab-content");a===t&&e.classList.add("active")})})}),e=>{e.forEach(e=>{e.classList.remove("active")})})});tabMenu();