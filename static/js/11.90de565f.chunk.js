(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[11],{165:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(21),i=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(i,{data:e},e.school)}))]})};o.defaultProps={data:[]};var a=o,l=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("p",{className:"description",children:t.description}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(l,{data:e},e.company)}))]})};u.defaultProps={data:[]};var d=u;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var c=m(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return h(this,n)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},k=function(e){var t=e.data,n=e.categories,c=t.category,s=t.competency,i=t.title,o={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},a=g(g({},o),{},{width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:o,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:a}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};k.defaultProps={categories:[]};var x=k,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,c,s=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return g(g({},n),{},y({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return g(g({},e),{},y({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Skills"})}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),c&&p(t,c),i}(c.Component);w.defaultProps={skills:[],categories:[]};var S=w,N=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var P=N,C=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};C.defaultProps={data:[]};var D=C,M=[{title:"Software Engineering Concepts in Practice",number:"COMP61511",link:"https://studentnet.cs.manchester.ac.uk/pgt/COMP61511/syllabus/",university:"UoM"},{title:"Agile and Test-Driven Development",number:"COMP62521",link:"https://www.manchester.ac.uk/study/masters/courses/list/02069/msc-advanced-computer-science/course-details/COMP62521#course-unit-details",university:"UoM"},{title:"Modelling Data on the Web",number:"COMP60411",link:"https://www.manchester.ac.uk/study/masters/courses/list/02069/msc-advanced-computer-science/course-details/COMP60411#course-unit-details",university:"UoM"},{title:"Querying Data on the Web",number:"COMP62421",link:"https://www.manchester.ac.uk/study/masters/courses/list/02069/msc-advanced-computer-science/course-details/COMP62421#course-unit-details",university:"UoM"}],E=[{school:"University of Manchester",degree:"M.S. Advanced Computer Science: Software Engineering",link:"https://www.manchester.ac.uk/",year:2021},{school:"Shanghai University",degree:"B.S. Computer Science and Technology",link:"https://www.shu.edu.cn/",year:2017}],A=[{company:"Genial",position:"Co-founder",link:"http://www.genial.ltd",daterange:"December 2020 - May 2021",description:"Tried to build career connections for users by matching them with others and setting up video meetings for them.",points:["Built the site and deployed it onto Aliyun cloud server.","Used Agora sdk for video meeting module."]},{company:"Qiniu Cloud ltd.",position:"Front-end Software Engineer Intern",link:"https://www.qiniu.com/",daterange:"July 2020 - November 2020",description:"Worked on machine data analysis platform: Pandora 2.0.",points:["Develop React components for new features;","Write components docs with Storybook;","Write unit tests with Jest."]},{company:"Dangfei Tech",position:"Software Engineer Summer Intern",link:"http://wudizu.com",daterange:"July 2019 - August 2019",description:"Produced softwares to meet customers' requirements.",points:["Develop Wechat mini-programs using Vue.js(uni-app), Express.js and mongodb.","Work with teams in agile development process"]},{company:"Shanghai Tunnel Engineering Co. Ltd.",position:"IT Support Summer Intern",link:"https://www.stec.net/",daterange:"July 2018 - August 2018",points:["Install, configure and maintain hardware, software, operating system, network, etc;","Provide technical support for employees."]}],W=n(17);var J=n(23);var T,R=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:2,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Heroku",competency:1,category:["Web Development","Tools"]},{title:"MongoDB",competency:1,category:["Web Development","Databases"]},{title:"Express.JS",competency:1,category:["Web Development","Javascript"]},{title:"Git",competency:2,category:["Tools"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + CSS",competency:3,category:["Web Development","Languages"]}].map((function(e){return g(g({},e),{},{category:e.category.sort()})})),I=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(T=new Set(R.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(W.a)(e)}(T)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(T)||Object(J.a)(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:I[t]}}));t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)(a,{data:E}),Object(r.jsx)(d,{data:A}),Object(r.jsx)(S,{skills:R,categories:_}),Object(r.jsx)(D,{data:M})]})})}}}]);
//# sourceMappingURL=11.90de565f.chunk.js.map