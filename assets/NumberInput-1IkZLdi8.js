import{d as l,m as n,u as r,c,A as m,o as d,_ as p}from"./index-DfZIYm_f.js";const i=["value"],_=l({__name:"NumberInput",props:n({decimals:{type:Number,default:1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const u=a,t=r(a,"modelValue"),s=e=>{if(!e.target){console.warn(`Unexpected event (${e}) without target.`);return}const o=e.target;t.value=o.value};return(e,o)=>t.value?(d(),c("input",{key:0,type:"number",value:parseFloat(t.value).toFixed(u.decimals),onChange:s,min:"0",max:"100",class:"value",id:"myValue"},null,40,i)):m("",!0)}}),f=p(_,[["__scopeId","data-v-e91d0ce7"]]);export{f as N};
