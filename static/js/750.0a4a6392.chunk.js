"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[750],{750:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});n(791);var a=n(350),r=n(184),i=function(e){var s=e.data;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:s.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:s.link,children:s.school}),", ",s.year]})]})})},t=function(e){var s=e.data;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),s.map((function(e,s){return(0,r.jsx)(i,{data:e},s)}))]})};t.defaultProps={data:[]};var c=t,l=function(e){var s=e.data;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:s.link,children:s.company})," - ",s.position]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",s.daterange]})]}),(0,r.jsx)("ul",{className:"points",children:s.points.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})},d=function(e){var s=e.data;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),s.map((function(e){return(0,r.jsx)(l,{data:e},e.company)}))]})};d.defaultProps={data:[]};var u=d,o=function(e){var s=e.data,n=e.last;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("h4",{className:"course-number",children:[s.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:s.title}),!n&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};o.defaultProps={last:!1};var h=o,m=function(e){return e.sort((function(e,s){var n=0;return e.university>s.university?n=-1:e.university<s.university||e.number>s.number?n=1:e.number<s.number&&(n=-1),n})).map((function(s,n){return(0,r.jsx)(h,{data:s,last:n===e.length-1},s.title)}))},x=function(e){var s=e.data;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:m(s)})]})};x.defaultProps={data:[]};var j=x,p=[{title:"Advanced Computer Vision",number:"CSCI-677",university:"USC"},{title:"Machine Learning",number:"CSCI-567",university:"USC"}],v=[{school:"University of Southern California",degree:"M.S. Computer Science",link:"https://usc.edu",year:2022},{school:"University of Southern California",degree:"B.S. Computer Science",link:"https://usc.edu",year:2020}],f=[{company:"Amazon",position:"Software Development Engineer I",link:"https://amazon.com",daterange:"July 2022 - Present",points:["AWS Lambda"]}],N=["Education","Experience","Skills","Courses","References"],y=function(){return(0,r.jsx)(a.Z,{title:"Resume",description:"Xizhem's Resume.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:"Resume"}),(0,r.jsx)("div",{className:"link-container",children:N.map((function(e){return(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,r.jsx)(c,{data:v}),(0,r.jsx)(u,{data:f}),(0,r.jsx)(j,{data:p})]})})}}}]);
//# sourceMappingURL=750.0a4a6392.chunk.js.map