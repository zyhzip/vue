(function(){"use strict";var e={6230:function(e,t,o){var n=o(5130),l=o(6768);const a={id:"app"},r={class:"container"};function i(e,t,o,n,i,s){const d=(0,l.g2)("TodoList"),u=(0,l.g2)("ElementDemo"),c=(0,l.g2)("ChartsDemo");return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.Lk)("div",r,[(0,l.bF)(d),(0,l.bF)(u),(0,l.bF)(c)])])}var s=o(4232);const d={class:"todo-section"},u={class:"todo-input"},c={class:"todo-items"},m=["onUpdate:modelValue"],p=["onClick"],h={key:0,class:"todo-stats"};function f(e,t,o,a,r,i){return(0,l.uX)(),(0,l.CE)("div",d,[t[3]||(t[3]=(0,l.Lk)("h2",null,"待办清单",-1)),(0,l.Lk)("div",u,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.newTodo=e),onKeyup:t[1]||(t[1]=(0,n.jR)(((...e)=>i.addTodo&&i.addTodo(...e)),["enter"])),placeholder:"请输入待办事项..."},null,544),[[n.Jo,r.newTodo]]),(0,l.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>i.addTodo&&i.addTodo(...e))},"添加")]),(0,l.Lk)("ul",c,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.todos,((e,t)=>((0,l.uX)(),(0,l.CE)("li",{key:t},[(0,l.bo)((0,l.Lk)("input",{type:"checkbox","onUpdate:modelValue":t=>e.completed=t},null,8,m),[[n.lH,e.completed]]),(0,l.Lk)("span",{class:(0,s.C4)({completed:e.completed})},(0,s.v_)(e.text),3),(0,l.Lk)("button",{onClick:e=>i.removeTodo(t)},"删除",8,p)])))),128))]),r.todos.length?((0,l.uX)(),(0,l.CE)("div",h,[(0,l.Lk)("span",null,"总计: "+(0,s.v_)(r.todos.length)+" 项",1),(0,l.Lk)("span",null,"已完成: "+(0,s.v_)(i.completedCount)+" 项",1)])):(0,l.Q3)("",!0)])}o(4114),o(8992),o(4520);var v={name:"TodoSection",data(){return{newTodo:"",todos:[{text:"完成Vue项目作业",completed:!1},{text:"学习Element Plus组件",completed:!1},{text:"掌握ECharts图表使用",completed:!1},{text:"复习Vue基础知识",completed:!0},{text:"整理学习笔记",completed:!1}]}},computed:{completedCount(){return this.todos.filter((e=>e.completed)).length}},methods:{addTodo(){this.newTodo.trim()&&(this.todos.push({text:this.newTodo,completed:!1}),this.newTodo="")},removeTodo(e){this.todos.splice(e,1)}}},k=o(1241);const b=(0,k.A)(v,[["render",f],["__scopeId","data-v-500d8c4e"]]);var L=b;const g={class:"element-demo"},y={class:"demo-item"},C={class:"demo-item"},x={class:"demo-item"},V={class:"demo-item"},T={class:"demo-item"},w={class:"demo-item"};function F(e,t,o,n,a,r){const i=(0,l.g2)("el-rate"),s=(0,l.g2)("el-switch"),d=(0,l.g2)("el-slider"),u=(0,l.g2)("el-color-picker"),c=(0,l.g2)("el-time-picker"),m=(0,l.g2)("el-tag");return(0,l.uX)(),(0,l.CE)("div",g,[t[15]||(t[15]=(0,l.Lk)("h2",null,"Element Plus 组件示例",-1)),(0,l.Lk)("div",y,[t[5]||(t[5]=(0,l.Lk)("h3",null,"评分",-1)),(0,l.bF)(i,{modelValue:a.rate,"onUpdate:modelValue":t[0]||(t[0]=e=>a.rate=e),colors:a.colors,"show-score":""},null,8,["modelValue","colors"])]),(0,l.Lk)("div",C,[t[6]||(t[6]=(0,l.Lk)("h3",null,"开关",-1)),(0,l.bF)(s,{modelValue:a.switchValue,"onUpdate:modelValue":t[1]||(t[1]=e=>a.switchValue=e),"active-text":"开启","inactive-text":"关闭"},null,8,["modelValue"])]),(0,l.Lk)("div",x,[t[7]||(t[7]=(0,l.Lk)("h3",null,"滑块",-1)),(0,l.bF)(d,{modelValue:a.sliderValue,"onUpdate:modelValue":t[2]||(t[2]=e=>a.sliderValue=e),step:10},null,8,["modelValue"])]),(0,l.Lk)("div",V,[t[8]||(t[8]=(0,l.Lk)("h3",null,"颜色选择器",-1)),(0,l.bF)(u,{modelValue:a.color,"onUpdate:modelValue":t[3]||(t[3]=e=>a.color=e),"show-alpha":""},null,8,["modelValue"])]),(0,l.Lk)("div",T,[t[9]||(t[9]=(0,l.Lk)("h3",null,"时间选择器",-1)),(0,l.bF)(c,{modelValue:a.time,"onUpdate:modelValue":t[4]||(t[4]=e=>a.time=e),placeholder:"选择时间",format:"HH:mm:ss"},null,8,["modelValue"])]),(0,l.Lk)("div",w,[t[14]||(t[14]=(0,l.Lk)("h3",null,"标签",-1)),(0,l.bF)(m,null,{default:(0,l.k6)((()=>t[10]||(t[10]=[(0,l.eW)("标签一")]))),_:1}),(0,l.bF)(m,{type:"success"},{default:(0,l.k6)((()=>t[11]||(t[11]=[(0,l.eW)("标签二")]))),_:1}),(0,l.bF)(m,{type:"warning"},{default:(0,l.k6)((()=>t[12]||(t[12]=[(0,l.eW)("标签三")]))),_:1}),(0,l.bF)(m,{type:"danger"},{default:(0,l.k6)((()=>t[13]||(t[13]=[(0,l.eW)("标签四")]))),_:1})])])}var _={name:"ElementDemo",data(){return{rate:4.2,colors:["#99A9BF","#F7BA2A","#FF9900"],switchValue:!0,sliderValue:50,color:"rgba(255, 69, 0, 0.68)",time:new Date}}};const E=(0,k.A)(_,[["render",F],["__scopeId","data-v-7ffc51a7"]]);var O=E;const A={class:"charts-demo"},j={class:"chart-item"},D={ref:"barChart",style:{height:"400px"}},P={class:"chart-item"},U={ref:"pieChart",style:{height:"400px"}},S={class:"chart-item"},X={ref:"lineChart",style:{height:"400px"}};function B(e,t,o,n,a,r){return(0,l.uX)(),(0,l.CE)("div",A,[t[3]||(t[3]=(0,l.Lk)("h2",null,"ECharts 图表示例",-1)),(0,l.Lk)("div",j,[t[0]||(t[0]=(0,l.Lk)("h3",null,"月度销售数据",-1)),(0,l.Lk)("div",D,null,512)]),(0,l.Lk)("div",P,[t[1]||(t[1]=(0,l.Lk)("h3",null,"产品销售占比",-1)),(0,l.Lk)("div",U,null,512)]),(0,l.Lk)("div",S,[t[2]||(t[2]=(0,l.Lk)("h3",null,"年度趋势分析",-1)),(0,l.Lk)("div",X,null,512)])])}var Q=o(9671),I={name:"ChartsDemo",methods:{initBarChart(){const e=Q.Ts(this.$refs.barChart);e.setOption({title:{text:"月度销售数据"},tooltip:{},xAxis:{data:["1月","2月","3月","4月","5月","6月"]},yAxis:{},series:[{name:"销售额",type:"bar",data:[5,20,36,10,10,20],itemStyle:{color:"#42b983"}}]})},initPieChart(){const e=Q.Ts(this.$refs.pieChart);e.setOption({title:{text:"产品销售占比"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"销售占比",type:"pie",radius:"60%",data:[{value:335,name:"产品A"},{value:234,name:"产品B"},{value:158,name:"产品C"},{value:135,name:"产品D"}]}]})},initLineChart(){const e=Q.Ts(this.$refs.lineChart);e.setOption({title:{text:"年度趋势分析"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Q1","Q2","Q3","Q4"]},yAxis:{type:"value"},series:[{data:[820,932,901,934],type:"line",smooth:!0}]})}},mounted(){this.initBarChart(),this.initPieChart(),this.initLineChart()}};const W=(0,k.A)(I,[["render",B],["__scopeId","data-v-72f38ab9"]]);var H=W,M={name:"App",components:{TodoList:L,ElementDemo:O,ChartsDemo:H}};const $=(0,k.A)(M,[["render",i]]);var K=$,J=o(1571);o(4188);const R=(0,n.Ef)(K);R.use(J.A),R.mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,a){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],a=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,l,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,r=n[0],i=n[1],s=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(s)var u=s(o)}for(t&&t(n);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkmyvue"]=self["webpackChunkmyvue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6230)}));n=o.O(n)})();
//# sourceMappingURL=app.c4090b43.js.map