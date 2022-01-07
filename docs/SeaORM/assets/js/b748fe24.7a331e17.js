"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8336],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,v=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Custom Active Model",u={unversionedId:"advanced-query/custom-active-model",id:"advanced-query/custom-active-model",title:"Custom Active Model",description:"Creating your own struct with partial fields of a model, which implements IntoActiveModel that can be converted into an ActiveModel with the method intoactivemodel. For example, it can be used as a form submission in a REST API.",source:"@site/docs/08-advanced-query/08-custom-active-model.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/custom-active-model",permalink:"/SeaORM/docs/next/advanced-query/custom-active-model",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/08-advanced-query/08-custom-active-model.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1640968088,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streaming",permalink:"/SeaORM/docs/next/advanced-query/streaming"},next:{title:"Traits and Types",permalink:"/SeaORM/docs/next/internal-design/trait-and-type"}},d=[],p={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-active-model"},"Custom Active Model"),(0,a.kt)("p",null,"Creating your own struct with partial fields of a model, which implements ",(0,a.kt)("inlineCode",{parentName:"p"},"IntoActiveModel")," that can be converted into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," with the method ",(0,a.kt)("inlineCode",{parentName:"p"},"into_active_model"),". For example, it can be used as a form submission in a REST API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IntoActiveValue")," trait allows converting ",(0,a.kt)("inlineCode",{parentName:"p"},"Option<T>")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveValue<T>")," with the method ",(0,a.kt)("inlineCode",{parentName:"p"},"into_active_value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Define regular model as usual\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n    pub cake_id: Option<i32>,\n}\n')),(0,a.kt)("p",null,"Create a new struct with some fields omitted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\n#[derive(DeriveIntoActiveModel)]\npub struct NewFruit {\n    // id is omitted\n    pub name: String,\n    // it is required as opposed to optional in Model\n    pub cake_id: i32,\n}\n\nassert_eq!(\n    NewFruit {\n        name: "Apple".to_owned(),\n        cake_id: 1,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: Set("Apple".to_owned()),\n        cake_id: Set(Some(1)),\n    }\n);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Option<Option<T>>")," allows for ",(0,a.kt)("inlineCode",{parentName:"p"},"Some(None)")," to update the column to be NULL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::ActiveValue::NotSet;\n\n#[derive(DeriveIntoActiveModel)]\npub struct UpdateFruit {\n    pub cake_id: Option<Option<i32>>,\n}\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(Some(1)),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: Set(Some(1)),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: Some(None),\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: Set(None),\n    }\n);\n\nassert_eq!(\n    UpdateFruit {\n        cake_id: None,\n    }\n    .into_active_model(),\n    fruit::ActiveModel {\n        id: NotSet,\n        name: NotSet,\n        cake_id: NotSet,\n    }\n);\n")))}s.isMDXComponent=!0}}]);