(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{168:function(n,t,e){"use strict";e.r(t);var o=e(0),c=e(1),s=e(21),r=e(82),i=e.n(r),a=function(){return Object(c.useEffect)((function(){}),[]),Object(o.jsx)(i.a,{source:'---\ntitle: tips_1 \ndate: 2020-07-17 22:21:21\ntags: [tips]\n---\n\n```react\nclass Clock extends React.Component {\n  constructor(props){\n    super(props)\n    this.state = {\n      date: new Date()\n    }\n  }\n\n  componentDidMount(){\n    this.timerId = setInterval(()=>this.tick(),1000);\n  }\n\n  componentWillUnmount(){\n    clearInterval(this.timerId)\n  }\n\n  tick(){\n    this.setState({\n      date: new Date()\n    })\n  }\n\n  render(){\n    return (\n      <div>\n        <h1>hello</h1>\n        <h2>it is {this.state.date.toLocaleTimeString()} now.</h2>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(\n  <Clock />,\n  document.getElementById("root")\n)\n\n```\n\n\u6267\u884c\u987a\u5e8f\uff1a\n\n- ```<Clock />```\u88ab\u4f20\u5165```ReactDOM.render()```\uff0c\u8c03\u7528Clock\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570```constructor()```\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a```state```\n- React\u8c03\u7528Clock\u7ec4\u4ef6\u7684```render()```\u65b9\u6cd5\uff0c\u66f4\u65b0DOM\u6765\u6e32\u67d3\n- ```CLock```\u7684\u8f93\u51fa\u63d2\u5165\u5230DOM\u4e2d\u540e\uff0cReact\u8c03\u7528```ComponentDidMount```\u65b9\u6cd5\u3002\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5411\u6d4f\u89c8\u5668\u8bf7\u6c42\u4e86\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u6bcf\u79d2\u8c03\u7528\u4e00\u6b21\u7ec4\u4ef6\u7684```tick()```\u65b9\u6cd5\u3002\n- ```tick()```\u65b9\u6cd5\u4e2d\u8c03\u7528```setState()```\u65b9\u6cd5\uff0c\u4fee\u6539\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u8ba1\u5212UI\u7684\u66f4\u65b0\u3002React\u5728```setState()```\u65b9\u6cd5\u88ab\u8c03\u7528\u540e\u5c31\u77e5\u9053\u7ec4\u4ef6\u7684\u72b6\u6001\u88ab\u6539\u53d8\u4e86\uff0c\u91cd\u65b0\u8c03\u7528```render()```\u65b9\u6cd5\uff0c\u800c\u6b64\u65f6```render()```\u65b9\u6cd5\u4e2d\u7684```this.state.date()```\u5c31\u4e0d\u4e00\u6837\u4e86\uff0c\u9875\u9762\u4e0a\u6e32\u67d3\u7684\u5185\u5bb9\u4e5f\u4e0d\u4e00\u6837\u4e86\u3002\n- \u5f53Clock\u7ec4\u4ef6\u4eceDOM\u4e2d\u88ab\u79fb\u9664\uff0c\u5c31\u4f1a\u8c03\u7528```componentWillUnmount()```\u65b9\u6cd5\uff0c\u4f1a\u628a\u8ba1\u65f6\u5668\u6e05\u7a7a\u3002\n\n\n',escapeHtml:!1})};t.default=function(){return Object(o.jsx)(s.a,{title:"Blog detail",description:"Read blog",children:Object(o.jsx)(a,{})})}}}]);
//# sourceMappingURL=7.0f0144f3.chunk.js.map