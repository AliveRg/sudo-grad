import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,c as l,k as b,d as v,w as i,l as h,n as d,u as _,m as y,b as e,F as j,r as S,h as C,t as u,i as L,a as n,g as c}from"./app-89d2f3a0.js";const A={},N={class:"filt",src:"/images/logoSVG.svg",alt:"Логотип"};function z(a,s){return r(),l("img",N)}const B=g(A,[["render",z],["__scopeId","data-v-79335ca9"]]),x={__name:"NavLink",props:["href","active"],setup(a){const s=a,t=b(()=>s.active?"inline-flex items-center px-3 pb-4 pt-1 border-b-[1px] border-slate-700/50 dark:border-slate-700/70 text-xs sm:text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-3 pb-4 pt-1 border-b-[1px] border-transparent text-xs sm:text-sm font-medium leading-5 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(o,f)=>(r(),v(_(y),{href:a.href,class:d(_(t))},{default:i(()=>[h(o.$slots,"default")]),_:3},8,["href","class"]))}},p={__name:"ResponsiveNavLink",props:["href","active"],setup(a){const s=a,t=b(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-slate-700/50  dark:border-slate-700/80  text-left text-base font-medium text-[#9C9C1A] dark:text-indigo-300  focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600/40 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(o,f)=>(r(),v(_(y),{href:a.href,class:d(_(t))},{default:i(()=>[h(o.$slots,"default")]),_:3},8,["href","class"]))}};const M={props:{text:String,color:String},data:function(){return{count:this.text.split("")}}},D={id:"circle",class:"h-20 w-20 md:h-28 md:w-28 relative flex justify-center items-center radius"},V={class:"absolute w-full h-full text rounded-full"};function G(a,s,t,o,f,w){return r(),l("div",D,[e("p",V,[(r(!0),l(j,null,S(a.count,($,m)=>(r(),l("span",{key:m,class:d(["rotate-"+m*15,"absolute left-1/2 text-xs md:text-base trans"]),style:C("color:"+t.color)},u($),7))),128))])])}const T=g(M,[["render",G]]),F={props:{tel:String,mail:String,tel2:String,adress:String}},E={class:"text-zinc-600 dark:text-slate-100 text-sm sm:text-lg lg:text-2xl font-semibold flex items-start justify-start md:justify-center"},I={class:"flex flex-col gap-5 rounded-lg"},O={class:"w-full flex gap-3 flex-col"},P={class:"flex gap-3 items-center"},R=e("span",{class:"material-symbols-outlined -mb-1"}," pin_drop ",-1),q={class:"w-full flex-col flex gap-5"},H=["href"],J=e("span",{class:"material-symbols-outlined -mb-1"}," call ",-1),K=["href"],Q=e("span",{class:"material-symbols-outlined -mb-1"}," call ",-1),U=["href"],W=e("span",{class:"material-symbols-outlined -mb-1"}," mail ",-1);function X(a,s,t,o,f,w){return r(),l("div",E,[e("ul",I,[e("li",O,[e("div",P,[R,e("span",null,u(t.adress),1)])]),e("li",q,[e("a",{href:"tel: "+t.tel,class:"flex gap-3 items-center"},[J,e("span",null,u(t.tel),1)],8,H),e("a",{href:"tel:"+t.tel2,class:"flex gap-3 items-center"},[Q,e("span",null,u(t.tel2),1)],8,K)]),e("li",null,[e("a",{href:"mailto:"+t.mail,class:"w-full flex gap-3 items-center"},[W,e("span",null,u(t.mail),1)],8,U)])])])}const k=g(F,[["render",X]]);const Y={class:"min-h-[40vh]"},Z={class:"bg-white dark:bg-slate-900"},ee={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},te={class:"flex justify-between h-16"},se={class:"flex"},ae={class:"shrink-0 flex items-center mr-32"},re={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},oe={class:"-mr-2 flex items-center sm:hidden"},ne={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},le={class:"pt-2 pb-3 space-y-1"},ie={class:"dark:bg-slate-900"},ce={class:"relative py-28 flex items-center justify-center h-min bg-cover md:bg-fixed bg-center bg-[url('/images/under_main-paralax.jpg')] dark:bg-[url('/images/under_main-paralax.jpg')]"},de={class:"relative h-full p-6 grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2 bg-white/60 dark:bg-black/60 rounded-lg"},ue={class:"absolute z-0 top-0 left-[85%] md:left-[90%] xl:left-[100%] -translate-x-1/2 -translate-y-1/2 text-slate-900 font-bold"},fe=e("div",{class:"h-full w-full text-zinc-700 dark:text-slate-100 text-sm sm:text-lg lg:text-2xl font-semibold"},[e("p",{class:"w-full h-1/2"},[c(" С @ Адвокатская контора "),e("br"),c(' "Белгород" ')]),e("iframe",{src:"https://yandex.ru/sprav/widget/rating-badge/152442756522?type=rating",width:"150",height:"50",frameborder:"0"})],-1),_e={components:{TextAdress:k}},me=Object.assign(_e,{__name:"AuthenticatedLayout",setup(a){const s=L(!1);return(t,o)=>(r(),l("div",null,[e("div",Y,[e("nav",Z,[e("header",null,[e("div",ee,[e("div",te,[e("div",se,[e("div",ae,[n(B,{class:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})]),e("nav",re,[n(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[c(" Услуги ")]),_:1},8,["href","active"]),n(x,{href:t.route("contact"),active:t.route().current("contact")},{default:i(()=>[c(" Заказать консультацию ")]),_:1},8,["href","active"])])]),e("div",oe,[e("button",{onClick:o[0]||(o[0]=f=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-sm text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"},[(r(),l("svg",ne,[e("path",{class:d({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:d({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])])]),e("div",{class:d([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("nav",le,[n(p,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[c(" Услуги ")]),_:1},8,["href","active"]),n(p,{href:t.route("contact"),active:t.route().current("contact")},{default:i(()=>[c(" Заказать консультацию ")]),_:1},8,["href","active"])])],2)]),e("main",null,[e("div",ie,[h(t.$slots,"default")])]),e("footer",null,[e("div",ce,[e("div",de,[e("div",ue,[n(T,{color:"",text:"SD-Gorodova-Advokate-GD-"})]),fe,n(k,{adress:"улица Маяковского, 26, Белгород",tel:"+7-980-326-97-94",tel2:"31-25-05",mail:"gorodova.work49280@gmail.com"})])])])])]))}});export{T as C,k as T,me as _};