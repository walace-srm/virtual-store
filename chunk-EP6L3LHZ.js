import{a as rt,c as nt,d as it,e as st,f as at,i as P}from"./chunk-ME3JBNPK.js";import{H as et,O as ot,e as Z}from"./chunk-3CJHG7JA.js";import{$b as J,Ac as b,Ad as p,Bb as Y,C as H,Da as v,Eb as R,Fa as M,Fb as x,H as j,Ha as L,Hc as g,Ic as X,L as W,N as $,T as V,Vb as N,Wb as I,Xc as tt,Yb as Q,Z as w,_b as G,ab as f,ba as E,ca as y,ea as O,f as z,ga as _,ha as a,ob as F,pb as T,qb as q,t as u,u as k,x as d,xa as B,xc as K}from"./chunk-MPZ2ENXV.js";var _t=["*",[["mat-toolbar-row"]]],vt=["*","mat-toolbar-row"],It=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275dir=q({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),kt=(()=>{class r{_elementRef=a(M);_platform=a(tt);_document=a(g);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=F({type:r,selectors:[["mat-toolbar"]],contentQueries:function(e,o,n){if(e&1&&Q(n,It,5),e&2){let i;G(i=J())&&(o._toolbarRows=i)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(x(o.color?"mat-"+o.color:""),R("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:vt,decls:2,vars:0,template:function(e,o){e&1&&(N(_t),I(0),I(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}"],encapsulation:2,changeDetection:0})}return r})();var Ht=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=T({type:r});static \u0275inj=y({imports:[p,p]})}return r})();var A;function bt(){if(A===void 0&&(A=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(A=r.trustedTypes.createPolicy("angular#components",{createHTML:c=>c}))}return A}function S(r){return bt()?.createHTML(r)||r}function ct(r){return Error(`Unable to find icon with the name "${r}"`)}function St(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function lt(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function mt(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var l=class{url;svgText;options;svgElement;constructor(c,t,e){this.url=c,this.svgText=t,this.options=e}},ut=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,o,n){this._httpClient=t,this._sanitizer=e,this._errorHandler=n,this._document=o}addSvgIcon(t,e,o){return this.addSvgIconInNamespace("",t,e,o)}addSvgIconLiteral(t,e,o){return this.addSvgIconLiteralInNamespace("",t,e,o)}addSvgIconInNamespace(t,e,o,n){return this._addSvgIconConfig(t,e,new l(o,null,n))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,o,n){let i=this._sanitizer.sanitize(f.HTML,o);if(!i)throw mt(o);let s=S(i);return this._addSvgIconConfig(t,e,new l("",s,n))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,o){return this._addSvgIconSetConfig(t,new l(e,null,o))}addSvgIconSetLiteralInNamespace(t,e,o){let n=this._sanitizer.sanitize(f.HTML,e);if(!n)throw mt(e);let i=S(n);return this._addSvgIconSetConfig(t,new l("",i,o))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(f.RESOURCE_URL,t);if(!e)throw lt(t);let o=this._cachedIconsByUrl.get(e);return o?u(D(o)):this._loadSvgIconFromConfig(new l(t,null)).pipe(w(n=>this._cachedIconsByUrl.set(e,n)),d(n=>D(n)))}getNamedSvgIcon(t,e=""){let o=ht(e,t),n=this._svgIconConfigs.get(o);if(n)return this._getSvgFromConfig(n);if(n=this._getIconConfigFromResolvers(e,t),n)return this._svgIconConfigs.set(o,n),this._getSvgFromConfig(n);let i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):k(ct(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?u(D(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>D(e)))}_getSvgFromIconSetConfigs(t,e){let o=this._extractIconWithNameFromAnySet(t,e);if(o)return u(o);let n=e.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(j(s=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(f.RESOURCE_URL,i.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(h)),u(null)})));return H(n).pipe(d(()=>{let i=this._extractIconWithNameFromAnySet(t,e);if(!i)throw ct(t);return i}))}_extractIconWithNameFromAnySet(t,e){for(let o=e.length-1;o>=0;o--){let n=e[o];if(n.svgText&&n.svgText.toString().indexOf(t)>-1){let i=this._svgElementFromConfig(n),s=this._extractSvgIconFromSet(i,t,n.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(w(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?u(null):this._fetchIcon(t).pipe(w(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,o){let n=t.querySelector(`[id="${e}"]`);if(!n)return null;let i=n.cloneNode(!0);if(i.removeAttribute("id"),i.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(i,o);if(i.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(i),o);let s=this._svgElementFromString(S("<svg></svg>"));return s.appendChild(i),this._setSvgAttributes(s,o)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let o=e.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let e=this._svgElementFromString(S("<svg></svg>")),o=t.attributes;for(let n=0;n<o.length;n++){let{name:i,value:s}=o[n];i!=="id"&&e.setAttribute(i,s)}for(let n=0;n<t.childNodes.length;n++)t.childNodes[n].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[n].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:o}=t,n=o?.withCredentials??!1;if(!this._httpClient)throw St();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let i=this._sanitizer.sanitize(f.RESOURCE_URL,e);if(!i)throw lt(e);let s=this._inProgressUrlFetches.get(i);if(s)return s;let m=this._httpClient.get(i,{responseType:"text",withCredentials:n}).pipe(d(h=>S(h)),$(()=>this._inProgressUrlFetches.delete(i)),V());return this._inProgressUrlFetches.set(i,m),m}_addSvgIconConfig(t,e,o){return this._svgIconConfigs.set(ht(t,e),o),this}_addSvgIconSetConfig(t,e){let o=this._iconSetConfigs.get(t);return o?o.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){let n=this._resolvers[o](e,t);if(n)return Ct(n)?new l(n.url,null,n.options):new l(n,null)}}static \u0275fac=function(e){return new(e||r)(_(X,8),_(Z),_(g,8),_(v))};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function D(r){return r.cloneNode(!0)}function ht(r,c){return r+":"+c}function Ct(r){return!!(r.url&&r.options)}var wt=["*"],dt=new O("MAT_ICON_DEFAULT_OPTIONS"),ft=new O("mat-icon-location",{providedIn:"root",factory:gt});function gt(){let r=a(g),c=r?r.location:null;return{getPathname:()=>c?c.pathname+c.search:""}}var pt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Et=pt.map(r=>`[${r}]`).join(", "),yt=/^url\(['"]?#(.*?)['"]?\)$/,Mt=(()=>{class r{_elementRef=a(M);_iconRegistry=a(ut);_location=a(ft);_errorHandler=a(v);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=z.EMPTY;constructor(){let t=a(new B("aria-hidden"),{optional:!0}),e=a(dt,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let o=t.childNodes[e];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),e.forEach(o=>t.classList.add(o)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((o,n)=>{o.forEach(i=>{n.setAttribute(i.name,`url('${t}#${i.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Et),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let n=0;n<e.length;n++)pt.forEach(i=>{let s=e[n],m=s.getAttribute(i),h=m?m.match(yt):null;if(h){let C=o.get(s);C||(C=[],o.set(s,C)),C.push({name:i,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,o]=this._splitIconName(t);e&&(this._svgNamespace=e),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,e).pipe(W(1)).subscribe(n=>this._setSvgElement(n),n=>{let i=`Error retrieving icon ${e}:${o}! ${n.message}`;this._errorHandler.handleError(new Error(i))})}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=F({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,o){e&2&&(Y("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),x(o.color?"mat-"+o.color:""),R("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",K],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:wt,decls:1,vars:0,template:function(e,o){e&1&&(N(),I(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return r})(),Ft=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=T({type:r});static \u0275inj=y({imports:[p,p]})}return r})();var ve=(()=>{class r{constructor(){this.firestore=a(rt),this.auth=a(et),this.user=L(null),this.cartItems=L([]),this.cartCount=b(()=>this.cartItems().reduce((t,e)=>t+e.quantity,0)),this.cartSubTotal=b(()=>this.cartItems().reduce((t,e)=>t+e.quantity*e.product.price,0)),this.cartTax=b(()=>this.cartSubTotal()*.08),this.cartTotal=b(()=>this.cartSubTotal()+this.cartTax()),ot(this.auth,t=>{this.user.set(t),this.cartSubscription?.unsubscribe(),t?this.loadCartFromFirebase():this.clearLocalCart()})}get userId(){return this.user()?.uid??"anon"}cartCollection(){return it(this.firestore,`carts/${this.userId}/items`)}getItemDoc(t){return at(this.firestore,`carts/${this.userId}/items/${t}`)}loadCartFromFirebase(){this.cartSubscription=nt(this.cartCollection(),{idField:"id"}).subscribe(t=>{this.cartItems.set(t)})}addProduct(t){if(!this.user())return;let o=this.cartItems().findIndex(s=>s.product.id===t.id),n=this.cartItems().find(s=>s.product.id===t.id),i=o>=0?{product:t,quantity:(n?.quantity||0)+1}:{product:t,quantity:1};P(this.getItemDoc(t.id),i)}updateCartQuantity(t){this.user()&&P(this.getItemDoc(t.product.id),t)}removeProduct(t){this.user()&&st(this.getItemDoc(t.id))}clearLocalCart(){this.cartItems.set([]),this.cartSubscription?.unsubscribe()}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{kt as a,Ht as b,Mt as c,Ft as d,ve as e};
