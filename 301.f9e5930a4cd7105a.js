"use strict";(self.webpackChunksaba=self.webpackChunksaba||[]).push([[301],{301:(E,y,r)=>{r.r(y),r.d(y,{AccountModule:()=>D});var d=r(9808),i=r(3075),w=r(6172),c=r(4521),P=r(7806),T=r(6885),h=r(520),x=r(590),t=r(5e3),v=r(8505),U=r(5830),F=r(3429),p=r(1317);let f=(()=>{class n{constructor(e,o,a){this.api=e,this.tokenService=o,this.auth=a}login(e){return this.api.post("account/login",e).pipe((0,v.b)(o=>{this.tokenService.tokenValue=o.token}))}register(e){return this.api.post("account/register",e).pipe((0,v.b)(o=>{this.tokenService.tokenValue=o.token}))}edit(e){return this.api.post("account/edit",e).pipe((0,v.b)(()=>{this.auth.getUser().subscribe()}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(U.s),t.LFG(F.L),t.LFG(p.e))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var _=r(1271),m=r(9224),l=r(7322),C=r(7531),g=r(7423),Z=r(5245),b=r(5899);function q(n,u){1&n&&t._UZ(0,"mat-progress-bar",11)}let N=(()=>{class n{constructor(e,o,a,s){this.accountService=e,this.auth=o,this.router=a,this.snackBar=s,this.form=new i.cw({username:new i.NI(""),password:new i.NI("")}),this.hidePassword=!0,this.sendingRequest=!1}ngOnInit(){}submit(){this.form.valid&&(this.sendingRequest=!0,this.accountService.login(this.form.value).subscribe({next:()=>this.loginSucceeded(),error:e=>this.showError(e)}))}loginSucceeded(){this.snackBar.open("\u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f",void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"primary-snackbar"}),this.auth.user.pipe((0,x.P)(e=>null!==e)).subscribe(()=>{this.router.navigate(["/course/mine"]),this.sendingRequest=!1})}showError(e){var o,a;if(e instanceof h.UA){const s=null!==(a=null===(o=e.error)||void 0===o?void 0:o.message)&&void 0!==a?a:"\u062e\u0637\u0627 \u062f\u0631 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631";this.snackBar.open(s,void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"warn-snackbar"})}this.sendingRequest=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(p.e),t.Y36(c.F0),t.Y36(_.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:26,vars:4,consts:[[1,"title"],[1,"outer-form-content"],["autocomplete","on",1,"form-content",3,"formGroup","ngSubmit"],[1,"form-fields"],["appearance","standard"],["type","text","matInput","","formControlName","username","required","","autocomplete","username"],["matInput","","formControlName","password","required","","autocomplete","current-password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary"],["routerLink","/account/register"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title")(2,"div",0),t._uU(3,"\u0648\u0631\u0648\u062f \u0628\u0647 \u0635\u0628\u0627"),t.qZA()(),t.TgZ(4,"mat-card-content",1)(5,"form",2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(6,"div",3)(7,"mat-form-field",4)(8,"mat-label"),t._uU(9,"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"\u06af\u0630\u0631\u0648\u0627\u0698\u0647"),t.qZA(),t._UZ(14,"input",6),t.TgZ(15,"button",7),t.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),t.TgZ(16,"mat-icon"),t._uU(17),t.qZA()()()(),t.TgZ(18,"button",8),t._uU(19,"\u0648\u0631\u0648\u062f"),t.qZA()(),t.TgZ(20,"small"),t._uU(21," \u0647\u0646\u0648\u0632 \u0639\u0636\u0648 \u0646\u0634\u062f\u0647\u200c\u0627\u06cc\u062f\u061f "),t.TgZ(22,"a",9),t._uU(23,"\u062b\u0628\u062a \u0646\u0627\u0645"),t.qZA()()(),t.TgZ(24,"mat-card-footer"),t.YNc(25,q,1,0,"mat-progress-bar",10),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(9),t.Q6J("type",o.hidePassword?"password":"text"),t.xp6(3),t.Oqu(o.hidePassword?"visibility_off":"visibility"),t.xp6(8),t.Q6J("ngIf",o.sendingRequest))},directives:[m.a8,m.n5,m.dn,i._Y,i.JL,i.sg,l.KE,l.hX,C.Nt,i.Fj,i.JJ,i.u,i.Q7,g.lW,l.R9,Z.Hw,c.yS,m.rt,d.O5,b.pW],styles:["mat-card[_ngcontent-%COMP%]{width:30rem}.title[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:2rem}.outer-form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2rem}.form-fields[_ngcontent-%COMP%]{align-self:stretch;display:flex;flex-direction:column}"]}),n})();var I=r(4004),O=r(226);function J(n,u){if(1&n&&t._UZ(0,"div",20),2&n){const e=t.oxw(2);t.Udp("background-image","url("+e.avatar+")")}}function M(n,u){1&n&&(t.TgZ(0,"mat-icon",21),t._uU(1,"account_circle"),t.qZA())}function S(n,u){if(1&n&&(t.TgZ(0,"p")(1,"span"),t._uU(2,"\u062a\u0627\u0631\u06cc\u062e \u0639\u0636\u0648\u06cc\u062a:"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"async"),t.qZA()()),2&n){const e=t.oxw(3);let o;t.xp6(4),t.hij(" ",null==(o=t.lcZ(5,1,e.auth.user))||null==o.registraionDate?null:o.registraionDate.toLocaleDateString("fa-Ir",e.dateTimeOptions),"")}}function R(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"p")(2,"span"),t._uU(3,"\u0627\u06cc\u0645\u06cc\u0644:"),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"async"),t.qZA()(),t.YNc(7,S,6,3,"p",0),t.ALo(8,"async"),t.TgZ(9,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).showForm=!0}),t._uU(10,"\u0648\u06cc\u0631\u0627\u06cc\u0634"),t.qZA()()}if(2&n){const e=t.oxw(2);let o,a;t.xp6(5),t.hij(" ",null==(o=t.lcZ(6,2,e.auth.user))?null:o.email,""),t.xp6(2),t.Q6J("ngIf",null==(a=t.lcZ(8,4,e.auth.user))?null:a.registraionDate)}}function k(n,u){1&n&&t._UZ(0,"mat-progress-bar",23)}function L(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"div",1),t.YNc(3,J,1,2,"div",2),t.YNc(4,M,2,0,"mat-icon",3),t.TgZ(5,"label",4)(6,"a",5)(7,"mat-icon"),t._uU(8,"add_a_photo"),t.qZA()()(),t.TgZ(9,"input",6),t.NdJ("change",function(a){return t.CHM(e),t.oxw().avatarChanged(a)}),t.qZA()(),t.TgZ(10,"mat-card-title"),t._uU(11),t.ALo(12,"async"),t.qZA(),t.TgZ(13,"mat-card-subtitle")(14,"bdo",7),t._uU(15),t.ALo(16,"async"),t.qZA()()(),t.TgZ(17,"mat-card-content",8)(18,"form",9),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(19,"div",10)(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),t.qZA(),t._UZ(23,"input",12),t.TgZ(24,"mat-hint"),t._uU(25,"\u062d\u062f\u0627\u0642\u0644 \u06f3 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631"),t.qZA()(),t.TgZ(26,"mat-form-field",11)(27,"mat-label"),t._uU(28,"\u0646\u0627\u0645"),t.qZA(),t._UZ(29,"input",13),t.qZA(),t.TgZ(30,"mat-form-field",11)(31,"mat-label"),t._uU(32,"\u0627\u06cc\u0645\u06cc\u0644"),t.qZA(),t._UZ(33,"input",14),t.qZA(),t.TgZ(34,"mat-form-field",15)(35,"mat-label"),t._uU(36,"\u06af\u0630\u0631\u0648\u0627\u0698\u0647 \u062c\u062f\u06cc\u062f"),t.qZA(),t._UZ(37,"input",16),t.TgZ(38,"button",17),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return a.hidePassword=!a.hidePassword}),t.TgZ(39,"mat-icon"),t._uU(40),t.qZA()(),t.TgZ(41,"mat-hint"),t._uU(42,"\u062d\u062f\u0627\u0642\u0644 \u06f6 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631"),t.qZA()()(),t.TgZ(43,"button",18),t._uU(44,"\u062b\u0628\u062a"),t.qZA()(),t.YNc(45,R,11,6,"div",0),t.qZA(),t.TgZ(46,"mat-card-footer"),t.YNc(47,k,1,0,"mat-progress-bar",19),t.qZA()()}if(2&n){const e=t.oxw();let o,a;t.xp6(3),t.Q6J("ngIf",e.avatar),t.xp6(1),t.Q6J("ngIf",!e.avatar),t.xp6(7),t.hij(" ",null==(o=t.lcZ(12,12,e.auth.user))?null:o.name," "),t.xp6(4),t.hij("@",null==(a=t.lcZ(16,14,e.auth.user))?null:a.username,""),t.xp6(3),t.Q6J("formGroup",e.form)("hidden",!e.showForm),t.xp6(1),t.ekj("show",e.showForm),t.xp6(18),t.Q6J("type",e.hidePassword?"password":"text"),t.xp6(3),t.Oqu(e.hidePassword?"visibility_off":"visibility"),t.xp6(5),t.Q6J("ngIf",!e.showForm),t.xp6(2),t.Q6J("ngIf",e.sendingRequest)}}let Y=(()=>{class n{constructor(e,o,a,s){this.auth=e,this.accountService=o,this.router=a,this.snackBar=s,this.loaded=this.auth.user.pipe((0,I.U)(()=>!0)),this.form=new i.cw({username:new i.NI(""),name:new i.NI(""),email:new i.NI(""),newPassword:new i.NI("")}),this.avatar=null,this.showForm=!1,this.hidePassword=!0,this.sendingRequest=!1,this.dateTimeOptions={year:"numeric",month:"long",day:"numeric"},this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.auth.user.subscribe(e=>{this.setFormValues(e)}))}setFormValues(e){null===e?this.router.navigate(["/account/login"]):(this.form.setValue({username:e.username,name:e.name,email:e.email,newPassword:""}),this.avatar=e.avatar)}ngOnDestroy(){for(const e of this.subscriptions)e.unsubscribe()}submit(){if(this.form.valid){const e={username:this.form.value.username,name:this.form.value.name,email:this.form.value.email,newPassword:this.form.value.newPassword||void 0,avatar:this.avatar};this.sendingRequest=!0,this.accountService.edit(e).subscribe({next:()=>{this.snackBar.open("\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f",void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"primary-snackbar"}),this.sendingRequest=!1},error:o=>{var a,s;if(o instanceof h.UA){const A=null!==(s=null===(a=o.error)||void 0===a?void 0:a.message)&&void 0!==s?s:"\u062e\u0637\u0627 \u062f\u0631 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631";this.snackBar.open(A,void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"warn-snackbar"})}this.sendingRequest=!1}})}}avatarChanged(e){var o;const a=new FileReader,s=null===(o=null==e?void 0:e.target)||void 0===o?void 0:o.files;if(s){const A=s.item(0);a.readAsDataURL(A),a.onload=()=>{this.avatar=a.result,this.form.patchValue({avatar:a.result})}}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.e),t.Y36(f),t.Y36(c.F0),t.Y36(_.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-profile"]],decls:2,vars:3,consts:[[4,"ngIf"],["mat-card-avatar","",1,"profile-photo-container"],["class","profile-photo",3,"background-image",4,"ngIf"],["class","profile-photo empty-profile-photo",4,"ngIf"],["for","avatar"],["mat-fab","","color","primary",1,"profile-photo-edit-button"],["accept","image/png,image/jpeg","id","avatar","name","avatar","type","file","hidden","",3,"change"],["dir","ltr"],[1,"outer-form-content"],["autocomplete","off",1,"form-content",3,"formGroup","hidden","ngSubmit"],[1,"form-fields"],["appearance","standard"],["type","text","matInput","","formControlName","username","required","","minlength","3","maxlength","32"],["type","text","matInput","","formControlName","name","required","","maxlength","32"],["type","email","matInput","","formControlName","email","required","","maxlength","32"],["appearance","standard","floatLabel","always"],["matInput","","placeholder","\u0628\u062f\u0648\u0646 \u062a\u063a\u06cc\u06cc\u0631","formControlName","newPassword","autocomplete","new-password","minlength","6","maxlength","32",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary"],["mode","indeterminate",4,"ngIf"],[1,"profile-photo"],[1,"profile-photo","empty-profile-photo"],["type","button","mat-raised-button","","color","primary",3,"click"],["mode","indeterminate"]],template:function(e,o){1&e&&(t.YNc(0,L,48,16,"mat-card",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.loaded))},directives:[d.O5,m.a8,m.dk,m.kc,Z.Hw,g.zs,m.n5,m.$j,O.Lv,m.dn,i._Y,i.JL,i.sg,l.KE,l.hX,C.Nt,i.Fj,i.JJ,i.u,i.Q7,i.wO,i.nD,l.bx,g.lW,l.R9,m.rt,b.pW],pipes:[d.Ov],styles:["mat-card[_ngcontent-%COMP%]{width:30rem}.profile-photo-container[_ngcontent-%COMP%]{position:relative;width:8rem;height:8rem;margin-left:1rem;margin-bottom:2rem}.profile-photo[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;border-radius:50%}.empty-profile-photo[_ngcontent-%COMP%]{font-size:8rem;transform:scale(1.2)}.profile-photo-edit-button[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;right:0;background-color:#404040cc;transition:opacity .2s;opacity:0}.profile-photo-edit-button[_ngcontent-%COMP%]:hover{opacity:1}.profile-photo-edit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:4rem;width:100%;height:100%}mat-card-title[_ngcontent-%COMP%]{margin-top:1rem}.form-content[_ngcontent-%COMP%]:not([hidden]){display:flex;flex-direction:column;align-items:flex-start;gap:2rem}.form-fields[_ngcontent-%COMP%]{align-self:stretch;display:flex;flex-direction:column}.form-fields.show[_ngcontent-%COMP%]{animation:fade-in .5s ease-in}@keyframes fade-in{0%{opacity:0}to{opacity:1}}"]}),n})();function B(n,u){1&n&&t._UZ(0,"mat-progress-bar",13)}const z=[{path:"",component:T.P,children:[{path:"login",component:N},{path:"register",component:(()=>{class n{constructor(e,o,a,s){this.accountService=e,this.auth=o,this.router=a,this.snackBar=s,this.form=new i.cw({username:new i.NI(""),name:new i.NI(""),email:new i.NI(""),password:new i.NI("")}),this.hidePassword=!0,this.sendingRequest=!1}ngOnInit(){}submit(){this.form.valid&&(this.sendingRequest=!0,this.accountService.register(this.form.value).subscribe({next:()=>this.registerSucceeded(),error:e=>this.showError(e)}))}registerSucceeded(){this.snackBar.open("\u062b\u0628\u062a \u0646\u0627\u0645 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"primary-snackbar"}),this.auth.user.pipe((0,x.P)(e=>null!==e)).subscribe(()=>{this.router.navigate(["/course/mine"]),this.sendingRequest=!1})}showError(e){var o,a;if(e instanceof h.UA){const s=null!==(a=null===(o=e.error)||void 0===o?void 0:o.message)&&void 0!==a?a:"\u062e\u0637\u0627 \u062f\u0631 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631";this.snackBar.open(s,void 0,{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center",panelClass:"warn-snackbar"})}this.sendingRequest=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(p.e),t.Y36(c.F0),t.Y36(_.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:38,vars:4,consts:[[1,"title"],[1,"outer-form-content"],["autocomplete","off",1,"form-content",3,"formGroup","ngSubmit"],[1,"form-fields"],["appearance","standard"],["type","text","matInput","","formControlName","username","required","","minlength","3","maxlength","32"],["type","text","matInput","","formControlName","name","required","","maxlength","32","autocomplete","name"],["type","email","matInput","","formControlName","email","required","","maxlength","32","autocomplete","email"],["matInput","","formControlName","password","required","","autocomplete","new-password","minlength","6","maxlength","32",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary"],["routerLink","/account/login"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title")(2,"div",0),t._uU(3,"\u062b\u0628\u062a \u0646\u0627\u0645 \u062f\u0631 \u0635\u0628\u0627"),t.qZA()(),t.TgZ(4,"mat-card-content",1)(5,"form",2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(6,"div",3)(7,"mat-form-field",4)(8,"mat-label"),t._uU(9,"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),t.qZA(),t._UZ(10,"input",5),t.TgZ(11,"mat-hint"),t._uU(12,"\u062d\u062f\u0627\u0642\u0644 \u06f3 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631"),t.qZA()(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"\u0646\u0627\u0645"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"mat-form-field",4)(18,"mat-label"),t._uU(19,"\u0627\u06cc\u0645\u06cc\u0644"),t.qZA(),t._UZ(20,"input",7),t.qZA(),t.TgZ(21,"mat-form-field",4)(22,"mat-label"),t._uU(23,"\u06af\u0630\u0631\u0648\u0627\u0698\u0647"),t.qZA(),t._UZ(24,"input",8),t.TgZ(25,"button",9),t.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),t.TgZ(26,"mat-icon"),t._uU(27),t.qZA()(),t.TgZ(28,"mat-hint"),t._uU(29,"\u062d\u062f\u0627\u0642\u0644 \u06f6 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631"),t.qZA()()(),t.TgZ(30,"button",10),t._uU(31,"\u062b\u0628\u062a \u0646\u0627\u0645"),t.qZA()(),t.TgZ(32,"small"),t._uU(33," \u0642\u0628\u0644\u0627\u064b \u0639\u0636\u0648 \u0634\u062f\u0647\u200c\u0627\u06cc\u062f\u061f "),t.TgZ(34,"a",11),t._uU(35,"\u0648\u0631\u0648\u062f"),t.qZA()()(),t.TgZ(36,"mat-card-footer"),t.YNc(37,B,1,0,"mat-progress-bar",12),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(19),t.Q6J("type",o.hidePassword?"password":"text"),t.xp6(3),t.Oqu(o.hidePassword?"visibility_off":"visibility"),t.xp6(10),t.Q6J("ngIf",o.sendingRequest))},directives:[m.a8,m.n5,m.dn,i._Y,i.JL,i.sg,l.KE,l.hX,C.Nt,i.Fj,i.JJ,i.u,i.Q7,i.wO,i.nD,l.bx,g.lW,l.R9,Z.Hw,c.yS,m.rt,d.O5,b.pW],styles:["mat-card[_ngcontent-%COMP%]{width:30rem}.title[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:2rem}.outer-form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2rem}.form-fields[_ngcontent-%COMP%]{align-self:stretch;display:flex;flex-direction:column}"]}),n})()},{path:"profile",canActivate:[P.G],component:Y},{path:"**",redirectTo:"/"}]}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(z)],c.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[f],imports:[[d.ez,i.UX,w.q,j]]}),n})()}}]);