"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6509],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Traits and Types",m={unversionedId:"internal-design/trait-and-type",id:"internal-design/trait-and-type",title:"Traits and Types",description:"Entity",source:"@site/docs/09-internal-design/01-trait-and-type.md",sourceDirName:"09-internal-design",slug:"/internal-design/trait-and-type",permalink:"/SeaORM/docs/next/internal-design/trait-and-type",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/09-internal-design/01-trait-and-type.md",tags:[],version:"current",lastUpdatedBy:"Sanford Pun",lastUpdatedAt:1640968089,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Active Model",permalink:"/SeaORM/docs/next/advanced-query/custom-active-model"},next:{title:"Derive Macros",permalink:"/SeaORM/docs/next/internal-design/derive-macro"}},d=[{value:"Entity",id:"entity",children:[],level:2},{value:"Column",id:"column",children:[],level:2},{value:"Primary Key",id:"primary-key",children:[],level:2},{value:"Model",id:"model",children:[],level:2},{value:"Active Model",id:"active-model",children:[],level:2},{value:"Active Enum",id:"active-enum",children:[],level:2},{value:"Relation",id:"relation",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Linked",id:"linked",children:[],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"traits-and-types"},"Traits and Types"),(0,i.kt)("h2",{id:"entity"},"Entity"),(0,i.kt)("p",null,"A unit struct that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," representing a table in the database."),(0,i.kt)("p",null,"This trait contains the properties of an entity including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Table Name (implemented ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityName")),")"),(0,i.kt)("li",{parentName:"ul"},"Column (implemented ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ColumnTrait")),")"),(0,i.kt)("li",{parentName:"ul"},"Relation (implemented ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTrait")),")"),(0,i.kt)("li",{parentName:"ul"},"Primary Key (implemented ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," and ",(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn")),")")),(0,i.kt)("p",null,"This trait also provides an API for CRUD actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select: ",(0,i.kt)("inlineCode",{parentName:"li"},"find"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"find_*")),(0,i.kt)("li",{parentName:"ul"},"Insert: ",(0,i.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"insert_*")),(0,i.kt)("li",{parentName:"ul"},"Update: ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"update_*")),(0,i.kt)("li",{parentName:"ul"},"Delete: ",(0,i.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"delete_*"))),(0,i.kt)("h2",{id:"column"},"Column"),(0,i.kt)("p",null,"An enum that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," representing all columns of the table and the column types and attributes."),(0,i.kt)("p",null,"It also implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to column identifier with static lifetime"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all column variants")),(0,i.kt)("h2",{id:"primary-key"},"Primary Key"),(0,i.kt)("p",null,"An enum that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," representing the primary key. Each primary key variant must have a corresponding column variant."),(0,i.kt)("p",null,"It also implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to primary key identifier with static lifetime"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all primary key variants")),(0,i.kt)("h2",{id:"model"},"Model"),(0,i.kt)("p",null,"A struct that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," storing the query result in memory. This is intended for readonly purposes, and it is stateless."),(0,i.kt)("p",null,"It also implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," converts raw query result into corresponding model")),(0,i.kt)("h2",{id:"active-model"},"Active Model"),(0,i.kt)("p",null,"A struct that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," representing insert/update actions. This is intended to be edited and saved into database."),(0,i.kt)("p",null,"It also implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveModelBehavior"))," defines handlers for different actions on an active model")),(0,i.kt)("h2",{id:"active-enum"},"Active Enum"),(0,i.kt)("p",null,"A enum that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," representing value stored in database as a Rust enum variant."),(0,i.kt)("h2",{id:"relation"},"Relation"),(0,i.kt)("p",null,"An enum that implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," defined relations with other entities."),(0,i.kt)("p",null,"It also implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all relation variants")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("p",null,"A generic trait, ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Related")),", defines join paths to help you query related entities together, especially helpful in many-to-many relations."),(0,i.kt)("h2",{id:"linked"},"Linked"),(0,i.kt)("p",null,"A trait, ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Linked")),", defines complex join paths including chained relation, self referencing relation and multiple relations between two entities."))}s.isMDXComponent=!0}}]);