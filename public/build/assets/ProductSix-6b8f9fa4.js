import{_ as h,C as w,T as u}from"./AuthenticatedLayout-6678488c.js";import{c as a,a as o,u as v,w as m,F as c,o as n,X as y,b as e,r as p,e as i,D as b,n as C}from"./app-0926a0ae.js";import{C as g}from"./CardProduct-94305508.js";import{F as x,C as k}from"./FormContact-942210ca.js";import{_ as S}from"./SecondaryButton-096703ca.js";import{_ as j}from"./TitleImage-bf16da92.js";import"./ApplicationLogo-981c3634.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f8154c7d.js";const B=e("h1",null,"Земельные споры",-1),z=e("div",{class:"max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10 grid grid-rows-3 md:grid-cols-4 gap-2 md:gap-6"},[e("div",{class:"p-3 py-5 col-span-2 font-bold text-2xl md:text-4xl text-currentBroun"},[e("p",null,[i(" От "),e("span",{class:"text-currentCian"}," претензии "),i("до "),e("span",{class:"text-currentCian"}," успешного "),i("судебного решения. ")])]),e("div",{class:"overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 border-currentBroun row-span-3 col-span-2 grid grid-row-1 justify-items-center gap-8 p-3 py-5"},[e("div",{class:"h-max text-xs sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 text-justify flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"},[e("p",null,[i("Адвокат в Белгороде "),e("span",{class:"text-currentCian"}," Городова Елена Николаевна "),i(" Адвокатская помощь по земельным и иным спорам в сфере недвижимости, предварительные анализ доказательств и оценка перспектив судебного земельного спора, разработка плана действий для успешного решения земельного вопроса, консультации по земельным делам. "),e("br"),e("br"),e("br"),e("span",{class:"font-bold text-2xl md:text-4xl text-currentBroun"},"Стадии работы адвоката :"),e("br"),e("br"),e("ul",{class:"list-disc list-inside"},[e("li",null,"Анализ ситуации и оценка перспективы дела в офисе адвоката либо в офисе клиента. "),e("li",null,"Разработка стратегии дела и позиции клиента с учетом возможных рисков. "),e("li",null,"Выработает правовую позицию клиента."),e("li",null,"Примет участие в судебных заседаниях, представляя интересы своего клиента."),e("li",null,"Сбор доказательной базы всеми доступными правовыми методами, в том числе с помощью адвокатских запросов. "),e("li",null,"Проведение переговоров с контрагентом с целью досудебного урегулирования спора. "),e("li",null,"Личное представительство клиента на всех стадиях судебного процесса.")])])])]),e("div",{style:{"background-image":"url('/images/stiker-book.webp')"},class:"p-3 md:order-3 py-5 w-full row-span-2 col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"})],-1),L={style:{"-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none"},class:"relative max-w-9xl mx-auto sm:px-6 lg:px-8 mb-8 mt-24 flex gap-10 flex-wrap justify-center sm:justify-betwee"},F={class:"max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10"},I={class:"overflow-hidden shadow-sm sm:rounded-lg flex flex-col gap-20 p-10"},O={class:"p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"},P=e("iframe",{id:"map",src:"https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522",class:"map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"},null,-1),T={class:"flex flex-col md:flex-row justify-center gap-6"},E={class:"pt-12"},N={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},V={class:"overflow-hidden shadow-sm sm:rounded-lg"},$={class:"p-6 text-gray-900 dark:text-gray-400 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"},A={data(){return{cards:[{title:"Архитектурная",img:"state_3",content:"Проектная и архитектурная деятельность. Проведение переговоров с контрагентом с целью досудебного урегулирования спора."},{title:"Строительная отрасль",img:"state_11",content:"Сбор доказательной базы всеми доступными правовыми методами , в том числе с помощью адвокатских запросов."},{title:"Торговля и договоры поставки",img:"state_9",content:"Личное представительство клиента на всех стадиях судебного процесса."},{title:"Транспортные услуги",img:"state_1",content:"Личное представительство клиента на всех стадиях судебного процесса."}]}},props:{products:Object},components:{CardProduct:g,CircleLogo:w,SecondaryButton:S,TextAdress:u,TitleImage:j,FormContact:x},methods:{handleSCroll(r){let d=document.querySelectorAll(".addClass");for(let s=0;s<d.length;s++){const t=d[s];window.scrollY>1200&&t.classList.add("card_product")}},modulCard:function(r){r.target.classList.toggle("hideCard"),console.log(r.target)}},created(){window.addEventListener("scroll",this.handleSCroll)},destroyed(){window.removeEventListener("scroll",this.handleSCroll)},computed:{}},J=Object.assign(A,{__name:"ProductSix",setup(r){function d(){let s=[50.611073431601994,36.59083218508088];var t=new ymaps.Map("map",{center:s,zoom:14});let l=new ymaps.Placemark(s,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});t.controls.remove("geolocationControl"),t.controls.remove("searchControl"),t.controls.remove("trafficControl"),t.controls.remove("typeSelector"),t.controls.remove("fullscreenControl"),t.controls.remove("zoomControl"),t.controls.remove("rulerControl"),t.behaviors.disable(["scrollZoom"]),t.geoObjects.add(l)}return ymaps.ready(d),(s,t)=>(n(),a(c,null,[o(v(y),{title:"Адвокатская помощь"}),o(h,null,{header:m(()=>[B]),default:m(()=>[z,e("div",L,[(n(!0),a(c,null,p(s.cards,l=>(n(),a("div",{key:l,class:"w-72"},[o(k,{textFront:l.title,textBack:l.content,img__path:l.img},null,8,["textFront","textBack","img__path"])]))),128))]),e("div",F,[e("div",I,[e("div",O,[P,e("div",T,[o(u,{class:"mt-7",adress:"улица Маяковского, 26, Белгород",tel:"+7-980-326-97-94",tel2:"31-25-05",mail:"gorodova.work49280@gmail.com"}),o(x)])])])]),e("div",E,[e("div",N,[e("div",V,[e("div",$,[(n(!0),a(c,null,p(r.products,(l,_)=>(n(),a("section",{key:l.id,style:b("transition-duration: 1"+_+"00ms"),class:C("addClass"),onScroll:t[0]||(t[0]=(...f)=>s.handleSCroll&&s.handleSCroll(...f))},[o(g,{title:l.title,content:l.content,image_path:l.image_path,product_id:l.product_id},null,8,["title","content","image_path","product_id"])],36))),128))])])])])]),_:1})],64))}});export{J as default};
