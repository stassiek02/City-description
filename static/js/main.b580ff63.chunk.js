(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,t,e){n.exports=e(38)},38:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(19),o=e.n(i),c=e(3),u=e.n(c),s=e(10),l=e(22),f=e(4),p=e(5),g=e(8),m=e(7),h=e(6),d=e(9),b=e(1),v=e(2),x=e(12),y=e.n(x);function j(){var n=Object(b.a)(["\n  border: 2px solid #16a085;\n  font-size: 1.7rem;\n  margin: 0;\n  padding: 20px;\n  width: 200px;\n  height: 20px;\n  margin-bottom: 10px;\n  font-weight:500;\n  & ~ ul {\n    margin-bottom: 0;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(b.a)(["\n  width: 200px;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  transition: 0.2s background-color;\n\n  &:focus,\n  &:hover {\n    background-color: #16a085;\n  }\n  &:last-child {\n    margin-bottom: 30px;\n  }\n"]);return O=function(){return n},n}function w(){var n=Object(b.a)(["\n  list-style: none;\n  margin-top: -10px;\n  padding: 0;\n"]);return w=function(){return n},n}var k=v.b.ul(w()),S=v.b.li(O()),E=v.b.input(j()),C=function(n){function t(n){var e;return Object(f.a)(this,t),(e=Object(g.a)(this,Object(m.a)(t).call(this,n))).onClick=function(n){e.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:n.currentTarget.innerText},function(){return e.props.afterSubmit(e.state.userInput,n)}),console.log(n.currentTarget.innerText),y.a.set("LastSearch",n.currentTarget.innerText)},e.onChange=function(n){var t=e.props.suggestions,r=n.currentTarget.value,a=t.filter(function(n){return n.toLowerCase().indexOf(r.toLowerCase())>-1});e.setState({activeSuggestion:0,filteredSuggestions:a,showSuggestions:!0,userInput:n.currentTarget.value})},e.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},e}return Object(d.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({userInput:y.a.get("LastSearch")||""})}},{key:"render",value:function(){var n,t=this.onChange,e=this.onClick,r=this.onKeyDown,i=this.state,o=i.filteredSuggestions,c=i.showSuggestions,u=i.userInput;return c&&u&&(n=a.a.createElement(k,null,o.map(function(n,t){return a.a.createElement(S,{key:t,onClick:e},n)}))),a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{type:"text",onChange:t,value:u,placeholder:"Write your country",onKeyDown:r,autocomplete:"off"}),n)}}]),t}(r.Component);C.defaultProperty={suggestions:[]};var D=C,I=e(16);function T(){var n=Object(b.a)(['\n  font-family: "Open Sans", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n  margin-left:20px;\n']);return T=function(){return n},n}function z(){var n=Object(b.a)(["\n  background-color: white;\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  \n"]);return z=function(){return n},n}function P(){var n=Object(b.a)(['\n  font-family: "Open Sans", sans-serif;\n  font-weight: 600;\n  font-size: 1.7rem;\n']);return P=function(){return n},n}function F(){var n=Object(b.a)(["\n  background-color: ",";\n  color: #ecf0f1;\n  cursor: pointer;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  border:0;\n  border-bottom:1px solid white;\n  outline: none;\n  transform: translateX(\n    ","\n  );\n  transition: background-color 0.4s ease, transform 0.3s;\n  &:hover {\n    background-color: #1abc9c;\n  }\n  \n"]);return F=function(){return n},n}function L(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return L=function(){return n},n}var A=v.b.div(L()),M=v.b.button(F(),function(n){return"active"===n.setActive?"#27ae60":"#2ecc71"},function(n){return"active"===n.setActive?"20px":"0"}),W=v.b.p(P()),G=v.b.div(z()),H=v.b.p(T());function J(n){var t=Object(r.useState)(""),e=Object(I.a)(t,2),i=e[0],o=e[1],c=Object(r.useState)("0px"),u=Object(I.a)(c,2),s=u[0],l=u[1],f=Object(r.useRef)(null);return a.a.createElement(A,null,a.a.createElement(M,{onClick:function(){o(""===i?"active":""),l("active"===i?"0px":"".concat(f.current.scrollHeight,"px"))},setActive:i},a.a.createElement(W,null,n.title)),a.a.createElement(G,{ref:f,style:{maxHeight:"".concat(s)}},a.a.createElement(H,null," ",n.content)))}J.defaultProps={title:"",content:""};var K=J;function R(){var n=Object(b.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,500');\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    font-size: 1.6rem;\n    font-family: \"Montserrat\", sans-serif;\n  }\n"]);return R=function(){return n},n}var _=Object(v.a)(R());function q(){var n=Object(b.a)(["\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n \n"]);return q=function(){return n},n}function B(){var n=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return B=function(){return n},n}var X={Spain:"ES",Poland:"PL",Germany:"DE",France:"FR"},N=v.b.div(B()),Q=v.b.div(q()),U=function(n){function t(n){var e;return Object(f.a)(this,t),(e=Object(g.a)(this,Object(m.a)(t).call(this,n))).state={cities:[],country:""},e.getInputData=e.getInputData.bind(Object(h.a)(e)),e}return Object(d.a)(t,n),Object(p.a)(t,[{key:"filterCities",value:function(n){var t=this,e=Object(l.a)(new Set(n.map(function(n){return n.city.split("/")[0]}))).slice(0,10);this.setState({cities:e},function(){return t.getWikiData(t.state)})}},{key:"getInputData",value:function(n){var t=this;this.setState({country:n},function(){return t.getData()})}},{key:"getData",value:function(){var n=Object(s.a)(u.a.mark(function n(){var t=this;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openaq.org/v1/measurements?limit=200&parameter=pm25&order_by=value&sort=desc&country="+X[this.state.country]).then(function(n){return n.json()}).then(function(n){return t.filterCities(n.results)}).catch(function(n){return console.error("Error:",n)});case 2:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"getWikiData",value:function(){var n=Object(s.a)(u.a.mark(function n(t){var e,r=this;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=t.cities.map(function(){var n=Object(s.a)(u.a.mark(function n(t){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat("https://cors-anywhere.herokuapp.com/","https://en.wikipedia.org/api/rest_v1/page/summary/").concat(t)).then(function(n){return n.json()}).then(function(n){return n.extract}).catch(function(n){return console.error("Error:",n)}));case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()),Promise.all(e).then(function(n){return r.setState({desc:n})});case 2:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,t=this.state.cities;return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null),a.a.createElement(N,null,a.a.createElement(Q,null,a.a.createElement(D,{suggestions:["Spain","Poland","Germany","France"],afterSubmit:this.getInputData})),a.a.createElement(Q,null,this.state.desc?t.map(function(t,e){return a.a.createElement(K,{title:t,content:n.state.desc[e],key:e})}):null)))}}]),t}(r.Component);o.a.render(a.a.createElement(U,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b580ff63.chunk.js.map