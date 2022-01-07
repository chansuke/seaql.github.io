"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8573],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Async Programming",u={unversionedId:"introduction/async",id:"version-0.4.x/introduction/async",title:"Async Programming",description:"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind.",source:"@site/versioned_docs/version-0.4.x/01-introduction/02-async.md",sourceDirName:"01-introduction",slug:"/introduction/async",permalink:"/SeaORM/docs/0.4.x/introduction/async",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/01-introduction/02-async.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968085,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"What is an ORM",permalink:"/SeaORM/docs/0.4.x/introduction/orm"},next:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/0.4.x/introduction/sea-orm"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"async-programming"},"Async Programming"),(0,i.kt)("p",null,"Async programming in Rust is a recent development, only having been stabilized in Rust ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,i.kt)("inlineCode",{parentName:"a"},"1.39")),". The async ecosystem is rapidly evolving, and SeaORM is one of the first crates built from the ground up with async support in mind."),(0,i.kt)("p",null,"The first thing to learn is the ",(0,i.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Future"))," trait. It's a placeholder to a function that will compute and return some value in the future. It's lazy, meaning ",(0,i.kt)("inlineCode",{parentName:"p"},".await")," must first be called for anything to happen. ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," allows us to achieve concurrency with little programming effort, e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,i.kt)("inlineCode",{parentName:"a"},"future::join_all"))," to execute multiple queries in parallel."),(0,i.kt)("p",null,"Second, ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," in Rust is ",(0,i.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/03_async_await/01_chapter.html"},"multi-threaded programming")," with syntactic sugar. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," may move between threads, so any variables used in async bodies must be able to travel between threads, i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/nomicon/send-and-sync.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Send")),"."),(0,i.kt)("p",null,"Third, there are multiple async runtimes in Rust. Arguably, ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/actix"},(0,i.kt)("inlineCode",{parentName:"a"},"actix")),", ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,i.kt)("inlineCode",{parentName:"a"},"async-std"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,i.kt)("inlineCode",{parentName:"a"},"tokio"))," are the three most widely used. SeaORM's underlying driver, ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx"},(0,i.kt)("inlineCode",{parentName:"a"},"SQLx")),", supports all three."),(0,i.kt)("p",null,"Knowing these concepts is essential to get you up and running in async Rust."))}m.isMDXComponent=!0}}]);