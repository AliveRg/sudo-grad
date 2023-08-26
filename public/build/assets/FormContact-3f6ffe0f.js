import{i as c,o as p,c as b,b as l,j as h,f as g}from"./app-89d2f3a0.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const i={_origin:"https://api.emailjs.com"},y=(t,e="https://api.emailjs.com")=>{i._userID=t,i._origin=e},u=(t,e,o)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}const f=(t,e,o={})=>new Promise((r,a)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:s})=>{const d=new m(s);d.status===200||d.text==="OK"?r(d):a(d)}),n.addEventListener("error",({target:s})=>{a(new m(s))}),n.open("POST",i._origin+t,!0),Object.keys(o).forEach(s=>{n.setRequestHeader(s,o[s])}),n.send(e)}),x=(t,e,o,r)=>{const a=r||i._userID;return u(a,t,e),f("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"})},w=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},k=(t,e,o,r)=>{const a=r||i._userID,n=w(o);u(a,t,e);const s=new FormData(n);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",a),f("/api/v1.0/email/send-form",s)},v={init:y,send:x,sendForm:k};document.addEventListener("submit",t=>{t.target.reset()});const S={setup(){const t=c(null),e=c(null);return{form:t,inputFieldReset:e,sendMail:()=>{v.sendForm("service_mw6ouzg","template_q6vr08j",t.value,"HApXh8Y7mK6mSQcK3").then(r=>{document.querySelectorAll("form"),console.log("SUCCESS!",r.text),document.querySelectorAll("form1"),console.log("SUCCESS!",r.text),alert("Success!")},r=>{console.log("FAILED...",r.text),alert("FAILED!")})}}}},j=g('<label class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500" for="name">Имя:</label><input class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Иванов Иван" required type="text" id="name" name="name"><label for="email" class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500">Email:</label><input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" placeholder="you@example.com" size="30" required class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"><label for="message">Расскажите подробнее:</label><textarea class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="message"></textarea><label for="subject" class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500">Телефон:</label><input name="subject" maxlength="20" placeholder="+7(___)___-__-__" type="tel" required id="subject" class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"><label for="date">Укажите дату:</label><input class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="date" type="date" value="2023-07-22">',10),q={class:"w-full flex justify-between items-center flex-wrap"},F=l("input",{class:"px-5 py-3 bg-[#9C9C1A] text-slate-800 dark:text-white dark:bg-[#9C9C1A] rounded-xl",type:"submit",value:"Отправить"},null,-1),C=[F],E={class:"flex items-center h-full min-w-fit"},M=["href"];function D(t,e,o,r,a,n){return p(),b("form",{class:"w-full flex flex-col md:w-1/2 gap-3",ref:"form",onSubmit:e[1]||(e[1]=h((...s)=>r.sendMail&&r.sendMail(...s),["prevent"]))},[j,l("div",q,[l("button",{onClick:e[0]||(e[0]=(...s)=>t.success&&t.success(...s)),class:"button w-fit"},C),l("div",E,[l("a",{href:t.route("privacy"),class:"underline text-sky-600 cursor-pointer"}," Политика конфиденциальности ",8,M)])])],544)}const A=_(S,[["render",D]]);export{A as F};