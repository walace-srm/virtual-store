import{b as v,c as O}from"./chunk-LJ2AMKV5.js";import{H as V,O as k,P as F}from"./chunk-B2XXR4JB.js";import{a as K,b as Q}from"./chunk-WOVUPGWW.js";import{a as R,f as G}from"./chunk-K6AZIYYS.js";import{a as z,d as H,e as J}from"./chunk-AI6V7HCZ.js";import{O as L,Q as I,S as N,V as W,W as A,X as T,Y as q,Z as B,ba as j,da as D}from"./chunk-4XXROGO3.js";import{Eb as c,Nb as e,Ob as t,Tb as w,Vb as y,Vc as P,Wb as b,Yc as E,ec as S,fb as l,fc as r,gc as x,ic as u,jc as f,kb as p,kc as M,qb as C,sa as d,ta as g,ub as _}from"./chunk-G5HKJUTV.js";function U(a,X){if(a&1&&(e(0,"p",12),r(1),t()),a&2){let i=b();l(),x(i.errorMessage)}}var ue=(()=>{class a{constructor(i,n){this.router=i,this.auth=n,this.email="",this.password="",this.errorMessage=""}login(){F(this.auth,this.email,this.password).then(()=>{let i=k(this.auth,n=>{n&&(this.router.navigate(["/products"]),i())})}).catch(i=>{this.errorMessage="E-mail ou senha inv\xE1lidos"})}static{this.\u0275fac=function(n){return new(n||a)(p(v),p(V))}}static{this.\u0275cmp=C({type:a,selectors:[["app-login"]],decls:22,vars:4,consts:[["form","ngForm"],[1,"login-container"],[1,"login-card"],[1,"login-title"],[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","email","name","email","required","",3,"ngModelChange","ngModel"],["matInput","","type","password","name","password","required","",3,"ngModelChange","ngModel"],["mat-flat-button","","color","primary","type","submit",1,"full-width",3,"disabled"],["class","error-message",4,"ngIf"],[1,"register-link"],["routerLink","/signup"],[1,"error-message"]],template:function(n,o){if(n&1){let s=w();e(0,"div",1)(1,"mat-card",2)(2,"h2",3),r(3,"Login"),t(),e(4,"form",4,0),y("ngSubmit",function(){return d(s),g(o.login())}),e(6,"mat-form-field",5)(7,"mat-label"),r(8,"Email"),t(),e(9,"input",6),M("ngModelChange",function(m){return d(s),f(o.email,m)||(o.email=m),g(m)}),t()(),e(10,"mat-form-field",5)(11,"mat-label"),r(12,"Senha"),t(),e(13,"input",7),M("ngModelChange",function(m){return d(s),f(o.password,m)||(o.password=m),g(m)}),t()(),e(14,"button",8),r(15,"Entrar"),t(),_(16,U,2,1,"p",9),t(),e(17,"div",10)(18,"span"),r(19,"Ainda n\xE3o tem uma conta?"),t(),e(20,"a",11),r(21,"Cadastre-se aqui"),t()()()()}if(n&2){let s=S(5);l(9),u("ngModel",o.email),l(4),u("ngModel",o.password),l(),c("disabled",s.invalid),l(2),c("ngIf",o.errorMessage)}},dependencies:[E,P,D,B,N,W,A,j,q,T,O,G,R,J,H,z,Q,K,I,L],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background:#f0f2f5}.login-card[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:2rem;box-shadow:0 4px 20px #0000001a}.login-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#3f51b5}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}.login-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:1rem}.error-message[_ngcontent-%COMP%]{color:red;text-align:center;margin-top:1rem}.register-link[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.register-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:4px}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3f51b5;font-weight:500;text-decoration:none}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return a})();export{ue as LoginComponent};
