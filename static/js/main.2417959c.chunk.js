(this["webpackJsonpreaact-app"]=this["webpackJsonpreaact-app"]||[]).push([[0],{51:function(t,e,a){},70:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},86:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(0),i=a(23),s=a.n(i),o=a(11),r=(a(51),a(6)),j=a(13),l=a(14),d=a(16),b=a(15),h=a(22),u=a.n(h),O=a(88),m=a(89),x=a(90),p=(a(70),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={abouts:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;u.a.get("https://siddiknogori.com/sn/api/abouts").then((function(e){t.setState({abouts:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return console.log(this.state.abouts),Object(c.jsx)(O.a,{children:Object(c.jsx)(m.a,{children:this.state.abouts.map((function(t,e){return Object(c.jsx)(x.a,{sm:12,lg:6,children:Object(c.jsxs)("div",{className:"cards-size-about",children:[Object(c.jsx)(o.Link,{to:"/details/".concat(t.title,"/").concat(t.details,"/").concat(t.image),children:Object(c.jsx)("img",{src:"https://siddiknogori.com/sn/images/upload/".concat(t.image),className:"img-size-about"})}),Object(c.jsx)("div",{className:"title-about",children:Object(c.jsx)("h3",{children:t.title})}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("p",{className:"card-text-about",children:t.details})})]},e)})}))})})}}]),a}(n.Component)),g=(a(79),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={audio:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;u.a.get("http://siddiknogori.com/sn/api/audio-books").then((function(e){t.setState({audio:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return console.log(this.state.audio),Object(c.jsx)(O.a,{children:Object(c.jsx)(m.a,{children:this.state.audio.map((function(t,e){return Object(c.jsx)(x.a,{sm:12,lg:6,children:Object(c.jsxs)("div",{className:"cards-size-audio",children:[Object(c.jsx)("img",{className:"img-size-audio",src:"https://lh3.googleusercontent.com/proxy/QncvymRHkhGrWkaBvmsuZwuLHrC0dRmGNO3p0zOc_AaVD5NxPGmhnWctR6AYZhaJbbilpjjrb4aZCjazHtnH-lj5IDSP-iRf3lIWygmKQHzaK8hq1TFAwHvKYSxNBzYCMDijJdsnQMh0Y2G-kr7dOSvambunpqmk5HAnpuhjuxF6UGaMco_XjGnNaU4L5hJKSBEG8etFNOwWtFE9SP0mDr2sitWRHiuX9MiJqmFdxWRgC6Wl0BVO9FeNJtZEM6xF1XAg-LyGibc7zpNrNE-V1mfuyV5huf7tWRO1ezaEKnMSxF2XaARU5J0vl30snTdX-0ULX9IGiNqFmUDsqikcpp0ZC3QviVX1ax9G9OfCfOrQP0HwrAGhIkIzvWBqTkRbO40SYyFz9kJ4noqjRAgOUAh2ZdEgXQ0Gn755inhc0oz2cW9ohgYPZDJ1Cp3oZlW1WqKf5jJYi_1UnuJdlk67bwf2yqYj5w",alt:""}),Object(c.jsx)("div",{className:"title-audio",children:Object(c.jsx)("h3",{children:t.title})}),Object(c.jsx)("div",{className:"audio-div",children:Object(c.jsx)("audio",{controls:!0,children:Object(c.jsx)("source",{src:"http://siddiknogori.com/sn/audio/".concat(t.audio_orginal),type:"audio/mp3"})})})]},e)})}))})})}}]),a}(n.Component)),k=(a(41),a(80),a(93)),v=(a(81),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(j.a)(this,a),(t=e.call(this)).state={articles:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;u.a.get("https://siddiknogori.com/sn/api/articles").then((function(e){t.setState({articles:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return console.log(this.state.articles),Object(c.jsx)(O.a,{children:Object(c.jsx)(m.a,{children:this.state.articles.map((function(t,e){return Object(c.jsx)(x.a,{sm:12,md:6,lg:4,xl:3,children:Object(c.jsxs)(k.a,{className:"card-size",children:[Object(c.jsx)(o.Link,{to:"/details/".concat(t.title,"/").concat(t.details,"/").concat(t.image),children:Object(c.jsx)(k.a.Img,{className:"img-size",variant:"top",src:"https://siddiknogori.com/sn/images/upload/".concat(t.image)})}),Object(c.jsxs)(k.a.Body,{children:[Object(c.jsx)(o.Link,{to:"/details/".concat(t.title,"/").concat(t.details,"/").concat(t.image),children:Object(c.jsx)(k.a.Title,{children:t.title})}),Object(c.jsx)(k.a.Text,{className:"card-text",children:t.details})]})]},e)})}))})})}}]),a}(n.Component)),f=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var c,n=t.match;return Object(j.a)(this,a),(c=e.call(this)).state={title:n.params.title,detail:n.params.details,image:n.params.images},c}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(O.a,{children:[Object(c.jsx)("h1",{children:this.state.title}),Object(c.jsx)("img",{src:"https://siddiknogori.com/sn/images/upload/".concat(this.state.image),alt:"",style:{width:"100%"}}),Object(c.jsx)("p",{children:this.state.detail})]})}}]),a}(n.Component),N=a(20),y=a(91),C=a(92),L=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{bg:"light",expand:"lg",children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(N.LinkContainer,{to:"/",children:Object(c.jsx)(y.a.Brand,{children:"XYZ"})}),Object(c.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(C.a,{className:"ml-auto",children:[Object(c.jsx)(N.LinkContainer,{to:"/",children:Object(c.jsx)(C.a.Link,{children:"Articles"})}),Object(c.jsx)(N.LinkContainer,{to:"/about",children:Object(c.jsx)(C.a.Link,{children:"About"})}),Object(c.jsx)(N.LinkContainer,{to:"/event",children:Object(c.jsx)(C.a.Link,{children:"Events"})}),Object(c.jsx)(N.LinkContainer,{to:"/grpmbr",children:Object(c.jsx)(C.a.Link,{children:"Group and Member"})}),Object(c.jsx)(N.LinkContainer,{to:"/adibk",children:Object(c.jsx)(C.a.Link,{children:"Audio Books"})}),Object(c.jsx)(N.LinkContainer,{to:"/ebk",children:Object(c.jsx)(C.a.Link,{children:"eBooks"})})]})})]})})})}}]),a}(n.Component);var z=function(){return Object(c.jsxs)(o.BrowserRouter,{children:[Object(c.jsx)(L,{}),Object(c.jsx)(r.d,{path:"/",component:v,exact:!0}),Object(c.jsx)(r.d,{path:"/details/:title/:details/:images",component:f}),Object(c.jsx)(r.d,{path:"/about",component:p}),Object(c.jsx)(r.d,{path:"/adibk",component:g})]})};s.a.render(Object(c.jsx)(o.BrowserRouter,{children:Object(c.jsx)(z,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.2417959c.chunk.js.map