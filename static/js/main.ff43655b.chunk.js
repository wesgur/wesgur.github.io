(this["webpackJsonpwesgur.github.io"]=this["webpackJsonpwesgur.github.io"]||[]).push([[0],{104:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),l=a.n(o),i=a(36),c=(a(104),a(26)),s=a(9),m=a(7),p=a.n(m),u=a(154),d=a(8),h=a(50),g=a.n(h),E=function(e){return r.a.createElement("h1",{className:p()(g.a.brand,Object(d.a)({},g.a.large,e.large))},r.a.createElement("a",{target:"_self",href:e.url},r.a.createElement("small",null,e.subtitle),e.title))},f=a(25),b=a(75),y=a(76),v=a(89),w=a(88),x=a(179),k=a(34),j=a.n(k),N={transition:"height ".concat(200,"ms ease-in-out")},_={entering:j.a.collapsing,entered:j.a.expanded,exiting:j.a.collapsing,exited:j.a.collapsed},C=function(e){Object(v.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleEnter=function(e){e.style.transition=N.transition,e.style.height="0"},e.handleEntering=function(e){e.style.height="".concat(e.scrollHeight,"px")},e.handleEntered=function(e){e.style.transition=null,e.style.height=null},e.handleExit=function(e){e.style.transition=N.transition,e.style.height="".concat(e.offsetHeight,"px"),e.offsetHeight},e.handleExiting=function(e){e.style.height="0"},e.handleExited=function(e){e.style.transition=null,e.style.height=null},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{in:this.props.in,timeout:200,onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered,onExit:this.handleExit,onExiting:this.handleExiting,onExited:this.handleExited},(function(t){return r.a.cloneElement(e.props.children,{className:p()(e.props.children.props.className,_[t])})}))}}]),a}(n.Component),O=a(51),S=a.n(O),I=function(e){return r.a.createElement("div",{onClick:e.onClick,className:p()(S.a.overlay,Object(d.a)({},S.a.show,e.show))})},D=a(20),A=a.n(D),T=r.a.createContext({expanded:!1}),B=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],l=a[1],i={expanded:o,setExpanded:l};return r.a.createElement(T.Provider,{value:i},r.a.createElement("header",{className:p()(A.a.navbar,Object(d.a)({},A.a.expanded,o))},e.children),r.a.createElement(I,{show:o,onClick:function(){l(!1)}}))};B.Collapse=function(e){var t=Object(n.useContext)(T).expanded;return r.a.createElement(C,{in:t},r.a.createElement("div",{className:A.a.navCollapse},e.children))},B.Toggle=function(){var e=Object(n.useContext)(T),t=e.expanded,a=e.setExpanded;return r.a.createElement("button",{type:"button",onClick:function(){a&&a(!t)},className:p()(A.a.navToggle,Object(d.a)({},A.a.active,t))},r.a.createElement("span",null))},B.List=function(e){return r.a.createElement("nav",{className:A.a.nav},e.children)},B.Menu=function(e){var t=Object(n.useContext)(T),a=t.expanded,o=t.setExpanded;return r.a.createElement(c.b,{to:e.to,exact:e.exact,onClick:function(){a&&o(!a)},className:A.a.navItem,activeClassName:A.a.active},e.label)},B.Footer=function(e){return r.a.createElement("div",{className:p()(A.a.footer)},e.children)};var G=B,P=a(54),M=a.n(P),W=[{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"Resume",path:"/resume"}],L=function(e){return r.a.createElement("div",{className:p()(M.a.menu)},R(W))},R=function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t,className:p()(M.a.items)},r.a.createElement(c.b,{to:e.path}," ",e.title," "))}))},z=a(77),H=a.n(z),F="".concat("","/"),J={title:"Dong Hyuk Jin",subtitle:"Johnny"},K=function(e){return r.a.createElement(G,null,r.a.createElement(U,null,r.a.createElement(E,Object.assign({},J,{url:F})),r.a.createElement(L,null)))},U=function(e){return r.a.createElement(u.a,{className:p()(H.a.content)},e.children)};K.Content=U;var q=K,V=a(78),Q=a.n(V),Y=function(e){return r.a.createElement("div",{className:p()(Q.a.container)},e.children)},X=a(155),Z=a(158),$=a(159),ee=a(22),te=a(82),ae=a(157),ne=Object(X.a)((function(e){return{root:{},row:Object(d.a)({minHeight:"400px",padding:"2em"},e.breakpoints.down("sm"),{padding:"1em"}),divider:{marginTop:"1em",marginBottom:"1em"}}})),re=function(e){var t=ne();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.row},e.children),r.a.createElement(ae.a,{variant:"middle",className:t.divider}))},oe=Object(X.a)((function(e){return{root:{textTransform:"uppercase",fontWeight:"bold",marginBottom:"1em"}}})),le=function(e){var t=oe();return r.a.createElement("h4",{className:t.root}," ",e.children," ")},ie=Object(X.a)((function(e){return{profile_img:{display:"block",height:"auto",width:"200px",margin:"2em auto 6em auto"},intro:Object(d.a)({fontSize:"1.8em",fontFamily:"Roboto",textAlign:"center",margin:"2em 3em",height:"fit-content"},e.breakpoints.down("sm"),{margin:0}),flexBox:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px"},skillsGridContainer:{marginTop:"2em"},skillsGridItem:{display:"flex",justifyContent:"center"},technology:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"auto","& > h4":{marginTop:"1em",marginBottom:"0"},"& > p":{marginTop:"0",textAlign:"center"},"& > svg":{margin:"auto"}}}})),ce=function(){var e=ie();return r.a.createElement("div",{className:e.root},r.a.createElement(re,null,r.a.createElement("div",{className:e.flexBox},r.a.createElement("p",{className:e.intro}," Hello! My name is Dong Hyuk (Johnny) Jin, and I'm a Software Developer based @Toronto, Canada "))),r.a.createElement(re,null,r.a.createElement(le,null," About "),r.a.createElement("p",null," I recently graduated from University of Toronto with Honours Bachelors of Science in Computer Science on May 2020. "),r.a.createElement("p",null," Outside of work, I enjoy scheming through open source projects seeking for new technologies and contributing to stackoverflow. "),r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,md:6},r.a.createElement("h5",{style:{fontWeight:"bold"}}," Interests "),r.a.createElement("ul",null,r.a.createElement("li",null," Software Development "),r.a.createElement("li",null," Cloud Computing "),r.a.createElement("li",null," Information Security "))),r.a.createElement(Z.a,{item:!0,md:6},r.a.createElement("h5",{style:{fontWeight:"bold"}}," Education "),r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement("h6",{style:{margin:0}}," ",r.a.createElement($.a,{style:{color:"#000"}})," BSc. in Computer Science, May 2020 "),r.a.createElement("h6",{style:{margin:"0 0 0 1.8em",color:"rgba(0,0,0,0.6)"}}," @University of Toronto ")),r.a.createElement("div",null,r.a.createElement("h6",{style:{margin:0}}," ",r.a.createElement($.a,{style:{color:"#000"}})," IB Diploma, May 2013 "),r.a.createElement("h6",{style:{margin:"0 0 0 1.8em",color:"rgba(0,0,0,0.6)"}}," @International School of Manila "))))),r.a.createElement(re,null,r.a.createElement(le,null," Technical Skills "),r.a.createElement(Z.a,{container:!0,spacing:3,className:e.skillsGridContainer},r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.e,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Javascript "),r.a.createElement("p",null," Node.js, Express, React "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.d,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Golang "),r.a.createElement("p",null," Gin, Echo, Cobra "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.f,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Python "),r.a.createElement("p",null," Flask, Beautifulsoup "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(te.a,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Database "),r.a.createElement("p",null," Mongo, MySQL, PostgreSQL, Redis "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.c,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," CI/CD "),r.a.createElement("p",null," Github Actions, Jenkins, Travis CI "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.b,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," DevOps "),r.a.createElement("p",null," Docker, Kubernetes, Nomad, Consul "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.a,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Cloud "),r.a.createElement("p",null," AWS EC2, ECS, API Gateway, Cloudformation "))),r.a.createElement(Z.a,{item:!0,xs:6,md:4,className:e.skillsGridItem},r.a.createElement("div",{className:e.technology},r.a.createElement(ee.g,{color:"#03afff",size:"4em"}),r.a.createElement("h4",null," Docs "),r.a.createElement("p",null," OpenAPI Specification, Swagger "))))))},se=Object(X.a)((function(e){return{divider:{marginBottom:"1em"},title:{fontFamily:"'Roboto', 'Gerogia'",fontWeight:"bold",fontSize:"24px",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"0.5em"}}})),me=function(e){var t=se();return r.a.createElement("div",null,r.a.createElement("h3",{className:p()(t.title)},e.title),r.a.createElement(ae.a,{className:t.divider}))},pe=(Object(X.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},about:{fontsize:"16px",fontFamily:"Roboto",margin:"1em 4em"},flag:{width:"60px",height:"auto",float:"right",marginRight:"1em"},timelineContent:{marginBottom:"5em"}}})),a(178)),ue=a(160),de=a(163),he=a(162),ge=a(161),Ee=a(164),fe=a(44),be=a(83),ye=a.n(be),ve=[{name:"Openvpn-ec2",summary:"CLI application to deploy configured OpenVPN server on cloud. Currently supports AWS EC2 on any regions. OpenVPN certificate is generated and can be downloaded through the app.",descriptions:["Developed with Golang urfave/cli framework along with AWS SDK","Supports cross platform (Mac/Linux)","Requires a personal AWS account"],img:"screenshots/openvpn-ec2.png",progress:"June 2020 - Ongoing",tech_stack:["golang","aws"],link:"",repository:"https://github.com/wesgur/openvpn-ec2",sandbox:"",private:!0},{name:"Personal Website",summary:"Personal website built with React and Material UI. Application is deployed to Github Pages. Github API integration to fetch recent activities and used Redis to cache activities.",descriptions:["Developed using React ","Docker setup for development environment","CI/CD setup with Github Actions","Automatic deployment to Github Pages"],img:"screenshots/homepage.png",progress:"April 2020 - Ongoing",tech_stack:["react","js","html","scss","css","github","docker"],link:"https://www.wesgur.com",repository:"https://github.com/wesgur/wesgur.github.io",private:!1},{name:"Perfect Pitch (DSCIL)",summary:"Responsive web application solving music licensing problems. Work done in a team of 2 as a part of software development and start up course in University of Toronto.",descriptions:["Developed with React","Restful API developed with Node.js and Express with OpenAPI specifications","Spotify API integration for authentication and user data","Mongo database used for persistent data","Docker and docker-compose setup for development environment","CI/CD setup with Github Actions deploying to Heroku instnace","Organize scrum board with Github Project Management"],img:"screenshots/perfect-pitch.png",progress:"Jan 2020 - May 2020",tech_stack:["react","html","css","js","nodejs","webpack","mongo","heroku","github","docker"],link:"https://perfect-pitch-web.herokuapp.com/",repository:"https://github.com/dcsil/perfect-pitch",private:!0},{name:"Cancer Care Ontario E-Health Application",summary:"A web application developed for a project course in University of Toronto. The project was developed in collaboration of Cancer Care Ontario to increase efficiency of data management between hospital departments.",descriptions:["Developed with React and Redux","Restful API developed with Node.js and Express","OpenAPI Documentation","Used mongo database for persistent data and caching","CI/CD with Travis CI deploying to Heroku instance","Docker setup for development and production environment","Elastic search integration for search enhancement"],img:"screenshots/cancer-care.png",progress:"Sept 2019 - Dec 2019",tech_stack:["react","redux","html","css","js","nodejs","mongo","heroku","travis","elastic","docker"],link:"",repository:"https://github.com/csc302-fall-2019/proj-Team4",private:!0},{name:"Youtube Music Metadata Parser",summary:"A web application designed to resolve music metadata from youtube links. This project was developed targeting users who requires metadata for sound files.",descriptions:["Service developed with Python Flask","Web crawling with Beautiful Soup library","jQuery used for DOM manipulation","Deployed on AWS EC2 instance"],img:"screenshots/youtube-parser.png",progress:"Jan 2018 - Discontinued",tech_stack:["python","flask","html","css","js","jquery","aws"],link:"",repository:"https://github.com/wesgur/youtube-music-metadata-parser",private:!0},{name:"English On The Go (Schoool)",summary:"Online mobile platform to both learn and teach English through user's own native language. This application was initially developed in a team of three developers. Developed server in Node.js and Express. This project is now continued by a different team.",description:["Maintained and managed supporting infrastructure and deployed services","Developed Restful APIs in Node.js and Express to support mobile platform","Design MySQL database schemas"],img:"screenshots/english-on-the-go.png",progress:"Jan 2015 - Nov 2015",tech_stack:[],link:"https://www.schoool.me/",repository:"",private:!0}],we=Object(X.a)((function(e){var t,a;return{root:(t={},Object(d.a)(t,e.breakpoints.down("lg"),{maxWidth:"100%"}),Object(d.a)(t,e.breakpoints.up("lg"),{maxWidth:340}),Object(d.a)(t,"marginBottom","1em"),Object(d.a)(t,"border","solid 1px rgba(0,0,0,0.25)"),Object(d.a)(t,"boxShadow","none !important"),Object(d.a)(t,"height","fit-content"),t),cardArea:{"& a:hover":{textDecoration:"none"}},cardContent:Object(d.a)({},e.breakpoints.up("md"),{minHeight:140}),cardMedia:(a={},Object(d.a)(a,e.breakpoints.down("lg"),{height:250}),Object(d.a)(a,e.breakpoints.up("lg"),{height:160}),a),grid:{display:"flex",justifyContent:"center"}}})),xe=function(e){return r.a.createElement(Z.a,{container:!0,spacing:0},e.children)},ke=function(e){var t=we();return r.a.createElement(Z.a,{item:!0,lg:6,className:t.grid},r.a.createElement(pe.a,{className:t.root},r.a.createElement(ue.a,{className:t.cardArea},r.a.createElement("a",{href:e.project.link?e.project.link:"#".concat(e.project.name),target:e.project.link?"_blank":"",rel:"noopener noreferrer"},r.a.createElement(ge.a,{alt:e.project.name,className:t.cardMedia,component:"img",image:e.project.img,title:e.project.name}),r.a.createElement(he.a,{className:t.cardContent},r.a.createElement(fe.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.project.name),r.a.createElement(fe.a,{variant:"body2",color:"textSecondary",component:"p"},e.project.summary)))),r.a.createElement(de.a,null,r.a.createElement(Ee.a,{size:"small",color:"primary",disabled:!0},"Share"),r.a.createElement(Ee.a,{size:"small",color:"primary",disabled:!e.project.link,target:"_blank",href:e.project.link?e.project.link:"#"},"Learn More"),r.a.createElement(Ee.a,{size:"small",color:"primary",disabled:!(e.project.repository&&!e.project.private),target:"_blank",href:e.project.repository?e.project.repository:"#"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"Code ",r.a.createElement(ye.a,{style:{width:"14px",height:"14px",marginLeft:"5px"}}))))))},je=function(e){return r.a.createElement("section",null,r.a.createElement(me,{title:"Projects"}),r.a.createElement(xe,null,ve.map((function(e,t){return r.a.createElement(ke,{project:e,key:t})}))))},Ne=Object(X.a)((function(e){return{root:{margin:"1em 0",fontWeight:"bold"}}})),_e=function(e){var t=Ne();return r.a.createElement("h4",{className:t.root},e.children)},Ce=[{school:"University of Toronto, St.Geroge",major:"Computer Science, Specialist",schoolLink:"https://www.utoronto.ca/",location:"Toronto, Canada",timeline:"Sept. 2013 - May. 2020"},{school:"International School Manila",major:"International Baccalaureate, Diploma",schoolLink:"https://www.ismanila.org/",location:"Manila, Philippines",timeline:"Nov. 2007 - May. 2013"}],Oe=Object(X.a)((function(e){return{education:{width:"100%",margin:"1rem 0"},timeline:{float:"right"}}})),Se=function(e){var t=Oe();return r.a.createElement(Z.a,{container:!0,spacing:0},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(_e,null," Education ")),Ce.map((function(e,a){return r.a.createElement("div",{className:t.education,key:a},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement("h5",null," ",e.major," @",r.a.createElement("a",{href:e.schoolLink},e.school))),r.a.createElement(Z.a,{container:!0,direction:"row"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",null," ",e.location," ")),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",{className:t.timeline}," ",e.timeline," "))))})))},Ie=[{companyName:"Bluecat Networks",position:"Software Developer Co-op",companyLink:"https://bluecatnetworks.com/",companyLocation:"Toronto, Canada",timeline:"Aug. 2017 - Aug. 2018",description:["Build AWS infrastructure from ground up to achieve zero downtime upgrade and enable remote deployment for containerized services.","Enable private dependency management in Go before modules were introduced.","Implement realtime notification services using sockets and long polling.","Reduce build time and CI/CD pipeline with Docker layer caching.","Participated in the design and implementation of a software defined networking system."]},{companyName:"Mobile C&C",position:"Software Developer Intern",companyLink:"https://www.mcnc.co.kr/publishing_en/main/html/main.html",companyLocation:"Seoul, South Korea",timeline:"Apr. 2014 - Sept. 2014",description:["Developed RESTful APIs with Spring Framework serving hybrid mobile applications.","Wrote unit and integration tests with JUnit."]}],De=Object(X.a)((function(e){return{root:{width:"100%",margin:"1em 0"},timeline:{float:"right"},description:{marginTop:"1em"}}})),Ae=function(e){var t=e.experience,a=De();return r.a.createElement("div",{className:a.root},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement("h5",{className:a.position}," ",t.position," @",r.a.createElement("a",{href:t.companyLink,target:"_blank",rel:"noopener noreferrer"},t.companyName," ")," ")),r.a.createElement(Z.a,{container:!0,direction:"row"},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",null," ",t.companyLocation," ")),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",{className:a.timeline}," ",t.timeline," "))),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement("ul",{className:a.description},t.description&&t.description.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",null," ",e," "))})))))},Te=function(e){return r.a.createElement(Z.a,{container:!0,spacing:0},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(_e,null,"Work Experience")),Ie.map((function(e,t){return r.a.createElement(Ae,{experience:e,key:t})})))},Be=Object(X.a)((function(e){return{root:{margin:"1em 0"},timeline:{float:"right"},description:{margin:"1em 0 0 0"}}})),Ge=function(e){var t=Be();return r.a.createElement("div",{className:t.root},r.a.createElement(Z.a,{container:!0,spacing:0},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(_e,null," Activity ")),r.a.createElement(Z.a,{item:!0,xs:12,className:t.description},r.a.createElement("h5",null," Topographic Analyst (Sergeant) @",r.a.createElement("a",{href:"http://www.army.mil.kr/webapp/user/indexMain.do?siteId=english"},"Republic of Korea Army"))),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",null," Haman, South Korea ")),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement("p",{className:t.timeline}," Dec. 2015 - Aug. 2017 ")),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement("ul",{className:t.description},r.a.createElement("li",null,"Wrote topographic analysis scripts with GIS packages providing terrain based analysis on ArcGIS"),r.a.createElement("li",null,"Built in-house standalone coordinate system conversion tool"),r.a.createElement("li",null,"Squad leader of 20 squad members conducting daily routines and meetings.")))))},Pe=Object(X.a)((function(e){return{root:{flexGrow:1,"& h4":{textAlign:"center",marginBottom:"1rem"},"& p,h5":{margin:0},"& > div":{margin:"1.5rem 0"}}}})),Me=function(e){var t=Pe();return r.a.createElement("div",{className:t.root},r.a.createElement(Te,null),r.a.createElement(ae.a,{variant:"middle"}),r.a.createElement(Se,null),r.a.createElement(ae.a,{variant:"middle"}),r.a.createElement(Ge,null))},We=function(e){return r.a.createElement("section",null,r.a.createElement(Me,null))},Le=a(84),Re=a.n(Le),ze=a(165),He=a(166),Fe=a(24),Je=a.n(Fe),Ke=function(e){var t=r.a.useState(!1),a=Object(f.a)(t,2),n=a[0],o=a[1];return r.a.createElement("section",{className:p()(Je.a["main-content"])},r.a.createElement(u.a,null,r.a.createElement(ze.a,null,r.a.createElement(He.a,{lg:8},e.children),r.a.createElement(He.a,{lg:4},r.a.createElement(pt,{setLayoutExpanded:o}),r.a.createElement(Et,{expanded:n,resumeLink:"https://www.dropbox.com/s/f4kinqwerf9soej/Resume.pdf?dl=1"})))))},Ue=a(85),qe=a.n(Ue),Ve=a(86),Qe=a.n(Ve),Ye=a(5),Xe=a(167),Ze=a(177),$e=a(176),et=a(171),tt=a(42),at=a(168),nt=a(169),rt=a(170),ot=a(175),lt=a(55),it=a(172),ct=a(173),st=a(174),mt=Object(X.a)((function(e){var t;return{root:(t={},Object(d.a)(t,e.breakpoints.down("lg"),{maxWidth:"100%"}),Object(d.a)(t,e.breakpoints.up("lg"),{maxWidth:345}),Object(d.a)(t,"backgroundColor","#F5F8F9"),Object(d.a)(t,"border","solid 1px #DBE1E5"),t),media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},emptyTimeline:{textAlign:"center",height:"20em",margin:"auto"},avatar:{backgroundColor:tt.a[500],height:"60px",width:"60px"},iconButton:{fontSize:0},collapsible:{maxHeight:"20em",overflow:"scroll",borderTop:"solid 1px rgba(0,0,0,0.15)"},timelineHash:{color:"#26abff"},actions:{borderTop:"solid 1px #DBE1E5"},cardContent:{fontSize:"14px",padding:"0 1em 0.5em 1em"},cardContentItem:{margin:"0.5em 0","& > svg":{marginRight:"0.5em"}}}})),pt=function(e){var t=mt(),a=Object(n.useState)(!1),o=Object(f.a)(a,2),l=o[0],i=o[1],c=Object(n.useState)([]),s=Object(f.a)(c,2),m=s[0],u=s[1],h={margin:"5px 0 0 0",padding:"5px",backgroundColor:"#F5F8F9",boxShadow:"none",lineHeight:"140%"},g={border:"solid 2px #26abff"};Object(n.useEffect)((function(){E()}),[]);var E=function(){qe.a.get("".concat("https://wesgur-api.herokuapp.com/api/v1","/events"),{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then((function(e){u(e.data)}))};return r.a.createElement("div",{className:p()(Je.a["sticky-card"])},r.a.createElement(pe.a,{className:t.root},r.a.createElement(Xe.a,{avatar:r.a.createElement($e.a,{className:t.avatar,src:"/img/profile.png"}),title:"Dong Hyuk Jin",titleTypographyProps:{variant:"subtitle1"},subheader:"Johnny",subheaderTypographyProps:{variant:"subtitle2"}}),r.a.createElement(he.a,{className:t.cardContent},r.a.createElement("div",{className:t.cardContentItem},r.a.createElement(at.a,null),r.a.createElement("a",{href:"mailto:wesgur@gmail.com"},"wesgur@gmail.com ")),r.a.createElement("div",{className:t.cardContentItem},r.a.createElement(nt.a,null),"+1 647 901 5355"),r.a.createElement("div",{className:t.cardContentItem},r.a.createElement(rt.a,null),r.a.createElement("a",{href:"https://www.wesgur.com"},"https://www.wesgur.com "))),r.a.createElement(de.a,{className:t.actions,disableSpacing:!0},r.a.createElement(et.a,{"aria-label":"Github",className:t.iconButton},r.a.createElement("a",{href:"https://www.github.com/wesgur",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(it.a,null))),r.a.createElement(et.a,{"aria-label":"LinkedIn",className:t.iconButton},r.a.createElement("a",{href:"https://www.linkedin.com/in/dong-hyuk-johnny-jin-76a06aaa/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ct.a,null))),r.a.createElement(et.a,{"aria-label":"Stackoverflow",className:t.iconButton},r.a.createElement("a",{href:"https://stackoverflow.com/users/3639630/wesgur",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(st.a,null))),r.a.createElement(et.a,{className:Object(Ye.a)(t.expand,Object(d.a)({},t.expandOpen,l)),onClick:function(){i(!l),e.setLayoutExpanded(!l)},"aria-expanded":l,"aria-label":"show more"},r.a.createElement(ot.a,null))),r.a.createElement(Ze.a,{in:l,timeout:"auto",unmountOnExit:!0,className:t.collapsible},r.a.createElement(he.a,null,m.length>0?r.a.createElement(lt.Timeline,null,m.map((function(e,a){return r.a.createElement(lt.TimelineEvent,{title:r.a.createElement("a",{href:e.commit_details.repo_url}," ",e.commit_details.repo," "),icon:r.a.createElement(it.a,null,"commit"),createdAt:Qe()(new Date(e.commit_details.date)).fromNow(),key:a,contentStyle:h,bubbleStyle:g},r.a.createElement("a",{href:e.commit_details.url,className:t.timelineHash},e.commit_hash.substring(0,7))," ",ut(e.commit_details.message))}))):r.a.createElement("div",{className:t.emptyTimeline},r.a.createElement("p",null," Please wait while server is being prepared. Server is idle at the moment. "))))))},ut=function(e){if("string"===typeof e&&e.includes("deploy:")){var t=e.split(":");e="deploy: ".concat(t[1].trim().substring(0,7))}return e},dt=a(87),ht=a.n(dt),gt=Object(X.a)((function(e){var t;return{root:(t={},Object(d.a)(t,e.breakpoints.down("lg"),{maxWidth:"100%"}),Object(d.a)(t,e.breakpoints.up("lg"),{maxWidth:345}),Object(d.a)(t,"backgroundColor","#F5F8F9"),Object(d.a)(t,"border","solid 1px #DBE1E5"),t),iconButton:{fontSize:0,padding:"1rem"},icon:{"&:hover, &:focus":{fill:"#26abff"}},content:{display:"flex",alignContent:"center",padding:"0px !important"}}})),Et=function(e){var t=gt();return r.a.createElement("div",{className:e.expanded?p()(Je.a.expandedCard):p()(Je.a.card)},r.a.createElement(pe.a,{className:t.root},r.a.createElement(he.a,{className:t.content},r.a.createElement(et.a,{"aria-label":"Download",className:t.iconButton},r.a.createElement("a",{href:e.resumeLink},r.a.createElement(ht.a,{className:t.icon}))),r.a.createElement("p",null," Download Resume "))))};var ft=function(){return r.a.createElement("div",{className:p()(Re.a.app)},r.a.createElement(i.a,null,r.a.createElement("title",null," ","Johnny Jin | Software Developer"," ")),r.a.createElement(c.a,null,r.a.createElement(q,null),r.a.createElement(Y,null,r.a.createElement(Ke,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:ce}),r.a.createElement(s.a,{path:"/projects",component:je}),r.a.createElement(s.a,{path:"/resume",component:We}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.b,null,r.a.createElement(ft,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports={navbar:"styles_navbar__1YVcw",expanded:"styles_expanded__2auFr",navToggle:"styles_navToggle__7p3Es",active:"styles_active__VotKM",nav:"styles_nav__1UT9f",navCollapse:"styles_navCollapse__27lv6",navItem:"styles_navItem__3uCyG",footer:"styles_footer__23Z9L"}},24:function(e,t,a){e.exports={"sticky-card":"styles_sticky-card__1xlpA",profile:"styles_profile__2aO2n",card:"styles_card__19KoS",expandedCard:"styles_expandedCard__2d8LW"}},34:function(e,t,a){e.exports={expanded:"styles_expanded__3KP5d",collapsed:"styles_collapsed__kOGbP",collapsing:"styles_collapsing__1BgrV"}},50:function(e,t,a){e.exports={brand:"styles_brand__32ua-",large:"styles_large__ZxTlh"}},51:function(e,t,a){e.exports={overlay:"styles_overlay__2QSgm",show:"styles_show__1K167"}},54:function(e,t,a){e.exports={menu:"styles_menu__3CwVq",items:"styles_items__32RFm"}},77:function(e,t,a){e.exports={content:"styles_content__2YGq0"}},78:function(e,t,a){e.exports={container:"styles_container__WXnXz"}},84:function(e,t,a){},97:function(e,t,a){e.exports=a(130)}},[[97,1,2]]]);
//# sourceMappingURL=main.ff43655b.chunk.js.map