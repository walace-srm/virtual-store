import{a as Ze,c as Je,e as Xe,f as et}from"./chunk-4JGDJ5NW.js";import{a as qe}from"./chunk-SPADD4GX.js";import"./chunk-RGMJOE4E.js";import{b as he,c as ve,d as xe,e as Ie}from"./chunk-MKZSDKOM.js";import{a as Me,c as Se,d as O,e as we,f as T,h as Pe,i as ke,j as Ee}from"./chunk-S5WPLZQQ.js";import{H as ye}from"./chunk-B2XXR4JB.js";import{a as Ge,b as Ue}from"./chunk-WOVUPGWW.js";import{a as Qe,b as He,c as Ye,d as Ke}from"./chunk-WYD63TRG.js";import"./chunk-XY4KDGPE.js";import{a as Le,c as ze,f as F}from"./chunk-K6AZIYYS.js";import"./chunk-2RB4UQE5.js";import{a as We,d as Ve,e as $e}from"./chunk-AI6V7HCZ.js";import{$ as Ne,F as _e,M as be,O as Ce,Q as I,S as Oe,T as f,V as Te,W as Fe,Z as Be,_ as Re,aa as Ae,ca as De,ea as je}from"./chunk-4XXROGO3.js";import{$b as ne,Ac as k,Db as v,Eb as m,Fb as M,Gb as K,Ha as q,Hb as Z,Ja as Q,Jb as A,Kb as J,Lb as X,Mb as ee,Nb as o,Ob as n,Pa as H,Pb as l,Qb as te,Rb as re,Sb as S,Sc as de,Tb as ie,Uc as pe,Vb as y,Vc as E,Wb as g,Wc as ue,Xc as ge,Yc as fe,Zb as oe,a as j,ac as ae,b as L,bc as ce,da as z,db as b,e as _,ea as W,ec as w,fb as a,fc as c,ga as V,gc as x,hc as se,ia as R,ja as u,kb as C,oc as me,pc as le,qb as h,qc as P,rb as Y,sa as $,ta as G,ua as N,ub as p,va as U}from"./chunk-G5HKJUTV.js";var B=(()=>{class r{constructor(e,t){this.firestore=e,this.storage=t,this.collectionRef=O(this.firestore,"products")}uploadImage(e,t){return _(this,null,function*(){let i=`products/${t}/${e.name}`,s=Xe(this.storage,i);return yield et(s,e),yield Je(s)})}create(e){let t=Pe(),i=T(O(t,"products"));return ke(i,L(j({},e),{id:i.id}))}getAll(){let e=O(this.firestore,"products");return Se(e,{idField:"id"})}update(e,t){return _(this,null,function*(){let i=T(this.firestore,`products/${e}`);yield Ee(i,t)})}delete(e){return _(this,null,function*(){let t=T(this.firestore,`products/${e}`);yield we(t)})}static{this.\u0275fac=function(t){return new(t||r)(R(Me),R(Ze))}}static{this.\u0275prov=z({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function mt(r,d){if(r&1&&(o(0,"mat-option",21)(1,"div",22),l(2,"img",23),o(3,"span"),c(4),n()()()),r&2){let e=d.$implicit;m("value",e),a(2),m("src",e,b),a(2),x(e.split("/").pop())}}function lt(r,d){if(r&1&&(o(0,"div",24),l(1,"img",25),n()),r&2){let e,t=g();a(),m("src",(e=t.form.get("image"))==null?null:e.value,b)}}var tt=(()=>{class r{constructor(e,t,i,s){this.fb=e,this.snackBar=t,this.location=i,this.productService=s,this.categories=["Blusa","Bermuda","Cal\xE7a"],this.sizes=["P","M","G","GG","36","38","40","42"],this.colors=["Preto","Branco","Azul","Vermelho","Verde"],this.selectedImage="",this.allImages=[],this.form=this.fb.group({name:["",[f.required]],description:["",[f.required]],price:[0,[f.required,f.min(1)]],category:["",[f.required]],size:[""],color:[""],image:["",[f.required]],status:[],discount:[]}),this.generateImages()}generateImages(){let e=["blusas","bermudas","calcas"];for(let t of e)for(let i=1;i<=5;i++)this.allImages.push(`assets/images/${t}/${i}.jpg`)}onImageSelect(e){this.selectedImage=e,this.form.patchValue({image:e})}onSubmit(){return _(this,null,function*(){if(this.form.invalid){this.snackBar.open("Preencha todos os campos obrigat\xF3rios.","Fechar",{duration:3e3});return}let e=this.form.value;try{yield this.productService.create(e),this.snackBar.open("Produto cadastrado com sucesso!","Fechar",{duration:3e3}),this.form.reset(),this.selectedImage=""}catch(t){console.error(t),this.snackBar.open("Erro ao cadastrar o produto.","Fechar",{duration:3e3})}})}onCancel(){this.location.back()}static{this.\u0275fac=function(t){return new(t||r)(C(De),C(qe),C(de),C(B))}}static{this.\u0275cmp=h({type:r,selectors:[["app-product-form"]],decls:46,vars:4,consts:[[1,"form-page"],[1,"form-card"],[1,"form-title"],[1,"form-grid",3,"ngSubmit","formGroup"],["appearance","outline",1,"full"],["matInput","","formControlName","name"],["matInput","","rows","3","formControlName","description"],["appearance","outline",1,"half"],["matInput","","type","number","formControlName","price"],["matInput","","type","number","formControlName","discount"],["formControlName","category"],["value","blusas"],["value","bermudas"],["value","calcas"],["matInput","","formControlName","status"],["formControlName","image"],[3,"value",4,"ngFor","ngForOf"],["class","image-preview full",4,"ngIf"],[1,"button-group","full"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-stroked-button","","color","warn","type","button",3,"click"],[3,"value"],[1,"image-option"],[3,"src"],[1,"image-preview","full"],["alt","Preview da imagem",3,"src"]],template:function(t,i){if(t&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),c(3,"Cadastrar Produto"),n(),o(4,"form",3),y("ngSubmit",function(){return i.onSubmit()}),o(5,"mat-form-field",4)(6,"mat-label"),c(7,"Nome do Produto"),n(),l(8,"input",5),n(),o(9,"mat-form-field",4)(10,"mat-label"),c(11,"Descri\xE7\xE3o"),n(),l(12,"textarea",6),n(),o(13,"mat-form-field",7)(14,"mat-label"),c(15,"Pre\xE7o"),n(),l(16,"input",8),n(),o(17,"mat-form-field",7)(18,"mat-label"),c(19,"Desconto (%)"),n(),l(20,"input",9),n(),o(21,"mat-form-field",7)(22,"mat-label"),c(23,"Categoria"),n(),o(24,"mat-select",10)(25,"mat-option",11),c(26,"Blusas"),n(),o(27,"mat-option",12),c(28,"Bermudas"),n(),o(29,"mat-option",13),c(30,"Cal\xE7as"),n()()(),o(31,"mat-form-field",7)(32,"mat-label"),c(33,"Status"),n(),l(34,"input",14),n(),o(35,"mat-form-field",4)(36,"mat-label"),c(37,"Imagem"),n(),o(38,"mat-select",15),p(39,mt,5,3,"mat-option",16),n()(),p(40,lt,2,1,"div",17),o(41,"div",18)(42,"button",19),c(43,"Salvar"),n(),o(44,"button",20),y("click",function(){return i.onCancel()}),c(45,"Cancelar"),n()()()()()),t&2){let s;a(4),m("formGroup",i.form),a(35),m("ngForOf",i.allImages),a(),m("ngIf",(s=i.form.get("image"))==null?null:s.value),a(2),m("disabled",i.form.invalid)}},dependencies:[E,pe,je,Be,Oe,Re,Te,Fe,Ne,Ae,$e,Ve,We,Ue,Ge,Ke,Ye,Qe,F,I,Ce,He,he],styles:["[_nghost-%COMP%]{display:block;padding-top:80px;background-color:#f4f6f8;min-height:100vh}.form-page[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:32px 16px}.form-card[_ngcontent-%COMP%]{width:100%;max-width:700px;background-color:#fff;border-radius:16px;padding:32px;box-shadow:0 10px 30px #0000001a}.form-title[_ngcontent-%COMP%]{text-align:center;font-size:26px;margin-bottom:24px;font-weight:600;color:#3f51b5}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.full[_ngcontent-%COMP%]{grid-column:span 2}.half[_ngcontent-%COMP%]{grid-column:span 1}.image-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.image-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;border-radius:4px}.image-preview[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:250px;border-radius:12px;box-shadow:0 4px 12px #0003}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;margin-top:8px}@media (max-width: 700px){.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.full[_ngcontent-%COMP%], .half[_ngcontent-%COMP%]{grid-column:span 1}.button-group[_ngcontent-%COMP%]{flex-direction:column}}"]})}}return r})();var dt=["determinateSpinner"];function pt(r,d){if(r&1&&(N(),o(0,"svg",11),l(1,"circle",12),n()),r&2){let e=g();v("viewBox",e._viewBox()),a(),M("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),v("r",e._circleRadius())}}var ut=new V("mat-progress-spinner-default-options",{providedIn:"root",factory:gt});function gt(){return{diameter:rt}}var rt=100,ft=10,it=(()=>{class r{_elementRef=u(q);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=u(H,{optional:!0}),t=u(ut);this._noopAnimations=e==="NoopAnimations"&&!!t&&!t._forceAnimations,this.mode=this._elementRef.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=rt;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ft)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=h({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&ne(dt,5),t&2){let s;ae(s=ce())&&(i._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(v("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Z("mat-"+i.color),M("width",i.diameter,"px")("height",i.diameter,"px")("--mdc-circular-progress-size",i.diameter+"px")("--mdc-circular-progress-active-indicator-width",i.diameter+"px"),K("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",k],diameter:[2,"diameter","diameter",k],strokeWidth:[2,"strokeWidth","strokeWidth",k]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(p(0,pt,2,8,"ng-template",null,0,P),o(2,"div",2,1),N(),o(4,"svg",3),l(5,"circle",4),n()(),U(),o(6,"div",5)(7,"div",6)(8,"div",7),S(9,8),n(),o(10,"div",9),S(11,8),n(),o(12,"div",10),S(13,8),n()()()),t&2){let s=w(1);a(4),v("viewBox",i._viewBox()),a(),M("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),v("r",i._circleRadius()),a(4),m("ngTemplateOutlet",s),a(2),m("ngTemplateOutlet",s),a(2),m("ngTemplateOutlet",s)}},dependencies:[ue],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0})}return r})();var ot=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Y({type:r});static \u0275inj=W({imports:[_e]})}return r})();function ht(r,d){r&1&&(te(0),o(1,"div",2),l(2,"mat-spinner"),o(3,"p"),c(4,"Carregando produtos..."),n()(),re())}function vt(r,d){r&1&&(o(0,"div",6)(1,"span"),c(2,"Sale"),n()())}function xt(r,d){if(r&1&&(o(0,"span",13),c(1),n()),r&2){let e=g().$implicit;a(),se("R$ ",e.discount,"")}}function bt(r,d){if(r&1){let e=ie();o(0,"mat-card")(1,"div",4)(2,"figure",5),p(3,vt,3,0,"div",6),l(4,"img",7),n()(),o(5,"mat-card-content",8)(6,"div",9)(7,"div")(8,"p",10),c(9),n(),o(10,"p",11),c(11),n()(),o(12,"div",12),p(13,xt,2,1,"span",13),o(14,"span"),c(15),me(16,"currency"),n()(),o(17,"button",14),y("click",function(){let i=$(e).$implicit,s=g(2);return G(s.addProductToCart(i))}),o(18,"mat-icon"),c(19,"add_shopping_cart"),n()()()()()}if(r&2){let e=d.$implicit;a(3),A(e.status==="sale"?3:-1),a(),oe("alt",e.name),m("src",e.image,b),a(5),x(e.name),a(2),x(e.description),a(2),A(e.discounted==="discounted"?13:-1),a(2),x(le(16,7,e.price,"BRL"))}}function Ct(r,d){if(r&1&&(o(0,"div",3),X(1,bt,20,10,"mat-card",null,J),n()),r&2){let e=g();a(),ee(e.products)}}var nt=(()=>{class r{constructor(){this.auth=u(ye),this.cartService=u(Ie),this.productService=u(B),this.loading=Q(!1)}ngOnInit(){this.getAll()}ngAfterViewInit(){}getAll(){this.loading.set(!0),this.productService.getAll().subscribe(e=>{this.products=e,this.loading.set(!1)})}addProductToCart(e){this.cartService.addProduct(e)}trackByProduct(e,t){return t.id}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=h({type:r,selectors:[["app-products-list"]],decls:3,vars:2,consts:[["content",""],[4,"ngIf","ngIfElse"],[1,"loading-container"],[1,"parent"],[1,"media-grid"],[1,"product-figure"],[1,"product-badge"],["height","245px",3,"src","alt"],[1,"pa-1"],[1,"product-details"],[1,"ma-0"],[1,"ma-0","pa-0","text-md"],[1,"mat-text-primary","text-xl"],[1,"strikethrough","mat-text-muted","text-sm"],["mat-icon-button","","color","accent",3,"click"]],template:function(t,i){if(t&1&&p(0,ht,5,0,"ng-container",1)(1,Ct,3,0,"ng-template",null,0,P),t&2){let s=w(2);m("ngIf",i.loading())("ngIfElse",s)}},dependencies:[F,Le,ze,I,be,xe,ve,ot,it,fe,E,ge],styles:[".parent[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-around;margin-top:80px}mat-card[_ngcontent-%COMP%]{width:300px;margin:15px}.product-details[_ngcontent-%COMP%]{display:flex;flex-flow:row;justify-content:space-between;align-items:center}.media-grid[_ngcontent-%COMP%]{text-align:center;overflow:hidden}.product-figure[_ngcontent-%COMP%]{background-color:#fff;height:245px}.product-badge[_ngcontent-%COMP%]{color:#fff;text-align:center;position:absolute;font-weight:700;border-top:30px solid #7CB342;border-bottom:30px solid transparent;border-right:30px solid transparent;border-left:30px solid #7CB342;top:0;left:0;z-index:100}.product-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;transform:rotate(-45deg);top:-18px;left:-25px;white-space:nowrap}.loading-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fffc;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:999;gap:16px;text-align:center;color:#3f51b5;font-weight:500}"]})}}return r})();var ur=[{path:"",component:nt},{path:"new",component:tt}];export{ur as PRODUCT_ROUTES};
