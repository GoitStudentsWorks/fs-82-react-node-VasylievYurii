import{r as x,a as l,u as j,j as e,ak as f,Q as y,S as g,b as w,L as b}from"./index-4abdb932.js";import{S as v,a as F,W as E}from"./WelcomeStats-4d06053e.js";import{c as C,a as o,e as T,f as B}from"./index.esm-eb1bf827.js";import{W as k,I as t,a as m,S as r,E as d,v as I,L as D,b as L,c as W,B as $,T as N,P as q,d as P,N as U}from"./SignUp.styled-b012d8cd.js";const A=C().shape({name:o().min(2,"Too Short! Must be minimum 2 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Name is required"),email:o().email("Invalid email. Here is an example: example@mail.com").required("Email is required"),password:o().min(6,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Password is required")});function H(i){let n;return(i==="admin"||i==="god")&&(n="Nice try!"),n}const M=i=>{y.info(i,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},O={name:"",email:"",password:""},R=()=>{const[i,n]=x.useState(`${l}#icon-eye-off`),[c,p]=x.useState("password"),u=j(),h=(s,a)=>{u(f(s)),a.resetForm(),M("You have been sent a verification email. Follow the instructions in the email.")},S=()=>{c==="password"?(p("text"),n(`${l}#icon-eye`)):(p("password"),n(`${l}#icon-eye-off`))};return e.jsx(T,{initialValues:O,validationSchema:A,onSubmit:h,children:({errors:s,touched:a})=>e.jsxs(B,{autoComplete:"off",children:[e.jsxs(k,{children:[e.jsxs("div",{children:[e.jsx(t,{border:a.name?s.name?"1px solid #D80027":"1px solid #3CBF61":"1px solid #efede8",type:"text",name:"name",placeholder:"Name",validate:H}),s.name&&a.name||!s.name&&a.name?e.jsxs(m,{children:[e.jsx(r,{fill:!s.name&&a.name?"#3CBF61":null,children:e.jsx("use",{href:`${l}#icon-checkbox`})}),e.jsx(d,{color:!s.name&&a.name?"#3CBF61":null,children:s.name?s.name:"Success name"})]}):null]}),e.jsxs("div",{children:[e.jsx(t,{border:a.email?s.email?"1px solid #D80027":"1px solid #3CBF61":"1px solid #EFEDE84D",type:"text",name:"email",validate:I,placeholder:"Email"}),s.email&&a.email||!s.email&&a.email?e.jsxs(m,{children:[e.jsx(r,{fill:!s.email&&a.email?"#3CBF61":null,children:e.jsx("use",{href:`${l}#icon-checkbox`})}),e.jsx(d,{color:!s.email&&a.email?"#3CBF61":null,children:s.email?s.email:"Success email"})]}):null]}),e.jsxs("div",{children:[e.jsxs(D,{children:[e.jsx(t,{border:a.password?s.password?"1px solid #D80027":"1px solid #3CBF61":"1px solid #EFEDE84D",type:c,name:"password",placeholder:"Password"}),e.jsx(L,{children:e.jsx(W,{onClick:S,children:e.jsx("use",{href:i})})})]}),s.password&&a.password||!s.password&&a.password?e.jsxs(m,{children:[e.jsx(r,{fill:!s.password&&a.password?"#3CBF61":null,children:e.jsx("use",{href:`${l}#icon-checkbox`})}),e.jsx(d,{color:!s.password&&a.password?"#3CBF61":null,children:s.password?s.password:"Success password"})]}):null]})]}),e.jsx($,{type:"submit",children:"Sign Up"})]})})},G=()=>e.jsxs(g,{children:[e.jsxs(v,{children:[e.jsx(w,{to:"/welcome",children:e.jsx(b,{})}),e.jsxs(F,{children:[e.jsx(N,{children:"Sign Up"}),e.jsx(q,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(R,{}),e.jsxs(P,{children:["Already have an account?"," ",e.jsx(U,{to:"/signin",children:"Sign In"})]})]})]}),e.jsx(E,{})]});export{G as default};
