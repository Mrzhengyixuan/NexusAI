"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[979],{20866:function(ge,q,t){t.r(q),t.d(q,{default:function(){return Oe}});var _=t(97857),a=t.n(_),se=t(15009),j=t.n(se),ee=t(99289),F=t.n(ee),re=t(5574),h=t.n(re),Z=t(43722),ne=t(72406),C=t(32332),M=t(1413),i=t(67294),ve=t(83707),je=t(91146),Ne=function(r,s){return i.createElement(je.Z,(0,M.Z)((0,M.Z)({},r),{},{ref:s,icon:ve.Z}))},ye=i.forwardRef(Ne),Ce=ye,Me=t(3471),te=t(35312),H=t(15746),de=t(2453),Se=t(17788),be=t(72269),Fe=t(83159),le=t(71230),pe=t(32983),we=t(74330),Re=t(19632),Ze=t.n(Re),Ee=t(28508),xe=t(55102),V=t(40741),Ae=t(37804),ue=t(14726),Ie=t(96486),ke=t(92004),e=t(85893),De=xe.Z.TextArea,Le=function(r){var s=(0,te.useIntl)(),E=r.show,p=r.id,D=r.close,W=r.save,N=r.isUpdata,P=V.Z.useForm(),U=h()(P,1),A=U[0],S=(0,i.useRef)(!1),I=(0,te.useLocation)(),Y=(0,i.useRef)(null),J=de.ZP.useMessage(),L=h()(J,2),B=L[0],$=L[1],y=(0,i.useState)({name:"",description:"",max_round:10,agent:[]}),m=h()(y,2),n=m[0],d=m[1],b=(0,i.useState)([]),O=h()(b,2),w=O[0],Q=O[1],k=(0,i.useRef)(!1),ie=(0,Ie.throttle)(function(){var x=F()(j()().mark(function u(G){var g,R;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!k.current){l.next=2;break}return l.abrupt("return");case 2:if(k.current=!0,g=w.map(function(he){var He=he.agent_id,fe=he.active,Ve=fe===void 0?1:fe;return{agent_id:He,active:Ve}}),n.name){l.next=7;break}return k.current=!1,l.abrupt("return");case 7:if(g.length!=0){l.next=11;break}return k.current=!1,B.open({type:"error",content:s.formatMessage({id:"app.create_chatroom.label_4_tips"})}),l.abrupt("return");case 11:if(d(a()(a()({},n),{},{agent:g})),B.open({key:"create",type:"loading",content:"Loading..."}),S.current){l.next=19;break}return l.next=16,(0,Z.dB)(a()(a()({},n),{},{agent:g}));case 16:l.t0=l.sent,l.next=22;break;case 19:return l.next=21,(0,Z.sI)(a()(a()({},n),{},{agent:g}),p);case 21:l.t0=l.sent;case 22:R=l.t0,R.code==0&&(B.open({key:"create",type:"success",content:S.current?s.formatMessage({id:"app.edit_chatroom.succeed"}):s.formatMessage({id:"app.create_chatroom.succeed"}),duration:2}),W(!0),ce()),k.current=!1;case 25:case"end":return l.stop()}},u)}));return function(u){return x.apply(this,arguments)}}(),300),oe=(0,i.useState)(!1),ae=h()(oe,2),c=ae[0],f=ae[1],v=function(u){var G={};return u.slice(1).split("&").forEach(function(g){var R=g.split("=");G[R[0]]=R[1]}),G},o=function(){var x=F()(j()().mark(function u(G){var g,R;return j()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,Z.cH)({id:G});case 2:g=l.sent,g.code==0&&(R=g.data.chat_info,d(a()(a()({},n),{},{name:R.name,description:R.description,max_round:g.data.max_round?g.data.max_round:10,agent:g.data.agent_list})),Q(g.data.agent_list));case 4:case"end":return l.stop()}},u)}));return function(G){return x.apply(this,arguments)}}(),X=function(){f(!0)},me=function(){f(!1)},T=function(u){Q(Ze()(u.checkAgent))},z=function(){S.current=!1,N&&p!=0&&(S.current=!0,o(p))},ce=function(){A.setFieldsValue({Title:"",Description:"",MaxRound:10}),d(a()(a()({},n),{},{name:"",description:"",max_round:10,agent:[]})),Q([]),k.current=!1,D()};return(0,i.useEffect)(function(){E&&z()},[E]),(0,i.useEffect)(function(){A.setFieldsValue({Title:n.name,Description:n.description,MaxRound:n.max_round})},[n,A]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{ref:Y,className:"w-full h-full fixed top-[0] left-[0] bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-20",children:[(0,e.jsxs)("div",{className:"w-[980px] h-[646px] bg-[#fff] rounded-[6px]",children:[$,(0,e.jsx)("div",{className:"w-full flex relative",style:{height:"100%"},children:(0,e.jsx)("div",{className:"w-full relative box-border flex-1",style:{height:"100%"},children:(0,e.jsx)(V.Z,{form:A,className:"h-full",initialValues:{Title:n.name,Description:n.description,MaxRound:n.max_round},children:(0,e.jsxs)("div",{className:"flex flex-col h-full",children:[(0,e.jsxs)("div",{className:"text-[16px] flex items-center p-[20px]",style:{borderBottom:"1px solid #ebebeb"},children:[(0,e.jsx)("span",{className:"flex-1 text-[14px] font-[500] text-[#213044]",children:S.current?s.formatMessage({id:"app.edit_chatroom.title"}):s.formatMessage({id:"app.create_chatroom.title"})}),(0,e.jsx)(Ee.Z,{className:"text-[16px] cursor-pointer",onClick:ce})]}),(0,e.jsx)("div",{className:"flex-1 min-h-[0] overflow-auto",children:(0,e.jsxs)("div",{className:"pt-[20px] px-[20px]",children:[(0,e.jsxs)("div",{className:"text-[12px] text-[#213044]",children:[(0,e.jsx)("span",{style:{color:"red",paddingRight:"4px"},children:"*"}),s.formatMessage({id:"app.create_chatroom.label_1"})]}),(0,e.jsx)("div",{className:"pt-[15px]",children:(0,e.jsx)(V.Z.Item,{name:"Title",rules:[{required:!0,message:s.formatMessage({id:"app.create_chatroom.label_1_tips"})}],style:{marginBottom:"0px"},children:(0,e.jsx)(xe.Z,{placeholder:s.formatMessage({id:"app.create_chatroom.label_1_pl"}),maxLength:20,style:{height:40,background:"#F7F7F7"},className:"placeholder:text-[#bbb] placeholder:text-[12px] h-[40px] border-[#eee] text-[#213044]",onChange:function(u){d(a()(a()({},n),{},{name:u.target.value}))}})})}),(0,e.jsx)("div",{className:"text-[12px] text-[#213044] pt-[20px]",children:s.formatMessage({id:"app.create_chatroom.label_2"})}),(0,e.jsx)("div",{className:"pt-[10px]",children:(0,e.jsx)(V.Z.Item,{name:"Description",style:{marginBottom:"0px"},children:(0,e.jsx)(De,{showCount:!0,maxLength:100,placeholder:s.formatMessage({id:"app.create_chatroom.label_2_pl"}),value:n.description,style:{height:57,resize:"none",background:"#F7F7F7"},className:"placeholder:text-[#bbb] placeholder:text-[12px] h-[40px] border-[#eee] text-[#213044]",onChange:function(u){d(a()(a()({},n),{},{description:u.target.value}))}})})}),(0,e.jsxs)("div",{className:"text-[12px] text-[#213044] pt-[20px]",children:[(0,e.jsx)("span",{style:{color:"red",paddingRight:"4px"},children:"*"}),s.formatMessage({id:"app.create_chatroom.label_3"})]}),(0,e.jsx)("div",{className:"pt-[10px]",children:(0,e.jsx)(V.Z.Item,{name:"MaxRound",rules:[{required:!0,message:s.formatMessage({id:"app.create_chatroom.label_3_tips"})}],style:{marginBottom:"0px"},children:(0,e.jsx)(Ae.Z,{min:10,step:1,max:100,size:"large",style:{background:"#F7F7F7"},className:"placeholder:text-[#bbb] placeholder:text-[12px]  border-[#eee] text-[#213044] w-full",onChange:function(u){d(a()(a()({},n),{},{max_round:u}))},formatter:function(u){return u!==void 0?Math.floor(u).toString():n.max_round.toString()}})})}),(0,e.jsxs)("div",{className:"text-[14px]  pt-[20px] flex",children:[(0,e.jsx)("span",{style:{color:"red",paddingRight:"4px"},children:"*"}),(0,e.jsx)("span",{className:"text-[12px] text-[#213044]",children:s.formatMessage({id:"app.create_chatroom.label_4"})})]}),(0,e.jsx)("div",{className:"pt-[15px] pb-[20px] overflow-hidden w-full",children:(0,e.jsxs)(le.Z,{gutter:[15,15],children:[(0,e.jsx)(H.Z,{span:6,children:(0,e.jsx)("div",{className:"text-[12px] text-[#BBBBBB] h-[62px] rounded-[4px] bg-[#F7F7F7] leading-[62px] text-center cursor-pointer",onClick:X,style:{border:"1px solid #EEEEEE"},children:s.formatMessage({id:"app.create_chatroom.add_button"})})}),w&&w.length?w.map(function(x){return(0,e.jsx)(H.Z,{span:6,children:(0,e.jsxs)("div",{className:"bg-[#fff] flex gap-x-[20px] p-[10px] cursor-pointer border-solid border-[1px] rounded-[4px] border-[#eee]",children:[(0,e.jsx)("div",{className:"w-[40px] h-[40px] bg-[#F4F8F1] rounded-[6px] relative flex items-center justify-center shrink-0",children:(0,e.jsx)("img",{src:(0,C.s9)("single",x.icon),alt:"",className:"w-[20px]  h-[20px]"})}),(0,e.jsxs)("div",{className:"flex flex-col gap-y-[5px] justify-center flex-1 min-w-[0]",children:[(0,e.jsx)("div",{className:"text-[#213044] text-[12px] font-[500] w-full truncate",children:x.name}),(0,e.jsx)("div",{className:"text-[#999] text-[12px] w-full truncate",children:x.description})]})]})},x.agent_id)}):(0,e.jsx)(e.Fragment,{})]})})]})}),(0,e.jsxs)("div",{className:"p-[20px] flex gap-x-[20px] justify-end",style:{borderTop:"1px solid #e8e8e8"},children:[(0,e.jsx)(ue.ZP,{className:"text-[14px] text-[#213044] w-[88px] h-[40px]",style:{border:"1px solid #D8D8D8"},onClick:ce,children:s.formatMessage({id:"app.create_chatroom.cancel"})}),(0,e.jsx)(ue.ZP,{type:"primary",className:"bg-[#1B64F3] rounded-[4px] w-[88px] h-[40px]",htmlType:"submit",onClick:ie,children:s.formatMessage({id:"app.create_chatroom.save"})})]})]})})})})]}),c?(0,e.jsx)(ke.Z,{show:c,popupClose:me,popupSave:T,checkList:w}):(0,e.jsx)(e.Fragment,{})]})})},Be=Le,Te=t(54941),ze=function(r){return(0,e.jsx)(H.Z,{className:"gutter-row",xs:24,sm:24,md:12,lg:8,xl:6,children:(0,e.jsxs)("div",{className:"h-[236px] rounded-[8px] bg-[#EFF0F2] flex flex-col items-center justify-center gap-y-[10px] cursor-pointer",style:{border:"1px solid #E9E9E9"},onClick:function(){r.setCreateShow(!0),r.isUpdataChatRoom.current=!1,r.upDataId.current=0},children:[(0,e.jsx)("img",{src:"/icons/plaza_m2_c2.svg",className:"w-[42px] h-[42px]",alt:""}),(0,e.jsx)("span",{className:"text-[#213044] text-[12px]",children:r.intl.formatMessage({id:"app.chatroom_list.create"})})]})})},Pe=function(r){var s=r.item,E=r.resetList,p=r.setCreateShow,D=r.isUpdataChatRoom,W=r.upDataId,N=r.intl,P=de.ZP.useMessage(),U=h()(P,2),A=U[0],S=U[1],I=Se.Z.confirm,Y=function(){I({title:N.formatMessage({id:"app.chatroom.del.title"}),icon:(0,e.jsx)(Ce,{}),content:N.formatMessage({id:"app.chatroom.del.tips"}),okText:N.formatMessage({id:"app.chatroom.del.confirm"}),okType:"danger",cancelText:N.formatMessage({id:"app.chatroom.del.cancel"}),onOk:function(){J()}})},J=function(){var y=F()(j()().mark(function m(){var n;return j()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,(0,Z.Gn)({id:s.chatroom_id});case 2:n=b.sent,n.code==0&&(A.open({key:"del",type:"success",content:N.formatMessage({id:"app.chatroom.del.delsuccess"}),duration:10}),E(s.chatroom_id));case 4:case"end":return b.stop()}},m)}));return function(){return y.apply(this,arguments)}}(),L=function(){var y=F()(j()().mark(function m(){return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:p(!0),D.current=!0,W.current=s.chatroom_id;case 3:case"end":return d.stop()}},m)}));return function(){return y.apply(this,arguments)}}(),B=[{key:"1",label:(0,e.jsx)("div",{className:"py-[3px] px-[3px]",children:(0,e.jsxs)("div",{className:"flex gap-x-[5px] text-[12px] text-[#213044] items-center p-y-[8]",onClick:L,children:[(0,e.jsx)("img",{src:"/icons/edit_icon.svg",className:"w-[16px] h-[16px]"}),(0,e.jsx)("span",{children:N.formatMessage({id:"app.chatroom_list.fun_button_1"})})]})})},{key:"2",label:(0,e.jsx)("div",{className:"py-[3px] px-[3px]",children:(0,e.jsxs)("div",{className:"flex gap-x-[5px] text-[12px] text-[#E12222] items-center",onClick:Y,children:[(0,e.jsx)("img",{src:"/icons/delete_icon.svg",className:"w-[16px] h-[16px]"}),(0,e.jsx)("span",{children:N.formatMessage({id:"app.chatroom_list.fun_button_2"})})]})})}],$=function(){var y=F()(j()().mark(function m(){return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,Z.r5)({smart_selection:s.smart_selection==1?0:1},s.chatroom_id);case 2:E(s.chatroom_id,s.smart_selection==1?0:1);case 3:case"end":return d.stop()}},m)}));return function(){return y.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[S,(0,e.jsxs)("div",{className:"flex  items-center",children:[(0,e.jsxs)("div",{className:"flex gap-x-[6px] items-center flex-1",children:[(0,e.jsx)("span",{className:"text-[12px] text-[#666] line",children:N.formatMessage({id:"app.chatroom_list.switch"})}),(0,e.jsx)(be.Z,{size:"small",value:s.smart_selection==1,onChange:$})]}),(0,e.jsx)(Fe.Z,{menu:{items:B},placement:"topRight",className:"cursor-pointer",children:(0,e.jsx)("div",{className:"w-[18px] h-[18px] bg-[#ebebeb] rounded-[4px] flex justify-center items-center",children:(0,e.jsx)(Me.Z,{className:"hover:text-[#1B64F3]",style:{fontSize:"14px"}})})})]})]})},Ue=function(){var r=(0,te.useIntl)(),s=(0,i.useState)(null),E=h()(s,2),p=E[0],D=E[1],W=(0,i.useState)(!1),N=h()(W,2),P=N[0],U=N[1],A=(0,i.useState)({page:1,page_size:20,name:""}),S=h()(A,2),I=S[0],Y=S[1],J=(0,i.useState)(!0),L=h()(J,2),B=L[0],$=L[1],y=(0,i.useRef)(!1),m=(0,i.useRef)(0),n=(0,i.useState)(!1),d=h()(n,2),b=d[0],O=d[1],w=function(){var c=F()(j()().mark(function f(){var v,o,X=arguments;return j()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return v=X.length>0&&X[0]!==void 0?X[0]:!1,T.next=3,(0,Z.vu)(I);case 3:o=T.sent,v&&U(!0),o.code==0&&($(o.data.total_pages>I.page),o.data.total_pages>=I.page&&!v&&(o.data.list=p.list.concat(o.data.list)),o.data.list&&o.data.list.length&&o.data.list.forEach(function(z){z.agent_list&&z.agent_list.length&&(z.agent_list.length=z.agent_list.length>6?6:z.agent_list.length)}),D(o.data));case 6:case"end":return T.stop()}},f)}));return function(){return c.apply(this,arguments)}}();(0,i.useEffect)(function(){w(!0),$(!0)},[]);var Q=function(f){Y(function(v){return a()(a()({},v),{},{page:I.page++})}),w()},k=function(f){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;p&&p.list.length&&(v!=null?D(a()(a()({},p),{},{list:p.list.map(function(o){return a()(a()({},o),{},{smart_selection:o.chatroom_id===f?v:o.smart_selection})})})):D(a()(a()({},p),{},{list:p.list.filter(function(o){return o.chatroom_id!==f})})))},ie=function(f){te.history.push("/chat_room/".concat(f.chatroom_id))},oe=function(){O(!1)},ae=function(f){f&&w(!0)};return(0,e.jsx)("div",{className:"pt-0 w-full",id:"Meeting",style:{height:"calc(100vh - 124px)",overflowY:"auto"},children:(0,e.jsx)(ne.Z,{dataLength:p&&p.list.length,elid:"Meeting",ishasMore:B,upSlide:Q,isFooter:!0,pageNumber:I.page,children:(0,e.jsx)("div",{className:"px-[30px]",children:(0,e.jsxs)(le.Z,{gutter:[20,20],style:{margin:0},children:[P&&(0,e.jsx)(ze,{setCreateShow:O,isUpdataChatRoom:y,intl:r,upDataId:m}),p&&p.list.length?p.list.map(function(c,f){return(0,e.jsx)(H.Z,{className:"gutter-row",xs:24,sm:24,md:12,lg:8,xl:6,xxl:6,children:(0,e.jsx)("div",{className:"relative h-[236px] rounded-[8px] cursor-pointer shadow-lg shadow-gray-100 hover:shadow-gray-200",onClick:function(){ie(c)},children:(0,e.jsxs)("div",{className:"bg-[#fff] rounded-[8px] h-full",style:{boxShadow:"0px 2px 4px 0px rgba(0,0,0,0.05)"},children:[(0,e.jsxs)("div",{className:"flex pt-[20px] pb-[15px] px-[20px] text-[#213044] text-[14px] font-[500] gap-x-[6px]",children:[(0,e.jsx)("span",{className:"flex-1 min-w-[0px] truncate",children:c.name}),(0,e.jsxs)("div",{className:"flex gap-x-[5px] items-center",children:[(0,e.jsx)("img",{src:"".concat(c.active==0?"/icons/plaza_m2_c2.svg":"/icons/plaza_m2_c1.svg"),className:"w-[14px] h-[14px]"}),(0,e.jsx)("span",{className:"text-[12px]",children:c.active==0?(0,e.jsx)("span",{className:"text-[#aaa]",children:r.formatMessage({id:"app.chatroom_list.status"})}):(0,e.jsx)("span",{className:"text-[#1B64F3]",children:r.formatMessage({id:"app.chatroom_list.status_succeed"})})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"px-[20px]",children:(0,e.jsxs)("div",{style:{borderBottom:"1px solid #eee"},children:[c.description?(0,e.jsx)("div",{className:"text-[#666666] text-[12px] font-[400] w-full truncate min-h-[14px]",children:c.description}):(0,e.jsx)(e.Fragment,{}),(0,e.jsx)("div",{className:"py-[20px] h-[115px] overflow-hidden",children:c.agent_list&&c.agent_list.length?(0,e.jsx)(le.Z,{gutter:[20,18],children:c.agent_list.map(function(v,o){return(0,e.jsx)(H.Z,{md:12,lg:12,xl:12,xxl:8,children:(0,e.jsxs)("div",{className:"flex gap-x-[10px] items-center",children:[(0,e.jsx)("div",{className:"w-[30px] h-[30px] shrink-0 flex items-center rounded-[6px] justify-center bg-[#F4F8F1]",children:(0,e.jsx)("img",{src:(0,C.s9)("single",v.icon),alt:"",className:"w-[18px]  h-[18px]"})}),(0,e.jsx)("div",{className:"text-[#666] text-[12px] truncate",children:v.name})]})},o)})}):(0,e.jsx)(pe.Z,{style:{margin:"0px",fontSize:"12px"},imageStyle:{width:"60px",margin:"0 auto",marginBottom:"2px"},description:r.formatMessage({id:"app.dashboard.None"}),image:pe.Z.PRESENTED_IMAGE_SIMPLE})})]})}),(0,e.jsx)("div",{className:"pt-[15px] pb-[16px] px-[20px]",onClick:function(o){return o.stopPropagation(),!1},children:(0,e.jsx)(Pe,{item:c,resetList:k,setCreateShow:O,isUpdataChatRoom:y,upDataId:m,intl:r})})]})]})})},f)}):(0,e.jsx)(e.Fragment,{children:!P&&(0,e.jsx)("div",{className:"w-full h-full flex items-center justify-center ",style:{height:"calc(100vh - 300px)"},children:(0,e.jsx)(we.Z,{size:"large"})})}),b?(0,e.jsx)(Be,{show:b,id:m.current,close:oe,save:ae,isUpdata:y.current}):(0,e.jsx)(e.Fragment,{})]})})})})},$e=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsx)("div",{className:"px-[30px] w-full",children:(0,e.jsx)(Te.Z,{path:"/plaza",keys:"meeting"})}),(0,e.jsx)(Ue,{})]})})},Oe=$e},54941:function(ge,q,t){var _=t(35312),a=t(85893),se=function(ee){var F=(0,_.useIntl)(),re=[{label:F.formatMessage({id:"app.dashboard.menu"}),key:"dash_board",icon:function(M,i){return(0,a.jsx)("img",{src:"/icons/plaza_m1_c".concat(M==i?"1":"2",".svg"),className:"w-[16px] h-[16px]"})}},{label:F.formatMessage({id:"app.chatroom_list.menu"}),key:"meeting",icon:function(M,i){return(0,a.jsx)("img",{src:"/icons/plaza_m2_c".concat(M==i?"1":"2",".svg"),className:"w-[16px] h-[16px]"})}}],h=ee.keys,Z=ee.path,ne=function(M){M!==h&&_.history.push(Z)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex gap-x-[20px] pt-[20px] pb-[20px]",children:re.map(function(C,M){return(0,a.jsxs)("div",{className:"pt-[6px] pb-[6px] pl-[15px] pr-[15px] cursor-pointer rounded-[8px] items-center flex gap-x-[10px] ".concat(C.key==h?"bg-[#fff] text-[#1B64F3]":""),onClick:function(){ne(C.key)},children:[(0,a.jsx)("span",{children:C.icon(h,C.key)}),(0,a.jsx)("span",{className:"text-[14px]",children:C.label})]},M)})})})};q.Z=se}}]);