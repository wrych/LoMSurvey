import{d as l,s as m,f as u,c as p,a as t,t as d,h as f,w as _,v,g,x as h,y as x,j as w,o as k,z as R,k as y,_ as V}from"./index-DfZIYm_f.js";const B={class:"main"},D={class:"highlight"},E=l({__name:"ReasoningView",setup(I){const o=x(),r=s=>{const a=w.find(n=>n.id===s);if(!a)throw Error("unknown dimension");return a},c=()=>{const s=o.params.id;i.value=r(s),e=R(y.value,s)},i=m(r(o.params.id));let e;return u(()=>o.params.id,c,{immediate:!0}),(s,a)=>(k(),p("main",null,[t("div",B,[t("h2",D,"Dimension "+d(i.value.name),1),f(" Please provide examples for your track record in dimension "+d(i.value.name)+". ",1),_(t("textarea",{class:"reasoning","onUpdate:modelValue":a[0]||(a[0]=n=>h(e)?e.value=n:e=n),placeholder:"Please provide examples of your track record in ${dimension.name}..."},null,512),[[v,g(e)]])])]))}}),P=V(E,[["__scopeId","data-v-9281ac9c"]]);export{P as default};
