(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa0c43fc"],{b218:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:{"background-image":"url(./gameAssets/numberBaseball/Image/bg2.jpg)","background-size":"300px"}},[s("img",{staticClass:"ForLogo",attrs:{src:t.logo}}),s("div",{staticClass:"row"},[s("div",{staticClass:"small-6 columns text-center"},[s("div",{staticStyle:{"max-width":"400px"}},t._l(t.life,(function(e){return s("img",{key:e.id,staticStyle:{width:"30%"},attrs:{src:t.imgurl}})})),0)])]),s("h1",[t._v(t._s(t.result))]),s("form",{attrs:{"text-center":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitForm.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"answer",attrs:{maxlength:"4"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),s("button",[t._v("입력")])]),s("div",[t._v("시도 : "+t._s(t.tries.length))]),t._v(" "),s("ul",t._l(t.tries,(function(e){return s("li",{key:e.try},[s("div",[t._v(t._s(e.try))]),s("div",[t._v(t._s(e.result))])])})),0)])},a=[],i=(s("a434"),s("a15b"),s("d81d"),s("ac1f"),s("1276"),s("caad"),s("2532"),s("99af"),function(){for(var t=[1,2,3,4,5,6,7,8,9],e=[],s=0;s<4;s+=1){var r=t.splice(Math.floor(Math.random()*(9-s)),1)[0];e.push(r)}return e}),n={data:function(){return{answer:i(),tries:[],value:"",result:"",imgurl:"./gameAssets/numberBaseball/Image/bg2.jpg",logo:"./gameAssets/numberBaseball/Image/bg5.jpg"}},methods:{onSubmitForm:function(t){if(this.value===this.answer.join(""))this.tries.push({try:this.value,result:"홈런"}),this.result="홈런",alert("게임을 다시 실행합니다."),this.value="",this.tries=[],this.$refs.answer.focus();else{this.tries.length>=9&&(this.result="10번 넘게 틀려서 실패! 답은 ".concat(this.answer.join(","),"였습니다."),alert("게임을 다시 시작합니다."),this.value="",this.answer=i(),this.tries=[],this.$refs.answer.focus());for(var e=0,s=0,r=this.value.split("").map((function(t){return parseInt(t)})),a=0;a<4;a+=1)r[a]===this.answer[a]?e++:this.answer.includes(r[a])&&s++;this.tries.push({try:this.value,result:"".concat(e," 스크라이크, ").concat(s," 볼입니다.")})}this.value="",this.$refs.answer.focus()}}},u=n,l=(s("db2b"),s("2877")),o=Object(l["a"])(u,r,a,!1,null,null,null);e["default"]=o.exports},db2b:function(t,e,s){"use strict";s("e78d")},e78d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-fa0c43fc.6790a860.js.map