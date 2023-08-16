import{c as b,a as i,u as C,w as d,F as S,o as u,X as k,b as l,n as f,T as g,d as _,e as v}from"./app-89d2f3a0.js";import{_ as j,T as p}from"./AuthenticatedLayout-07382783.js";import{F as y}from"./FormContact-3f6ffe0f.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={_origin:"https://api.emailjs.com"},T=(t,s="https://api.emailjs.com")=>{m._userID=t,m._origin=s},w=(t,s,o)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class h{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const x=(t,s,o={})=>new Promise((n,r)=>{const e=new XMLHttpRequest;e.addEventListener("load",({target:a})=>{const c=new h(a);c.status===200||c.text==="OK"?n(c):r(c)}),e.addEventListener("error",({target:a})=>{r(new h(a))}),e.open("POST",m._origin+t,!0),Object.keys(o).forEach(a=>{e.setRequestHeader(a,o[a])}),e.send(s)}),F=(t,s,o,n)=>{const r=n||m._userID;return w(r,t,s),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:r,service_id:t,template_id:s,template_params:o}),{"Content-type":"application/json"})},A=t=>{let s;if(typeof t=="string"?s=document.querySelector(t):s=t,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},E=(t,s,o,n)=>{const r=n||m._userID,e=A(o);w(r,t,s);const a=new FormData(e);return a.append("lib_version","3.10.0"),a.append("service_id",t),a.append("template_id",s),a.append("user_id",r),x("/api/v1.0/email/send-form",a)},I={init:T,send:F,sendForm:E};const O={class:"py-12"},q={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},z={class:"shadow-sm sm:rounded-lg"},L={class:"p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"},H={class:"flex flex-col md:flex-row justify-center gap-6"},D={class:"pt-6 p-2 min-w-[330px]"},M={class:"w-full flex items-center justify-between mb-3 sm:mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl"},N=l("iframe",{id:"map",src:"https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522",class:"map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"},null,-1);document.addEventListener("submit",t=>{t.target.reset()});const P={data(){return{adress:!0,adress1:!1}},components:{TextAdress:p,FormContact:y},methods:{toggleAdressfa(){this.adress=!1,setTimeout(()=>{this.adress1=!0},500)},toggleAdresstr(){this.adress1=!1,setTimeout(()=>{this.adress=!0},500)},sendEmail(){I.sendForm("service_8r2js99","template_q6vr08j",this.$refs.form,"HApXh8Y7mK6mSQcK3").then(t=>{document.querySelectorAll("form"),console.log("SUCCESS!",t.text),document.querySelectorAll("form1"),console.log("SUCCESS!",t.text)},t=>{console.log("FAILED...",t.text)})}}},J=Object.assign(P,{__name:"Contact",setup(t){function s(){let o=[50.611073431601994,36.59083218508088];var e=new ymaps.Map("map",{center:o,zoom:14});let n=new ymaps.Placemark(o,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(n);let r=[55.758084325129424,37.6090622602577];var e=new ymaps.Map("map_1",{center:r,zoom:14});let a=new ymaps.Placemark(r,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(a)}return ymaps.ready(s),(o,n)=>(u(),b(S,null,[i(C(k),{title:"Контакты адвоката в Белгороде"}),i(j,null,{default:d(()=>[l("div",O,[l("div",q,[l("div",z,[l("div",L,[l("div",H,[l("div",D,[l("div",M,[l("div",{class:"",onClick:n[0]||(n[0]=(...r)=>o.toggleAdressfa&&o.toggleAdressfa(...r))},[l("p",{class:f(o.adress?"opacity-50":"underline")}," Москва ",2)]),l("div",{class:"",onClick:n[1]||(n[1]=(...r)=>o.toggleAdresstr&&o.toggleAdresstr(...r))},[l("p",{class:f(o.adress1?"opacity-50 ":" underline")}," Белгород ",2)])]),i(g,null,{default:d(()=>[o.adress?(u(),_(p,{key:0,class:"mt-7",adress:"улица Маяковского, 26, Белгород",tel:"+7-980-326-97-94",tel2:"31-25-05",mail:"gorodova.work49280@gmail.com"})):v("",!0)]),_:1}),i(g,null,{default:d(()=>[o.adress1?(u(),_(p,{key:0,class:"mt-7",adress:"г.Москва, Газетный пер.,9, стр. 2",tel:"+7 (916) 444-41-33",tel2:"31-25-05",mail:"info@gorodova-advokat.ru"})):v("",!0)]),_:1})]),i(y)]),N])])])])]),_:1})],64))}});export{J as default};
