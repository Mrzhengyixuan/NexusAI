"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[928],{83510:function(ce,k,a){a.d(k,{LK:function(){return D},bs:function(){return d},go:function(){return G},uy:function(){return N}});var U=a(15009),u=a.n(U),Z=a(99289),c=a.n(Z),j=a(47520),M="/v1/apps/apps_list",y="/v1/agent/agent_delete/",l="/v1/workflow/workflow_app_delete/",K="/v1/vector/delete_dataset/",L="/v1/skill/delete_skill_by_app_id/",B="/v1/apps/apps_create",F="/v1/apps/app_update/",G=function(){var T=c()(u()().mark(function O(v){var g;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,j.ZP)("".concat(M),{method:"GET",data:v});case 2:return g=o.sent,o.abrupt("return",g);case 4:case"end":return o.stop()}},O)}));return function(v){return T.apply(this,arguments)}}(),D=function(){var T=c()(u()().mark(function O(v){var g;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(v),o.next=3,v.mode;case 3:if(o.t0=o.sent,o.t0!=1){o.next=8;break}o.t1=(0,j.ZP)("".concat(y).concat(v.app_id),{method:"DELETE"}),o.next=9;break;case 8:o.t1=v.mode==2?(0,j.ZP)("".concat(l).concat(v.app_id),{method:"DELETE"}):v.mode==3?(0,j.ZP)("".concat(K).concat(v.app_id),{method:"DELETE"}):(0,j.ZP)("".concat(L).concat(v.app_id),{method:"DELETE",data:{is_soft:1}});case 9:return g=o.t1,o.abrupt("return",g);case 11:case"end":return o.stop()}},O)}));return function(v){return T.apply(this,arguments)}}(),N=function(){var T=c()(u()().mark(function O(v){var g;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,j.ZP)("".concat(B),{method:"POST",data:v});case 2:return g=o.sent,o.abrupt("return",g);case 4:case"end":return o.stop()}},O)}));return function(v){return T.apply(this,arguments)}}(),d=function(){var T=c()(u()().mark(function O(v){var g;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,j.ZP)("".concat(F).concat(v.app_id),{method:"PUT",data:v});case 2:return g=o.sent,o.abrupt("return",g);case 4:case"end":return o.stop()}},O)}));return function(v){return T.apply(this,arguments)}}()},72406:function(ce,k,a){var U=a(58533),u=a(99702),Z=a(74330),c=a(85893),j=function(y){var l=y.children,K=y.elid,L=y.dataLength,B=y.ishasMore,F=y.upSlide,G=y.isFooter,D=y.pageNumber,N=D===void 0?2:D;return(0,c.jsxs)("div",{className:"h-full flex flex-col",children:[(0,c.jsx)(U.Z,{dataLength:L,scrollableTarget:K,next:F,hasMore:B,loader:(0,c.jsx)("div",{className:"flex justify-center h-[60px] items-center",children:N>1?(0,c.jsx)(Z.Z,{}):(0,c.jsx)(c.Fragment,{})}),children:l}),G&&(0,c.jsx)("div",{className:"mt-[30px] flex-1 flex ",style:{alignItems:"flex-end"},children:(0,c.jsx)(u.Z,{className:"relative"})})]})};k.Z=j},21446:function(ce,k,a){var U=a(15009),u=a.n(U),Z=a(97857),c=a.n(Z),j=a(99289),M=a.n(j),y=a(5574),l=a.n(y),K=a(83510),L=a(32332),B=a(35312),F=a(55102),G=a(17788),D=a(67294),N=a(94840),d=a(85893),T=F.Z.TextArea,O=function(g){var z=g.setIsModalOpen,o=g.isModalOpen,X=g.transformData,i=g.CreationType,oe=g.setcreationType,Ae=g.ModalType,E=(0,B.useIntl)(),h=(0,D.useState)(""),V=l()(h,2),je=V[0],ke=V[1],Me=(0,D.useState)(""),ye=l()(Me,2),Ze=ye[0],Le=ye[1],Re=(0,D.useState)({id:1,icon:"/icons/headportrait/Android.svg"}),Ce=l()(Re,2),e=Ce[0],Ue=Ce[1];(0,D.useEffect)(function(){},[]);var Be=function(S){ke(S.target.value)},We=function(S){Le(S.target.value)},de=function(){var P=M()(u()().mark(function S(){var Y,ue;return u()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(Y={name:je,mode:i.apps_mode,description:Ze,icon:JSON.stringify(e.id),icon_background:""},i.apps_mode!=2){b.next=8;break}return b.next=4,(0,K.uy)(Y);case 4:ue=b.sent,ue.code===0&&(z(!1),De(ue.data.app_id)),b.next=10;break;case 8:(0,L.Go)("SET",c()(c()({},Y),{},{type:!1})),De();case 10:case"end":return b.stop()}},S)}));return function(){return P.apply(this,arguments)}}(),Ee=function(S){X.map(function(Y){Y.name==S.name&&(console.log(Y,"item"),oe(Y))})},De=function(S){S?B.history.push("/".concat(i.path,"?app_id=").concat(S,"&&type=false")):B.history.push("/".concat(i.path,"?type=false"))};return(0,d.jsx)(G.Z,{title:E.formatMessage({id:"creation.addnewapp"}),open:o,okText:E.formatMessage({id:"creation"}),onOk:de,onCancel:function(){return z(!1)},okButtonProps:{disabled:je===""},width:820,children:(0,d.jsxs)("div",{className:"pb-1",children:[Ae?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-medium text-xs mb-4 mt-8",children:E.formatMessage({id:"creation.appntype"})}),(0,d.jsx)("div",{className:"flex items-center justify-around gap-y-[24px]",children:X&&X.map(function(P){return(0,d.jsxs)("div",{className:"w-44 h-24 rounded-lg text-center bg-[url('/images/bg.png')] bg-[length:176px_96px] cursor-pointer",style:{border:P.apps_mode===i.apps_mode?"1px solid #1B64F3":"1px solid #eeeeee"},onClick:function(){Ee(P)},children:[(0,d.jsx)("div",{className:"flex items-center justify-center mt-5 mb-2.5",children:(0,d.jsx)("img",{className:"w-6 h-6",src:P.signicon,alt:""})}),(0,d.jsx)("div",{className:"text-p[#213044] text-base font-normal",children:P.name})]})})})]}):null,(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsxs)("p",{className:"text-xs mt-5",children:[i.apps_mode==1?E.formatMessage({id:"creation.agent"}):i.apps_mode==2?E.formatMessage({id:"creation.workflow"}):i.apps_mode==3?E.formatMessage({id:"creation.repository"}):E.formatMessage({id:"creation.skill"}),E.formatMessage({id:"creation.appiconname"})]}),(0,d.jsxs)("div",{className:"flex items-center justify-around",children:[(0,d.jsx)(N.Z,{CardData:e,setCardData:Ue}),(0,d.jsx)(F.Z,{showCount:!0,maxLength:20,placeholder:E.formatMessage({id:"creation.placeholder.appname"}),onChange:Be})]})]}),(0,d.jsxs)("div",{className:"mb-5 text-xs",children:[(0,d.jsxs)("p",{children:[i.apps_mode==1?E.formatMessage({id:"creation.agent"}):i.apps_mode==2?E.formatMessage({id:"creation.workflow"}):i.apps_mode==3?E.formatMessage({id:"creation.repository"}):E.formatMessage({id:"creation.skill"}),E.formatMessage({id:"creation.appdescribe"})]}),(0,d.jsx)(T,{showCount:!0,maxLength:100,rows:4,placeholder:E.formatMessage({id:"creation.placeholder.appdescribe"}),onChange:We})]})]})]})})};k.Z=O},78697:function(ce,k,a){var U=a(67294),u=a(85893),Z=function(j){var M=j.Image,y=j.icon;return(0,U.useEffect)(function(){},[]),(0,u.jsxs)("div",{className:"w-[42px] h-[42px] bg-[#F4F8F1] rounded-md flex items-center justify-center relative",children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:M,alt:""})}),y?(0,u.jsx)("div",{className:"absolute bottom-[-3px] right-[-3px] w-4 h-4 bg-white rounded-sm flex items-center justify-center shadow-[0_0_4px_-0_rgba(0,0,0,0.2)]",children:(0,u.jsx)("img",{className:" w-[12px] h-[12px]",src:y,alt:""})}):null]})};k.Z=Z},94840:function(ce,k,a){var U=a(97857),u=a.n(U),Z=a(32332),c=a(55241),j=a(67294),M=a(85893),y=function(K){var L=K.CardData,B=K.setCardData;(0,j.useEffect)(function(){},[]);var F=function(){return(0,M.jsx)("div",{className:"flex justify-start items-center flex-wrap w-40",children:(0,Z.s9)("all").map(function(N){return(0,M.jsx)("div",{className:"w-8 h-8 bg-[#F4F8F1] rounded-lg mr-1.5 flex items-center justify-center m-0.5 cursor-pointer",onClick:function(){G(N)},children:(0,M.jsx)("img",{src:N.image,alt:""})})})})},G=function(N){B(u()(u()({},L),{},{icon:N.image,id:N.id}))};return(0,M.jsx)(c.Z,{content:F,trigger:"click",placement:"bottomLeft",children:(0,M.jsx)("div",{className:"w-8 h-8 bg-[#F4F8F1] rounded-lg mr-1.5 flex items-center justify-center m-0.5 cursor-pointer",children:(0,M.jsx)("img",{src:(0,Z.s9)("single",L.id?L.id:L.icon),alt:""})})})};k.Z=y},91375:function(ce,k,a){a.r(k),a.d(k,{default:function(){return Y}});var U=a(97857),u=a.n(U),Z=a(15009),c=a.n(Z),j=a(99289),M=a.n(j),y=a(5574),l=a.n(y),K=a(40110),L=a(47389),B=a(82061),F=a(43425),G=a(5154),D=a(55102),N=a(17788),d=a(2453),T=a(78045),O=a(74330),v=a(71230),g=a(15746),z=a(4393),o=a(55241),X=a(14726),i=a(67294),oe=a(83510),Ae=a(78697),E=a(72406),h=a(32332),V=a(35312),je=a(27484),ke=a.n(je),Me=a(21446),ye=a(47520),Ze=a(42237),Le=a(33914),Re=a(57546),Ce=a(46822),e=a(85893),Ue=function(n){var b=n.optionsModalId,C=(0,V.useIntl)(),w=D.Z.TextArea,$=[{name:C.formatMessage({id:"creation.agent"}),path:"Agents",icon:"/icons/creation/agent.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg",unselected:"/icons/creation/unselectedrobot.svg",apps_mode:1},{name:C.formatMessage({id:"creation.workflow"}),path:"workspace/workflow",icon:"/icons/creation/gongzuoliu1.svg",pitchicon:"/icons/creation/pitchgongzuoliu.svg",signicon:"/icons/creation/signgongzuoliu.svg",unselected:"/icons/creation/unselectedprocess.svg",apps_mode:2},{name:C.formatMessage({id:"creation.repository"}),path:"Createkb",icon:"/icons/creation/jienng1.svg",pitchicon:"/icons/creation/pitchzhishik.svg",signicon:"/icons/creation/signzhishik.svg",unselected:"/icons/creation/unselectedrepository.svg",apps_mode:3},{name:C.formatMessage({id:"creation.skill"}),path:"Skill",icon:"/icons/creation/zhishik1.svg",pitchicon:"/icons/creation/pitchskill.svg",signicon:"/icons/creation/signskill.svg",unselected:"/icons/creation/unselectedskill.svg",apps_mode:4}],Ke=(0,i.useState)(!1),pe=l()(Ke,2),q=pe[0],ie=pe[1],Fe=(0,i.useState)({name:C.formatMessage({id:"creation.agent"}),path:"Agents",icon:"/icons/creation/agent.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg",apps_mode:1}),me=l()(Fe,2),fe=me[0],ee=me[1],Ge=(0,i.useState)(""),he=l()(Ge,2),Ne=he[0],Oe=he[1],ze=(0,i.useState)(""),ve=l()(ze,2),be=ve[0],Se=ve[1],Je=(0,i.useState)({id:12,icon:"\u{1F612}"}),ge=l()(Je,2),p=ge[0],Ve=ge[1];(0,i.useEffect)(function(){});var Te=function(x){var _=$.filter(function(re){return re.apps_mode==x});ie(!0),ee(_[0]?_[0]:{name:"Agent",path:"Agents",icon:"/icons/creation/agent.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg",apps_mode:1})},Ye=function(){ie(!1)},He=function(x){V.history.push("/".concat(fe.path,"?app_id=").concat(x,"&type=false"))},$e=function(x){$.map(function(_){_.name==x.target.value&&(console.log(_,"item"),ee(_))})},aa=function(x){Oe(x.target.value)},Qe=function(x){Se(x.target.value)},ta=function(){var m=M()(c()().mark(function x(){var _;return c()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,(0,oe.uy)({name:Ne,mode:fe.apps_mode,description:be,icon:p.icon,icon_background:""});case 2:_=H.sent,_.code===0&&(ie(!1),He(_.data.app_id));case 4:case"end":return H.stop()}},x)}));return function(){return m.apply(this,arguments)}}(),Pe=(0,i.useState)(!1),ae=l()(Pe,2),Xe=ae[0],te=ae[1],qe=function(){console.log("Import cancelled"),te(!1)},ea=(0,i.memo)(function(){var m=(0,i.useState)([]),x=l()(m,2),_=x[0],re=x[1],H={icon:(0,e.jsx)(Le.Z,{}),title:C.formatMessage({id:"workflow.uploadFileText",defaultMessage:"Drag file here, or click to upload"}),description:"Upload the exported workflow yml file",accept:".yml,.yaml",fieldProps:{listType:"text",name:"file",multiple:!0,maxCount:1,headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},action:ye._n+"/v1/workflow/import",beforeUpload:function(R){return re([R]),!1}},onChange:function(R){var W=R.file.status;if(W==="done"){var I;(R==null||(I=R.file)===null||I===void 0||(I=I.response)===null||I===void 0?void 0:I.code)===0?(d.ZP.success(C.formatMessage({id:"workflow.importSuccess"})),te(!1)):d.ZP.error(C.formatMessage({id:"workflow.importFailed"}))}else W==="error"&&d.ZP.error("".concat(R.file.name," file upload failed."))}},we=function(){if(_.length>0){var R=new FormData;R.append("file",_[0]),(0,Ze.Uq)(R).then(function(W){if((W==null?void 0:W.code)==0){var I;V.history.push("/workspace/workflow?app_id=".concat(W==null||(I=W.data)===null||I===void 0?void 0:I.app_id,"&type=false"))}})}te(!1)};return(0,e.jsx)(N.Z,{title:C.formatMessage({id:"creation.importWorkflow"}),open:Xe,onOk:we,okButtonProps:{loading:!1},okText:C.formatMessage({id:"workflow.import"}),onCancel:qe,children:(0,e.jsx)(Ce.Z,u()({name:"file"},H))})});return(0,e.jsxs)(z.Z,{style:{minWidth:300,marginTop:10,backgroundColor:"#EFF0F2"},bodyStyle:{height:"100%"},hoverable:!1,children:[(0,e.jsx)(ea,{}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"174px"},children:[b===6?(0,e.jsxs)("div",{className:"flex justify-around items-start h-full w-full ",style:{flexDirection:"column",height:"calc(100% + 24px)"},children:[$.map(function(m,x){return(0,e.jsxs)("div",{className:"hover:bg-[#fff] w-full rounded-lg h-8 cursor-pointer flex items-center",onClick:function(){return Te(m.apps_mode)},children:[(0,e.jsx)("img",{src:m.icon,style:{width:"16px",height:"16px",margin:"0 5px 0 10px"},alt:""}),(0,e.jsxs)("div",{style:{color:"#213044"},children:[C.formatMessage({id:"creation.new"}),m.name]})]})}),(0,e.jsxs)("div",{onClick:function(){return te(!0)},className:"hover:bg-[#fff] w-full rounded-lg h-8 cursor-pointer flex items-center text-[#213044]",children:[(0,e.jsx)(Re.Z,{className:"size-4  mr-[5px] ml-[10px]"})," ",C.formatMessage({id:"creation.importWorkflow"})]})]}):null,(0,e.jsx)("div",{className:" flex-wrap h-full text-[#999] text-[12px] cursor-pointer",style:{width:b===6?"50%":"100%"},onClick:function(){return Te(b)},children:b===6?(0,e.jsxs)("div",{className:"mt-[62px]",children:[(0,e.jsx)("div",{className:"h-[42px] flex justify-center",children:(0,e.jsx)("img",{src:"/icons/creation/add.svg",alt:""})}),(0,e.jsxs)("div",{className:"svg-container w-full text-center",children:[" ",C.formatMessage({id:"creation.addcreation"})]})]}):$.filter(function(m,x){return m.apps_mode==b}).map(function(m,x){return(0,e.jsxs)("div",{className:"mt-[50px]",children:[(0,e.jsx)("div",{className:"h-[42px] flex justify-center mb-[10px]",children:(0,e.jsx)("img",{src:m.unselected?m.unselected:"/icons/creation/add.svg",alt:""})}),(0,e.jsxs)("div",{className:"svg-container w-full text-center",children:[C.formatMessage({id:"creation.new"}),m.name?m.name:C.formatMessage({id:"creation.adhibition"})]})]})})})]}),(0,e.jsx)(Me.Z,{setIsModalOpen:ie,isModalOpen:q,ModalType:!0,CreationType:fe,setcreationType:ee,transformData:$})]})},Be=Ue,We=a(94840),de=a(29608),Ee=G.Z.Text,De=G.Z.Paragraph,P=D.Z.TextArea,S=function(){var n=(0,V.useIntl)(),b=(0,i.useState)(null),C=l()(b,2),w=C[0],$=C[1],Ke=(0,i.useState)(1),pe=l()(Ke,2),q=pe[0],ie=pe[1],Fe=(0,i.useState)(!1),me=l()(Fe,2),fe=me[0],ee=me[1],Ge=(0,i.useState)(""),he=l()(Ge,2),Ne=he[0],Oe=he[1],ze=(0,i.useState)(""),ve=l()(ze,2),be=ve[0],Se=ve[1],Je=(0,i.useState)(null),ge=l()(Je,2),p=ge[0],Ve=ge[1],Te=(0,i.useState)(!1),Ye=l()(Te,2),He=Ye[0],$e=Ye[1],aa=(0,i.useState)({name:"Agent",path:n.formatMessage({id:"creation.agent"}),icon:"/icons/creation/agent.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg",apps_mode:1}),Qe=l()(aa,2),ta=Qe[0],Pe=Qe[1],ae=[{apps_mode:6,name:n.formatMessage({id:"creation.all"}),path:"Agents",icon:"/icons/creation/quanbu.svg",unselected:"/icons/creation/quanbu.svg",pitchicon:"/icons/creation/pitchquanbu.svg",signicon:"/icons/creation/pitchquanbu.svg"},{apps_mode:1,name:n.formatMessage({id:"creation.agent"}),path:"Agents",icon:"/icons/creation/agent.svg",unselected:"/icons/creation/unselectedrobot.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg"},{apps_mode:2,name:n.formatMessage({id:"creation.workflow"}),path:"workspace/workflow",icon:"/icons/creation/gongzuoliu1.svg",unselected:"/icons/creation/unselectedprocess.svg",pitchicon:"/icons/creation/pitchgongzuoliu.svg",signicon:"/icons/creation/signgongzuoliu.svg"},{apps_mode:3,name:n.formatMessage({id:"creation.repository"}),path:"Createkb",icon:"/icons/creation/zhishik1.svg",unselected:"/icons/creation/unselectedrepository.svg",pitchicon:"/icons/creation/pitchzhishik.svg",signicon:"/icons/creation/signzhishik.svg"},{apps_mode:4,name:n.formatMessage({id:"creation.skill"}),path:"Skill",icon:"/icons/creation/jienng1.svg",unselected:"/icons/creation/unselectedskill.svg",pitchicon:"/icons/creation/pitchskill.svg",signicon:"/icons/creation/signskill.svg"}],Xe=(0,i.useState)(6),te=l()(Xe,2),qe=te[0],ea=te[1],m=(0,i.useState)(!1),x=l()(m,2),_=x[0],re=x[1],H=(0,i.useState)(""),we=l()(H,2),se=we[0],R=we[1],W=(0,i.useState)(!1),I=l()(W,2),ua=I[0],sa=I[1],pa=(0,i.useState)([{apps_mode:1,name:n.formatMessage({id:"creation.agent"}),path:"Agents",readOnlypath:"ReadOnlyAgent"},{apps_mode:2,name:n.formatMessage({id:"creation.workflow"}),path:"workspace/workflow"},{apps_mode:3,name:n.formatMessage({id:"creation.repository"}),path:"createkb"},{apps_mode:4,name:n.formatMessage({id:"creation.skill"}),path:"Skill",readOnlypath:"ReadOnlySkill"}]),na=l()(pa,2),oa=na[0],Ta=na[1],ma=(0,i.useState)(!0),ia=l()(ma,2),fa=ia[0],ra=ia[1],ha=(0,i.useState)(-1),la=l()(ha,2),va=la[0],xe=la[1],ne=function(){var t=M()(c()().mark(function s(f,r,J,A,le,da){var Q,Ie;return c()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return Q={page:f||q,page_size:27,search_type:(0,h.f1)("GET").searchType==!0?2:1,apps_mode:(0,h.f1)("GET").optionsModalId,apps_name:A||A==""?A:se},ra(!0),_e.next=4,(0,oe.go)(Q);case 4:Ie=_e.sent,sa(!0),$(le?{list:w.list.concat(Ie.data.list)}:Ie.data),ra(!1),Ie.data.list.length<27&&sa(!1);case 9:case"end":return _e.stop()}},s)}));return function(f,r,J,A,le,da){return t.apply(this,arguments)}}();(0,i.useEffect)(function(){(0,h.op)(),ne(1,null)},[]);var ga=function(){ie(q+1),ne(q+1,_,null,null,!0)},xa=function(s){ea(s.apps_mode),(0,h.f1)("SET",s.apps_mode,JSON.parse((0,h.f1)("GET").searchType)),ne(1,_,s.apps_mode)},_a=function(s){R(s.target.value),ne(1,_,qe,s.target.value)},ja=function(){ee(!1)},Ma=function(){var t=M()(c()().mark(function s(){var f,r;return c()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return f={name:Ne,description:be,app_id:p.app_id,mode:p.mode,icon:p.id?JSON.stringify(p.id):p.icon,icon_background:""},A.next=3,(0,oe.bs)(f);case 3:r=A.sent,r.code==0&&(ee(!1),ne(1,_,null,null,null,q*27));case 5:case"end":return A.stop()}},s)}));return function(){return t.apply(this,arguments)}}(),ya=function(s,f){xe(f),ee(!0),Oe(s.name),Se(s.description),Ve(s)},Ca=function(s){Oe(s.target.value)},Ea=function(s){Se(s.target.value)},ca=function(s){event.stopPropagation(),(0,h.Go)("SET",u()(u()({},s),{},{type:(0,h.f1)("GET").searchType}));var f=oa.filter(function(r){return r.apps_mode===s.mode});(s.mode===1||s.mode===4)&&(0,h.f1)("GET").searchType==!0?V.history.push("/".concat(f[0].readOnlypath,"?app_id=").concat(s.app_id?s.app_id:s.apps_id,"&type=").concat((0,h.f1)("GET").searchType)):V.history.push("/".concat(f[0].path,"?app_id=").concat(s.app_id?s.app_id:s.apps_id,"&type=").concat((0,h.f1)("GET").searchType))},Da=function(s,f){xe(f),N.Z.confirm({title:n.formatMessage({id:"creation.modal.returnconfirm"}),content:n.formatMessage({id:"creation.modal.deldescribe"}),onOk:function(){var r=M()(c()().mark(function A(){var le;return c()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,(0,oe.LK)(s);case 2:le=Q.sent,le&&le.code==0?(d.ZP.success(n.formatMessage({id:"creation.modal.delsuccess"})),ne(1,null,null,null,null,q*27)):d.ZP.error(n.formatMessage({id:"creation.modal.delerror"}));case 4:case"end":return Q.stop()}},A)}));function J(){return r.apply(this,arguments)}return J}(),onCancel:function(){}})},Na=function(s){var f=JSON.parse(s.target.value);re(f),(0,h.f1)("SET",null,f),ne(1,f)},Oa=function(){var s=ae.filter(function(f){return f.apps_mode==(0,h.f1)("GET").optionsModalId});$e(!0),Pe(s[0].apps_mode!==6?s[0]:{name:"Agent",path:"Agents",icon:"/icons/creation/agent.svg",pitchicon:"/icons/creation/pitchagent.svg",signicon:"/icons/creation/pitchagent.svg",apps_mode:1})},ba=(0,de.Z)(function(t){return t.setRunId}),Pa=(0,de.Z)(function(t){return t.setRunPanelLogRecord}),wa=(0,de.Z)(function(t){return t.setDealtWithData}),Sa=function(s){ba(s.app_id)};return(0,e.jsxs)("div",{className:" pb-[10px] flex flex-col",style:{height:"calc(-60px + 100vh)",width:"100%",margin:"0 auto"},children:[(0,e.jsxs)("div",{className:"flex px-[30px] py-[20px] mx-[8px] items-center justify-between",children:[(0,e.jsx)("div",{className:"flex items-center",children:ae.map(function(t,s){return(0,e.jsxs)("div",{onClick:function(){xa(t)},className:"flex justify-center items-center h-8 rounded-lg mr-4 cursor-pointer px-[10px]",style:(0,h.f1)("GET").optionsModalId==t.apps_mode?{color:"#1B64F3",backgroundColor:"#ffffff"}:{color:"#9097a1"},children:[(0,e.jsx)("div",{className:"mr-2",children:(0,e.jsx)("img",{src:(0,h.f1)("GET").optionsModalId==t.apps_mode?t.pitchicon:t.unselected,alt:""})}),(0,e.jsx)("div",{children:t.name})]})})}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("div",{className:"min-w-40 flex justify-end mr-5",children:(0,e.jsxs)(T.ZP.Group,{onChange:Na,defaultValue:JSON.stringify((0,h.f1)("GET").searchType),children:[(0,e.jsx)(T.ZP.Button,{value:"true",children:n.formatMessage({id:"creation.team"})}),(0,e.jsx)(T.ZP.Button,{value:"false",children:n.formatMessage({id:"creation.individual"})})]})}),(0,e.jsx)(D.Z,{style:{width:300},prefix:(0,e.jsx)(K.Z,{}),placeholder:n.formatMessage({id:"creation.placeholder.searchname"}),variant:"filled",onChange:_a})]})]}),(0,e.jsx)(O.Z,{spinning:fa,size:"large",className:"mt-[112px]",children:(0,e.jsx)("div",{id:"Creation",style:{overflowY:"auto",height:"calc(100vh - 128px)"},children:w&&w.list&&w.list.length>0?(0,e.jsx)(E.Z,{dataLength:w.list.length,elid:"Creation",ishasMore:ua,upSlide:ga,isFooter:!0,children:(0,e.jsxs)(v.Z,{gutter:[16,8],wrap:!0,style:{margin:0},className:"px-[30px]",children:[(0,e.jsx)(g.Z,{sm:24,md:12,lg:12,xl:8,xxl:6,children:(0,e.jsx)(Be,{optionsModalId:(0,h.f1)("GET").optionsModalId})}),w&&w.list&&w.list.length?w.list.map(function(t,s){var f;return(0,e.jsx)(g.Z,{className:"gutter-row",sm:24,md:12,lg:12,xl:8,xxl:6,children:(0,e.jsx)(z.Z,{className:" cursor-pointer transition shadow-lg shadow-gray-100 hover:shadow-gray-200",style:{marginTop:10,minWidth:300},hoverable:!1,styles:{body:{padding:"20px"}},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{onClick:function(){return ca(t)},children:(0,e.jsx)(z.Z.Meta,{title:[(0,e.jsxs)("div",{className:"flex w-full",children:[(0,e.jsx)("div",{className:"mr-[17px] shrink-0",children:(0,e.jsx)(Ae.Z,{Image:(0,h.s9)("single",t.icon),icon:(0,h.f1)("GET").optionsModalId===6?ae.filter(function(r){return r.apps_mode===t.mode})[0].signicon:null})}),(0,e.jsxs)("div",{className:"flex-1",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[" ",(0,e.jsx)("div",{style:{maxWidth:"160px"},className:"text-sm text-[#213044] font-medium truncate",children:(0,e.jsx)(Ee,{ellipsis:{tooltip:t.name},children:t.name})}),(0,e.jsxs)("div",{className:" leading-6 flex items-center justify-end text-xs font-normal text-[#999999]",children:[(0,e.jsxs)("div",{children:[n.formatMessage({id:"creation.numberofcitation"}),":"," "]}),(0,e.jsxs)("div",{className:"text-[#1B64F3] ml-2",children:[" ",t.execution_times?t.execution_times:0]})]})]}),(0,e.jsxs)("div",{className:"flex items-center justify-between w-full text-xs font-normal text-[#999999]",children:[(0,e.jsx)("div",{className:"text-xs font-normal text-[#999999] mt-[7px]",children:oa.map(function(r,J){return r.apps_mode===t.mode?r.name:null})}),(0,e.jsxs)("div",{className:" flex items-center justify-end mt-[7px]",children:[(0,e.jsx)("div",{className:"max-w-[56px] mr-2 ",children:(0,e.jsx)(Ee,{ellipsis:{tooltip:t.published_creator},className:"text-base",children:(0,e.jsx)("div",{className:" text-[#999999] text-xs",children:t.published_creator})})}),(0,e.jsx)("div",{children:t.published_time?(0,e.jsxs)("span",{children:[ke()(t.published_time).format("YYYY-MM-DD HH:mm:ss")," ",n.formatMessage({id:"creation.publish"})]}):t.mode!==3?(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("img",{src:"/icons/unpublish.svg",alt:"",className:"mr-[5px]"}),n.formatMessage({id:"creation.unpublish"})]}):null})]})]})]})]})],description:(0,e.jsx)("div",{style:{height:70,margin:"20px 0 20px 0"},children:(0,e.jsx)(De,{ellipsis:{rows:4,tooltip:t.description},children:(0,e.jsx)("div",{style:{color:"#999999"},children:t.description})})})})}),(0,e.jsxs)("div",{className:"flex justify-between",children:[(0,e.jsx)("div",{className:"flex items-center justify-start",style:{height:"24px"},children:t.list&&t.list.length?(0,e.jsx)(o.Z,{placement:"bottomLeft",content:(0,e.jsx)("div",{className:" overflow-auto",children:t.list.map(function(r,J){return(0,e.jsxs)("div",{className:"w-80 flex items-center justify-start p-1.5 rounded-md  cursor-pointer hover:bg-[#fafafa]",onClick:function(){return ca(r)},children:[(0,e.jsx)("div",{className:"mr-3.5",children:(0,e.jsx)("div",{className:"w-[36px] h-[36px] bg-[#EDF3FE] rounded-lg mr-1.5 flex items-center justify-center ",children:(0,e.jsx)("img",{src:(0,h.s9)("single",r.icon),alt:""})})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"text-xs font-normal text-[#213044]",children:r.name}),(0,e.jsx)("div",{className:"text-xs font-normal text-[#666]",children:(r==null?void 0:r.mode)==1?n.formatMessage({id:"workflow.agent"}):(r==null?void 0:r.mode)==2?n.formatMessage({id:"component.menu.workflow"}):(r==null?void 0:r.mode)==3?n.formatMessage({id:"component.menu.knowledgeBase"}):n.formatMessage({id:"workflow.skill"})})]})]},J)})}),children:(0,e.jsxs)("div",{className:"flex items-center justify-around text-xs font-normal",children:[n.formatMessage({id:"creation.relevancy.app"})," ",":",t.list.slice(0,4).map(function(r,J){return(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"w-8 h-8 bg-[#EDF3FE] rounded-lg ml-1.5 flex items-center justify-center ",children:(0,e.jsx)("img",{src:(0,h.s9)("single",r.icon),alt:""})})},J)}),t.list.length>4?(0,e.jsx)("div",{className:"w-8 h-8 bg-[#EDF3FE] rounded-lg ml-1.5 flex items-center justify-center ",children:(0,e.jsx)("img",{src:"/icons/more.svg",alt:""})}):null]})}):null}),(t==null?void 0:t.mode)===2?(0,e.jsx)("div",{className:"flex-1 flex justify-end items-center",children:(t==null?void 0:t.publish_status)==1?(0,e.jsx)("img",{onClick:function(){return Sa(t)},src:"/icons/operation_icon.svg",className:"mr-2"}):(0,e.jsx)("img",{src:"/icons/operation_disable_icon.svg",className:"mr-2"})}):null,(0,e.jsx)("div",{children:JSON.parse((f=(0,h.f1)("GET"))===null||f===void 0?void 0:f.searchType)?null:(0,e.jsx)(o.Z,{placement:"rightTop",open:va==s,onOpenChange:function(J){xe(-1)},content:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(X.ZP,{type:"link",className:"text-[#213044]",onClick:function(){ya(t,-1)},children:[(0,e.jsx)(L.Z,{}),n.formatMessage({id:"creation.redact"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(X.ZP,{type:"link",className:"text-[#E12222]",onClick:function(){return Da(t,-1)},children:[(0,e.jsx)(B.Z,{}),n.formatMessage({id:"creation.delete"})]})})]}),children:(0,e.jsx)("div",{onMouseEnter:function(){xe(s)},className:"w-[26px] h-[26px] flex items-center justify-center",children:(0,e.jsx)(F.Z,{onClick:function(){xe(s)}},"setting")})})})]})]})})},s)}):null]})}):w&&w.list&&w.list.length==0?(0,e.jsxs)("div",{className:"w-full flex items-center flex-wrap justify-center mt-48",children:[(0,e.jsx)("div",{className:"w-full flex items-center justify-center mb-2.5",children:(0,e.jsx)("img",{src:"/icons/default.svg",alt:""})}),se&&se!==""?(0,e.jsxs)("div",{children:["\u201C",se,"\u201D"]}):(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"w-full text-center mb-3 text-[#666] text-sm",children:[n.formatMessage({id:"creation.margindescribe"})," ~"]}),(0,e.jsxs)("div",{className:"w-full text-center",children:[" ",(0,e.jsx)(X.ZP,{color:"primary",onClick:function(){Oa()},children:n.formatMessage({id:"creation.addnewapp"})})," "]})]})]}):null})}),(0,e.jsxs)(N.Z,{title:"",open:fe,okText:n.formatMessage({id:"creation.conserve"}),onOk:Ma,onCancel:ja,children:[(0,e.jsxs)("div",{className:"mb-[30px]",children:[(0,e.jsxs)("div",{className:"mb-[15px]",children:[(p==null?void 0:p.mode)==1?n.formatMessage({id:"creation.agent"}):(p==null?void 0:p.mode)==2?n.formatMessage({id:"creation.workflow"}):(p==null?void 0:p.mode)==3?n.formatMessage({id:"creation.repository"}):n.formatMessage({id:"creation.skill"}),n.formatMessage({id:"creation.appiconname"})]}),(0,e.jsxs)("div",{className:"flex items-center justify-around",children:[(0,e.jsx)(We.Z,{CardData:p,setCardData:Ve}),(0,e.jsx)(D.Z,{showCount:!0,maxLength:20,placeholder:n.formatMessage({id:"creation.placeholder.appname"}),onChange:Ca,value:Ne})]})]}),(0,e.jsxs)("div",{className:"mb-[30px]",children:[(0,e.jsxs)("div",{className:"mb-[15px]",children:[(p==null?void 0:p.mode)==1?n.formatMessage({id:"creation.agent"}):(p==null?void 0:p.mode)==2?n.formatMessage({id:"creation.workflow"}):(p==null?void 0:p.mode)==3?n.formatMessage({id:"creation.repository"}):n.formatMessage({id:"creation.skill"}),n.formatMessage({id:"creation.appdescribe"})]}),(0,e.jsx)(P,{showCount:!0,maxLength:100,rows:4,placeholder:n.formatMessage({id:"creation.placeholder.appdescribe"}),onChange:Ea,value:be})]})]}),(0,e.jsx)(Me.Z,{setIsModalOpen:$e,isModalOpen:He,ModalType:!0,CreationType:ta,setcreationType:Pe,transformData:ae.filter(function(t){return t.apps_mode!==6})})]})},Y=S}}]);