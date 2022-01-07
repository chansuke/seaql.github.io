"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7574],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,v=c["".concat(m,".").concat(d)]||c[d]||p[d]||i;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6788:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],u={},m="Enumeration",l={unversionedId:"generate-entity/enumeration",id:"generate-entity/enumeration",title:"Enumeration",description:"You can use Rust enums in model where the values are mapped to a database string, integer or native enum.",source:"@site/docs/03-generate-entity/04-enumeration.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/enumeration",permalink:"/SeaORM/docs/next/generate-entity/enumeration",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/03-generate-entity/04-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1641018762,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},next:{title:"Create Table",permalink:"/SeaORM/docs/next/generate-database-schema/create-table"}},s=[{value:"Implementations",id:"implementations",children:[{value:"Derive Implementation",id:"derive-implementation",children:[],level:3},{value:"Manual Implementation",id:"manual-implementation",children:[],level:3}],level:2},{value:"Using ActiveEnum on Model",id:"using-activeenum-on-model",children:[],level:2}],p={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumeration"},"Enumeration"),(0,i.kt)("p",null,"You can use Rust enums in model where the values are mapped to a database string, integer or native enum."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"String"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Integer"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Native Database Enum"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')))),(0,i.kt)("h2",{id:"implementations"},"Implementations"),(0,i.kt)("p",null,"You can implement ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/entity/trait.ActiveEnum.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," manually by hand or use the derive macro ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/derive.DeriveActiveEnum.html"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum")),"."),(0,i.kt)("h3",{id:"derive-implementation"},"Derive Implementation"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/derive.DeriveActiveEnum.html"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," for the full specification of macro attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// Using the derive macro\n#[derive(Debug, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(\n    rs_type = "String",\n    db_type = "String(Some(1))",\n    enum_name = "category"\n)]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n')),(0,i.kt)("h3",{id:"manual-implementation"},"Manual Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// Implementing it manually\n#[derive(Debug, PartialEq, EnumIter)]\npub enum Category {\n    Big,\n    Small,\n}\n\nimpl ActiveEnum for Category {\n    // The macro attribute `rs_type` is being pasted here\n    type Value = String;\n\n    // By default, the name of Rust enum in camel case if `enum_name` was not provided explicitly\n    fn name() -> String {\n        "category".to_owned()\n    }\n\n    // Map Rust enum variants to corresponding `num_value` or `string_value`\n    fn to_value(&self) -> Self::Value {\n        match self {\n            Self::Big => "B",\n            Self::Small => "S",\n        }\n        .to_owned()\n    }\n\n    // Map `num_value` or `string_value` to corresponding Rust enum variants\n    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {\n        match v.as_ref() {\n            "B" => Ok(Self::Big),\n            "S" => Ok(Self::Small),\n            _ => Err(DbErr::Type(format!(\n                "unexpected value for Category enum: {}",\n                v\n            ))),\n        }\n    }\n\n    // The macro attribute `db_type` is being pasted here\n    fn db_type() -> ColumnDef {\n        ColumnType::String(Some(1)).def()\n    }\n}\n')),(0,i.kt)("h2",{id:"using-activeenum-on-model"},"Using ActiveEnum on Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n// Define the `Category` active enum\n#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // Represents a db column using `Category` active enum\n    pub category: Category,\n    pub category_opt: Option<Category>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')))}c.isMDXComponent=!0}}]);