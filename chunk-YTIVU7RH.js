import{a as J,b as K,c as v,d as W,e as _}from"./chunk-3LIR5CQK.js";import"./chunk-NITW6LWJ.js";import{h as $,i as G}from"./chunk-HVWF3CA4.js";import{b as et,d as nt}from"./chunk-RLLTFST7.js";import"./chunk-TH7WN3PK.js";import{a as I,b as S,c as w,d as tt,e as k,f as T}from"./chunk-CT7O4RTB.js";import"./chunk-Q5OM6AKQ.js";import"./chunk-MOIDJ56Q.js";import{N as X,P as f,Q as Y,R as x,ma as Z}from"./chunk-GJKTN3KQ.js";import{Eb as C,Gb as j,Jb as R,Kb as F,Lb as z,Mb as D,Nb as t,Ob as n,Pb as M,Tb as Q,Tc as H,Vb as m,Wb as y,Wc as N,Yc as b,Zb as V,Zc as U,db as L,fb as c,fc as o,gc as d,hc as P,ja as p,nc as A,pc as s,qb as l,qc as u,sa as q,ta as B,ub as O}from"./chunk-LUFARRJF.js";var ot=(()=>{class e{constructor(){this.router=p($),this.cartService=p(_)}goToCheckout(){this.router.navigate(["/checkout"])}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-cart-total-summary"]],decls:27,vars:12,consts:[[1,"text-xl"],[1,"sub-total"],[1,"total"],[1,"checkout"],["mat-raised-button","","color","primary",3,"click"]],template:function(a,r){a&1&&(t(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),o(3,"TOTAL DO CARRINHO"),n()(),t(4,"mat-card-content")(5,"div")(6,"div",1)(7,"span"),o(8,"Subtotal"),n(),t(9,"span"),o(10),s(11,"currency"),n()(),t(12,"div",1)(13,"span"),o(14,"Tax"),n(),t(15,"span"),o(16),s(17,"currency"),n()(),t(18,"div",1)(19,"span",2),o(20,"Total"),n(),t(21,"span",2),o(22),s(23,"currency"),n()()()(),t(24,"mat-card-actions",3)(25,"button",4),m("click",function(){return r.goToCheckout()}),o(26," Confira "),n()()()),a&2&&(c(10),d(u(11,3,r.cartService.cartSubTotal(),"BRL")),c(6),d(u(17,6,r.cartService.cartTax(),"BRL")),c(6),d(u(23,9,r.cartService.cartTotal(),"BRL")))},dependencies:[T,I,tt,w,k,S,x,f,b],styles:[".sub-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;align-content:center;margin-top:10px;margin-bottom:5px}.total[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em}.checkout[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center}"]})}}return e})();function mt(e,h){if(e&1){let i=Q();t(0,"img",11),m("error",function(r){q(i);let g=y();return B(g.fallbackImage(r))}),n()}if(e&2){let i=y();V("alt",i.cartItem.product.name),C("src",i.cartItem.product.images[0],L)}}var rt=(()=>{class e{constructor(){this.quantityOptions=[1,2,3,4,5],this.cartService=p(_)}ngOnInit(){this.imageSrc=this.cartItem.product.images?.[0]||"assets/images/placeholder.png"}onQuantityChange(i,a){a.quantity=i,this.cartService.updateCartQuantity(a)}onRemove(){this.cartService.removeProduct(this.cartItem.product)}increment(i){i.quantity<99&&(i.quantity++,this.onQuantityChange(i.quantity,i))}decrement(i){i.quantity>1&&(i.quantity--,this.onQuantityChange(i.quantity,i))}fallbackImage(i){i.target.src="assets/images/placeholder.png"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-cart-item"]],inputs:{cartItem:[0,"item","cartItem"]},decls:26,vars:12,consts:[[1,"parent"],[1,"product-details"],["height","100px",3,"src","alt","error",4,"ngIf"],[1,"ma-0"],[1,"ma-0","pa-0","text-md",2,"padding-top","5px"],[1,"quantity-buttons"],["mat-flat-button","","color","primary",1,"qty-btn",3,"click"],[1,"price-container"],[1,"ma-0",2,"font-weight","bold"],[1,"actions"],["mat-mini-fab","","aria-label","Remove Product From Cart","color","warn",3,"click"],["height","100px",3,"error","src","alt"]],template:function(a,r){a&1&&(t(0,"div",0)(1,"div",1),O(2,mt,1,2,"img",2),t(3,"div")(4,"p",3),o(5),n(),t(6,"p",4),o(7),n()()(),t(8,"div",5)(9,"button",6),m("click",function(){return r.decrement(r.cartItem)}),o(10,"-"),n(),t(11,"span"),o(12),n(),t(13,"button",6),m("click",function(){return r.increment(r.cartItem)}),o(14,"+"),n()(),t(15,"div",7)(16,"p",8),o(17),s(18,"currency"),n(),t(19,"p",4),o(20),s(21,"currency"),n()(),t(22,"div",9)(23,"button",10),m("click",function(){return r.onRemove()}),t(24,"mat-icon"),o(25,"delete"),n()()()()),a&2&&(c(2),C("ngIf",r.cartItem.product.images==null?null:r.cartItem.product.images.length),c(3),d(r.cartItem.product.name),c(2),P(" ",r.cartItem.product.description," "),c(5),d(r.cartItem.quantity),c(5),P(" ",u(18,6,r.cartItem.product.price*r.cartItem.quantity,"BRL")," "),c(3),P(" ",u(21,9,r.cartItem.product.price,"BRL")," "))},dependencies:[U,N,b,Z,nt,et,x,f,Y,W,v],styles:[".parent[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 0}.parent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;min-width:120px}.parent[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.parent[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto;object-fit:contain}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.5rem}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:0}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:32px;text-align:center;font-weight:700}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]{width:32px;height:32px;min-width:32px;padding:0;font-weight:700;border-radius:6px;transition:all .2s ease-in-out;color:#fff}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover, .parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:focus-visible{box-shadow:0 0 0 4px #0000001a}.parent[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:active{transform:scale(.96);box-shadow:0 0 0 6px #00000014}.parent[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]{text-align:right}.parent[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}@media (max-width: 768px){.parent[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.parent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;text-align:center}.parent[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center}.parent[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%], .parent[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{justify-content:center;text-align:center}}"]})}}return e})();var pt=()=>["/products"];function lt(e,h){if(e&1&&(t(0,"div",5),M(1,"app-cart-item",6),n()),e&2){let i=h.$implicit;c(),C("item",i)}}function dt(e,h){if(e&1&&z(0,lt,2,1,"div",5,F),e&2){let i=y();D(i.cartItems())}}function st(e,h){e&1&&(t(0,"div",4)(1,"mat-icon"),o(2,"remove_shopping_cart"),n(),t(3,"p"),o(4,"Seu carrinho est\xE1 vazio"),n(),t(5,"button",7),o(6," Ver produtos "),n()()),e&2&&(c(5),C("routerLink",A(1,pt)))}var at=(()=>{class e{constructor(){this.cartService=p(_),this.location=p(H),this.cartItems=this.cartService.cartItems}goBack(){this.location.back()}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-cart-list"]],decls:10,vars:3,consts:[[1,"cart-card"],["mat-icon-button","",3,"click"],[1,"cart-title"],[1,"cart-content"],[1,"empty-cart-state"],[1,"cart-item-container"],[3,"item"],["mat-flat-button","","color","primary","type","submit",1,"full-width",3,"routerLink"]],template:function(a,r){a&1&&(t(0,"mat-card",0)(1,"button",1),m("click",function(){return r.goBack()}),t(2,"mat-icon"),o(3,"arrow_back"),n()(),t(4,"mat-card-header")(5,"mat-card-title",2),o(6,"Itens do carrinho"),n()(),t(7,"mat-card-content",3),O(8,dt,2,0)(9,st,7,2,"div",4),n()()),a&2&&(c(7),j("empty",r.cartItems().length===0),c(),R(r.cartItems().length>0?8:9))},dependencies:[T,I,w,k,S,rt,v,G,x,f,X],styles:[".cart-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem;background-color:#fff;border-radius:12px;box-shadow:0 2px 10px #0000000d}.cart-title[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center;font-weight:600;color:#333}.cart-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}.cart-content.empty[_ngcontent-%COMP%]{justify-content:center;align-items:center;min-height:300px}.cart-item-container[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;border-radius:8px;padding:1rem;box-shadow:0 1px 4px #00000008;transition:box-shadow .2s ease}.cart-item-container[_ngcontent-%COMP%]:hover{box-shadow:0 2px 8px #0000000f}.empty-cart-state[_ngcontent-%COMP%]{text-align:center;padding:40px 20px;color:#888}.empty-cart-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:16px;color:#ccc}.empty-cart-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:12px}.empty-cart-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:8px;width:100%;max-width:250px}@media (min-width: 768px){.cart-content[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap}.cart-item-container[_ngcontent-%COMP%]{flex:1 1 calc(50% - 1rem)}}@media (min-width: 1024px){.cart-item-container[_ngcontent-%COMP%]{flex:1 1 calc(33.333% - 1rem)}}@media (max-width: 767px){.cart-content[_ngcontent-%COMP%]{flex-direction:column;padding:0}.cart-item-container[_ngcontent-%COMP%]{flex:1 1 100%;padding:.75rem;margin:0 auto;width:calc(100% - 1rem);box-sizing:border-box}.cart-card[_ngcontent-%COMP%]{padding:1rem .5rem}}"]})}}return e})();var Kt=(()=>{class e{static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=l({type:e,selectors:[["app-cart"]],decls:8,vars:0,consts:[[1,"cart-summary"],[1,"cart-items"],[1,"cart-total"]],template:function(a,r){a&1&&(t(0,"mat-toolbar")(1,"span"),o(2,"Carrinho de compras"),n()(),t(3,"div",0)(4,"div",1),M(5,"app-cart-list"),n(),t(6,"div",2),M(7,"app-cart-total-summary"),n()())},dependencies:[K,J,at,ot],styles:[".cart-summary[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:2rem;padding:2rem;padding-top:16px;box-sizing:border-box}.cart-items[_ngcontent-%COMP%]{flex:1 1 60%;min-width:300px}.cart-total[_ngcontent-%COMP%]{flex:1 1 30%;min-width:280px;align-self:flex-start}mat-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;background:#e1e1e1}@media (max-width: 768px){.cart-summary[_ngcontent-%COMP%]{flex-direction:column}.cart-items[_ngcontent-%COMP%], .cart-total[_ngcontent-%COMP%]{width:100%}}"]})}}return e})();export{Kt as CartComponent};
