import{q as n,y as i,o as c,c as d,r as m,b as t,n as o,D as _,t as g,F as u}from"./app-0926a0ae.js";const f=["id"],x=t("h1",{class:"block"},null,-1),v=[x],h={class:"w-full md:w-6/12 dark:text-slate-200 text-base md:text-xl lg:text-3xl"},b={class:"overflow-scroll h-auto inline align-middle"},w={props:{reverse:Boolean,text:String,img:String}},p=Object.assign(w,{__name:"TitleImage",setup(l){const r=n("");return i(()=>{const a=new IntersectionObserver(s=>{s.forEach(e=>{e.intersectionRatio>0&&(r.value=e.target.getAttribute("id"))})});document.querySelectorAll(".title_image").forEach(s=>{a.observe(s)})}),(a,s)=>(c(),d(u,null,m(1,e=>t("div",{key:e,id:e,class:o([{title_image_active:e==r.value},"title_image flex flex-row md:flex-row"])},[t("div",{class:o(["w-full flex flex-col sm:flex-row justify-between gap-8",l.reverse?"md:flex-row-reverse":""])},[t("div",{class:"h-[23rem] sm:h-[25rem] md:h-[39rem] w-full sm:w-1/3 rounded-lg flex justify-center items-center bg-cover bg-no-repeat bg-center",style:_({backgroundImage:"url(/images/"+l.img+".jpg)"})},v,4),t("div",h,[t("h2",b,g(l.text),1)])],2)],10,f)),64))}});export{p as _};