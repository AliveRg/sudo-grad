import"./AuthenticatedLayout-a2909d74.js";import{_ as n}from"./_plugin-vue_export-helper-0ca5233f.js";import{o as a,c as i,b as t,E as l,t as r,n as s}from"./app-094d132c.js";const c={props:{active:Boolean,title:String,content:String,image_path:String,product_id:Number,value:Boolean}},u=["href"],d={class:"cardOdserver p-5 w-full flex flex-col"},f={class:"mt-4"};function m(o,g,e,_,h,p){return a(),i("a",{href:"/dashboard/Page"+e.product_id,class:s([o.route().current("products"+e.product_id)?"outline outline-2 outline-currentCian focus:outline-currentCian scale-[1.01] filter":"","h-full flex motion-safe:hover:scale-[1.01] transition-all duration-250 hover:outline hover:outline-2 hover:outline-currentCian focus:outline-currentCian via-transparent dark:ring-inset dark:ring-white/5 rounded-lg w-full"])},[t("div",d,[t("h3",{class:"w-full h-40 mx-auto bg-center bg-no-repeat bg-cover rounded-lg sm:max-w1/2 backdrop-brightness-50 text-xl p-1 style flex justify-center items-center text-gray-100",style:l({backgroundImage:"url(/images/"+e.image_path+")"})},r(e.title),5),t("p",f,r(e.content),1)])],10,u)}const C=n(c,[["render",m]]);export{C};
