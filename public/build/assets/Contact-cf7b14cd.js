import{_ as u,T as m}from"./AuthenticatedLayout-3d2ef419.js";import{c as v,a as l,u as _,w as C,F as y,o as n,X as x,b as o,n as c,d as i,e as d}from"./app-734553e6.js";import{F as p,e as h}from"./FormContact-20db0f6e.js";const b={class:"py-12"},w={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},k={class:"shadow-sm sm:rounded-lg"},S={class:"p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"},A={class:"flex flex-col md:flex-row justify-center gap-6"},z={class:"pt-6 p-2 min-w-[330px]"},j={class:"w-full flex items-center justify-between mb-3 sm:mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl"},I=o("iframe",{id:"map",src:"https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522",class:"map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"},null,-1);document.addEventListener("submit",t=>{t.target.reset()});const E={data(){return{adress:!0}},components:{TextAdress:m,FormContact:p},methods:{toggleAdressfa(){this.adress=!1},toggleAdresstr(){this.adress=!0},sendEmail(){h.sendForm("service_8r2js99","template_q6vr08j",this.$refs.form,"HApXh8Y7mK6mSQcK3").then(t=>{document.querySelectorAll("form"),console.log("SUCCESS!",t.text),document.querySelectorAll("form1"),console.log("SUCCESS!",t.text)},t=>{console.log("FAILED...",t.text)})}}},L=Object.assign(E,{__name:"Contact",setup(t){function g(){let s=[50.611073431601994,36.59083218508088];var e=new ymaps.Map("map",{center:s,zoom:14});let r=new ymaps.Placemark(s,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(r);let a=[55.758084325129424,37.6090622602577];var e=new ymaps.Map("map_1",{center:a,zoom:14});let f=new ymaps.Placemark(a,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(f)}return ymaps.ready(g),(s,r)=>(n(),v(y,null,[l(_(x),{title:"Контакты адвоката в Белгороде"}),l(u,null,{default:C(()=>[o("div",b,[o("div",w,[o("div",k,[o("div",S,[o("div",A,[o("div",z,[o("div",j,[o("div",{class:"",onClick:r[0]||(r[0]=(...a)=>s.toggleAdressfa&&s.toggleAdressfa(...a))},[o("p",{class:c(s.adress?"":"underline")}," Москва ",2)]),o("div",{class:"",onClick:r[1]||(r[1]=(...a)=>s.toggleAdresstr&&s.toggleAdresstr(...a))},[o("p",{class:c(s.adress?"underline":"")}," Белгород ",2)])]),s.adress?(n(),i(m,{key:0,class:"mt-7",adress:"улица Маяковского, 26, Белгород",tel:"+7-980-326-97-94",tel2:"31-25-05",mail:"gorodova.work49280@gmail.com"})):d("",!0),s.adress?d("",!0):(n(),i(m,{key:1,class:"mt-7",adress:"г.Москва, Газетный пер.,9, стр. 2",tel:"+7 (916) 444-41-33",tel2:"31-25-05",mail:"info@gorodova-advokat.ru"}))]),l(p)]),I])])])])]),_:1})],64))}});export{L as default};
