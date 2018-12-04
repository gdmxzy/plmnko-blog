(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(s,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"nginx负载均衡及相关策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx负载均衡及相关策略","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx负载均衡及相关策略")]),s._v(" "),e("blockquote",[e("p",[s._v("Nginx是一款开源的、跨平台的、高性能的HTTP服务器和反向代理服务器, 同时也是一个IMAP/POP3/SMTP电子邮件代理服务；Nginx可以作为一个HTTP服务器进行网站的发布处理，另外nginx可以作为反向代理进行负载均衡的实现。")])]),s._v(" "),e("h3",{attrs:{id:"关于代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于代理","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于代理")]),s._v(" "),e("p",[s._v("所谓代理其实就是一个中介、一个渠道，代理操作过程即是被代理角色通过代理访问目标角色完成特定任务的过程。")]),s._v(" "),e("h3",{attrs:{id:"关于代理服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于代理服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于代理服务器")]),s._v(" "),e("h3",{attrs:{id:"关于负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于负载均衡","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于负载均衡")]),s._v(" "),e("p",[s._v("随着业务量的增加，访问量和数据流量的快速增长，使得当前系统的处理能力和计算强度也相应地增大，单一的服务器设备已无法满足当前需求。在此情况下，如果扔掉现有设备去做大量的硬件升级，这样将造成现有资源的浪费，而且如果再面临下一次业务量的提升时，这又将导致再一次硬件升级的高额成本投入，甚至性能再卓越的设备也不能满足当前业务量增长的需求。")]),s._v(" "),e("p",[s._v("负载均衡建立在现有网络结构之上，它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力、提高网络的灵活性和可用性。\n负载均衡"),e("code",[s._v("Load Balance")]),s._v("其意思就是分摊到多个操作单元上进行执行，例如Web服务器、FTP服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。")]),s._v(" "),e("h3",{attrs:{id:"正向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正向代理","aria-hidden":"true"}},[s._v("#")]),s._v(" 正向代理")]),s._v(" "),e("h3",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理","aria-hidden":"true"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),e("h3",{attrs:{id:"nginx负载均衡相关策略及其配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx负载均衡相关策略及其配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Nginx负载均衡相关策略及其配置")]),s._v(" "),e("h4",{attrs:{id:"_1-基于轮询的均衡策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-基于轮询的均衡策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 基于轮询的均衡策略")]),s._v(" "),e("p",[s._v("对进入到nginx的request按照遍历的方式进行分发")]),s._v(" "),e("p",[e("code",[s._v("upstream")]),s._v("块定义后端小集群，"),e("code",[s._v("myapp")]),s._v("是集群名字，对于所有符合/的request，将会交到"),e("code",[s._v("http://myapp")]),s._v("此集群处理")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http {\n    upstream myapp {\n        server srv1.example.com;\n        server srv2.example.com;\n        server srv3.example.com;\n    }\n    server {\n        listen 80;\n        location / {\n            proxy-pass http://myapp;\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h4",{attrs:{id:"_2-基于最少连接数的均衡策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于最少连接数的均衡策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 基于最少连接数的均衡策略")]),s._v(" "),e("p",[s._v("指nginx会判断后端集群服务端中哪个server当前的"),e("code",[s._v("Active Connection")]),s._v("数是最少的，那么对于每个新进来的request，nginx将该request分发到对应的server")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http {\n    upstream myapp {\n        least_conn;\n        server srv1.example.com;\n        server srv2.example.com;\n        server srv3.example.com;\n    }\n    server {\n        listen 80;\n        location / {\n            proxy-pass http://myapp;\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h4",{attrs:{id:"_3-基于ip-hash的均衡策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-基于ip-hash的均衡策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 基于ip-hash的均衡策略")]),s._v(" "),e("p",[s._v("由于每个请求的客户端都有相应的ip地址，nginx会根据相应的hash函数，把每个请求的ip作为关键字，得到的hash值将决定把请求分发给对应的server进行处理")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http {\n    upstream myapp {\n        ip_hash;\n        server srv1.example.com;\n        server srv2.example.com;\n        server srv3.example.com;\n    }\n    server {\n        listen 80;\n        location / {\n            proxy-pass http://myapp;\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h4",{attrs:{id:"_4-基于加权轮询的均衡策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-基于加权轮询的均衡策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. 基于加权轮询的均衡策略")]),s._v(" "),e("p",[s._v("加权轮询即nginx会给server配置相应的权重，权重越大，接收的request数将越多")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http {\n    upstream myapp {\n        server srv1.example.com weight = 3;\n        server srv2.example.com;\n        server srv3.example.com;\n    }\n    server {\n        listen 80;\n        location / {\n            proxy-pass http://myapp;\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])])}],!1,null,null,null);r.options.__file="load_balancing_strategy.md";a.default=r.exports}}]);