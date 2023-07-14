import{_ as f,C as h,T as c}from"./AuthenticatedLayout-a2909d74.js";import{c as a,a as r,u as v,w,F as i,o as l,X as y,b as t,r as m,e as n,E as b,n as C}from"./app-094d132c.js";import{C as d}from"./CardProduct-13621d6f.js";import{C as k}from"./CartHoverRotate-d2cc383a.js";import{_ as j}from"./SecondaryButton-52af7b48.js";import{_ as B}from"./TitleImage-ef506725.js";import{F as p}from"./FormContact-745fb041.js";import"./ApplicationLogo-2352a12b.js";import"./_plugin-vue_export-helper-0ca5233f.js";const z=t("div",{class:"max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10 grid grid-rows-3 md:grid-cols-4 gap-2 md:gap-6"},[t("div",{class:"p-3 py-5 col-span-2 font-bold text-2xl md:text-4xl text-currentBroun"},[t("p",null,[t("span",{class:"text-currentCian"},"Квалифицированная помощь"),n(" на любой стадии уголовного дела ")])]),t("div",{class:"overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 border-currentBroun row-span-3 col-span-2 grid grid-row-1 justify-items-center gap-8 p-3 py-5"},[t("div",{class:"h-max text-xs sm:text-base md:text-lg lg:text-2xl text-justify dark:text-slate-200 flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"},[t("p",null,[n(" Неожиданное задержание, вызов на допрос в правоохранительные органы, обыск в жилище или офисе компании, повестка в суд- всегда сильный стресс не только для того, с кем это событие произошло , но и для близких людей. "),t("br"),t("br"),n(" В этой непростой ситуации противостоять правоохранительным органам в одиночку практически невозможно. Опыт и каждодневная практика адвоката по уголовным делам может оказаться решающим фактором для преодоления сложных периодов жизни. "),t("br"),t("br"),n(" Участие защитника возможно на любой стадии уголовного процесса, вам нужно только позвонить адвокату и мы вместе найдем законный выход из сложившейся ситуации. ")])])]),t("div",{style:{"background-image":"url('/images/Apollo_Sticker.webp')"},class:"p-3 md:order-3 py-5 w-full row-span-2 col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"})],-1),S={style:{"-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none"},class:"relative max-w-9xl mx-auto sm:px-6 lg:px-8 mb-8 mt-24 flex gap-10 flex-wrap justify-center sm:justify-between"},F={class:"max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10"},O={class:"overflow-hidden shadow-sm sm:rounded-lg flex flex-col gap-20 p-10"},I={class:"p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"},T=t("iframe",{id:"map",src:"https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522",class:"map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"},null,-1),L={class:"flex flex-col md:flex-row justify-center gap-6"},N={class:"pt-12"},P={class:"max-w-9xl mx-auto sm:px-6 lg:px-8"},V={class:"overflow-hidden shadow-sm sm:rounded-lg"},$={class:"p-6 text-gray-900 dark:text-gray-400 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"},A={data(){return{cards:[{title:"Защита",img:"state_1",content:"Защита обвиняемого (подозреваемого) на стадии предварительного расследования."},{title:"Задержание",img:"state_2",content:"Юридическая помощь при задержании гражданина."},{title:"Изменение меры",img:"state_3",content:"Отмена или изменение меры пресечения"},{title:"Первая инстанция",img:"state_4",content:"Защита подсудимого в суде первой апелляционной и кассационной инстанции."},{title:"Посещение",img:"state_5",content:"Посещение обвиняемого , подсудимого в следственном изоляторе."},{title:"Защита несовершеннолетнего",img:"state_6",content:"Защита прав и интересов несовершеннолетнего в уголовном процессе."},{title:"Примирительные",img:"state_7",content:"Примирительные процедуры в уголовном процессе."},{title:"Свидетели",img:"state_8",content:"Представление интересов свидетелей в рамках дознания и предварительного расследования."}]}},props:{products:Object},name:"DashBoard",components:{CardProduct:d,CircleLogo:h,SecondaryButton:j,TitleImage:B,TextAdress:c,FormContact:p},methods:{},computed:{}},J=Object.assign(A,{setup(g){function u(){let s=[50.611073431601994,36.59083218508088];var e=new ymaps.Map("map",{center:s,zoom:14});let o=new ymaps.Placemark(s,{},{iconLayout:"default#image",iconImageHref:"/images/marker_map.webp",iconImageSize:[40,40],iconImageOffset:[-19,-44]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"]),e.geoObjects.add(o)}return ymaps.ready(u),(s,e)=>(l(),a(i,null,[r(v(y),{title:"Адвокатская помощь"}),r(f,null,{default:w(()=>[z,t("div",S,[(l(!0),a(i,null,m(s.cards,o=>(l(),a("div",{key:o,class:"w-72"},[r(k,{textFront:o.title,textBack:o.content,img__path:o.img},null,8,["textFront","textBack","img__path"])]))),128))]),t("div",F,[t("div",O,[t("div",I,[T,t("div",L,[r(c,{class:"mt-7",adress:"улица Маяковского, 26, Белгород",tel:"+7-980-326-97-94",tel2:"31-25-05",mail:"gorodova.work49280@gmail.com"}),r(p)])])])]),t("div",N,[t("div",P,[t("div",V,[t("div",$,[(l(!0),a(i,null,m(g.products,(o,_)=>(l(),a("section",{key:o.id,style:b("transition-duration: 1"+_+"00ms"),class:C("addClass"),onScroll:e[0]||(e[0]=(...x)=>s.handleSCroll&&s.handleSCroll(...x))},[r(d,{title:o.title,content:o.content,image_path:o.image_path,product_id:o.product_id},null,8,["title","content","image_path","product_id"])],36))),128))])])])])]),_:1})],64))}});export{J as default};
