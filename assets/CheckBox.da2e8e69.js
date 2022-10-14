import{r}from"./index.93495812.js";import{$ as D,a as M}from"./index.module.3912f98a.js";import{r as W}from"./index.a20cd85b.js";import{j as p,F as C}from"./jsx-runtime.6f124f5b.js";import{I as q,r as F}from"./IconBase.esm.083331ce.js";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function K(e,t){const n=r.exports.createContext(t);function o(s){const{children:u,...d}=s,a=r.exports.useMemo(()=>d,Object.values(d));return r.exports.createElement(n.Provider,{value:a},u)}function c(s){const u=r.exports.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return o.displayName=e+"Provider",[o,c]}function X(e,t=[]){let n=[];function o(s,u){const d=r.exports.createContext(u),a=n.length;n=[...n,u];function i(l){const{scope:f,children:b,...x}=l,N=(f==null?void 0:f[e][a])||d,P=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(N.Provider,{value:P},b)}function h(l,f){const b=(f==null?void 0:f[e][a])||d,x=r.exports.useContext(b);if(x)return x;if(u!==void 0)return u;throw new Error(`\`${l}\` must be used within \`${s}\``)}return i.displayName=s+"Provider",[i,h]}const c=()=>{const s=n.map(u=>r.exports.createContext(u));return function(d){const a=(d==null?void 0:d[e])||s;return r.exports.useMemo(()=>({[`__scope${e}`]:{...d,[e]:a}}),[d,a])}};return c.scopeName=e,[o,Y(c,...t)]}function Y(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const u=o.reduce((d,{useScope:a,scopeName:i})=>{const l=a(s)[`__scope${i}`];return{...d,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}function w(e,t,{checkForDefaultPrevented:n=!0}={}){return function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)}}function L(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function H({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,c]=Z({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:o,d=L(n),a=r.exports.useCallback(i=>{if(s){const l=typeof i=="function"?i(e):i;l!==e&&d(l)}else c(i)},[s,e,c,d]);return[u,a]}function Z({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,c=r.exports.useRef(o),s=L(t);return r.exports.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}function G(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const _=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function J(e){const[t,n]=r.exports.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let u,d;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;u=i.inlineSize,d=i.blockSize}else u=e.offsetWidth,d=e.offsetHeight;n({width:u,height:d})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}const Q=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=Q.reduce((e,t)=>{const n=r.exports.forwardRef((o,c)=>{const{asChild:s,...u}=o,d=s?D:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(d,O({},u,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),V="Label",[Ce,ee]=K(V,{id:void 0,controlRef:{current:null}}),te=e=>{const t=ee("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id};function ne(e,t){return r.exports.useReducer((n,o)=>{const c=t[n][o];return c!=null?c:n},e)}const B=e=>{const{present:t,children:n}=e,o=oe(t),c=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),s=M(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(c,{ref:s}):null};B.displayName="Presence";function oe(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),c=r.exports.useRef(e),s=r.exports.useRef("none"),u=e?"mounted":"unmounted",[d,a]=ne(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const i=y(o.current);s.current=d==="mounted"?i:"none"},[d]),_(()=>{const i=o.current,h=c.current;if(h!==e){const f=s.current,b=y(i);e?a("MOUNT"):b==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&f!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,a]),_(()=>{if(t){const i=l=>{const b=y(o.current).includes(l.animationName);l.target===t&&b&&W.exports.flushSync(()=>a("ANIMATION_END"))},h=l=>{l.target===t&&(s.current=y(o.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.exports.useCallback(i=>{i&&(o.current=getComputedStyle(i)),n(i)},[])}}function y(e){return(e==null?void 0:e.animationName)||"none"}const T="Checkbox",[re,ke]=X(T),[ce,se]=re(T),ae=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:c,checked:s,defaultChecked:u,required:d,disabled:a,value:i="on",onCheckedChange:h,...l}=e,[f,b]=r.exports.useState(null),x=M(t,$=>b($)),N=te(f),P=o||N,S=r.exports.useRef(!1),A=f?Boolean(f.closest("form")):!0,[k=!1,z]=H({prop:s,defaultProp:u,onChange:h});return r.exports.createElement(ce,{scope:n,state:k,disabled:a},r.exports.createElement(I.button,g({type:"button",role:"checkbox","aria-checked":m(k)?"mixed":k,"aria-labelledby":P,"aria-required":d,"data-state":j(k),"data-disabled":a?"":void 0,disabled:a,value:i},l,{ref:x,onKeyDown:w(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:w(e.onClick,$=>{z(R=>m(R)?!0:!R),A&&(S.current=$.isPropagationStopped(),S.current||$.stopPropagation())})})),A&&r.exports.createElement(de,{control:f,bubbles:!S.current,name:c,value:i,checked:k,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),ie="CheckboxIndicator",ue=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=se(ie,n);return r.exports.createElement(B,{present:o||m(s.state)||s.state===!0},r.exports.createElement(I.span,g({"data-state":j(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),de=e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.exports.useRef(null),u=G(n),d=J(t);return r.exports.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(u!==n&&l){const f=new Event("click",{bubbles:o});a.indeterminate=m(n),l.call(a,m(n)?!1:n),a.dispatchEvent(f)}},[u,n,o]),r.exports.createElement("input",g({type:"checkbox","aria-hidden":!0,defaultChecked:m(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function m(e){return e==="indeterminate"}function j(e){return m(e)?"indeterminate":e?"checked":"unchecked"}const le=ae,fe=ue;var v=new Map;v.set("bold",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});v.set("duotone",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});v.set("fill",function(){return p(C,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});v.set("light",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});v.set("thin",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});v.set("regular",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var pe=function(t,n){return F(t,n,v)},U=r.exports.forwardRef(function(e,t){return p(q,{...Object.assign({ref:t},e,{renderPath:pe})})});U.displayName="Check";const he=U,E=e=>p(le,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:p(fe,{asChild:!0,children:p(he,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})});try{E.displayName="CheckBox",E.__docgenInfo={description:"",displayName:"CheckBox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/CheckBox/CheckBox.tsx#CheckBox"]={docgenInfo:E.__docgenInfo,name:"CheckBox",path:"src/components/CheckBox/CheckBox.tsx#CheckBox"})}catch{}export{E as C};
//# sourceMappingURL=CheckBox.da2e8e69.js.map
