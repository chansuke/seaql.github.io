"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2591],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,_=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return t?a.createElement(_,l(l({ref:n},m),{},{components:t})):a.createElement(_,l({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8377:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],c={},o="Create Table",s={unversionedId:"generate-database-schema/create-table",id:"version-0.5.x/generate-database-schema/create-table",title:"Create Table",description:"To create tables in database instead of writing TableCreateStatement manually, you can derive it from Entity using Schema::createtablefromentity. This method will help you create a database table including all the columns and foreign key constraints defined in Entity.",source:"@site/versioned_docs/version-0.5.x/04-generate-database-schema/01-create-table.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-table",permalink:"/SeaORM/docs/generate-database-schema/create-table",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/04-generate-database-schema/01-create-table.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1641018762,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:1,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Enumeration",permalink:"/SeaORM/docs/generate-entity/enumeration"},next:{title:"Create Enum",permalink:"/SeaORM/docs/generate-database-schema/create-enum"}},m=[],d={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-table"},"Create Table"),(0,i.kt)("p",null,"To create tables in database instead of writing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,i.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," manually, you can derive it from ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity")),". This method will help you create a database table including all the columns and foreign key constraints defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("p",null,"Below we use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_filling_price.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"CakeFillingPrice"))," entity to demo its generated SQL statement. You can construct the same statement with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,i.kt)("inlineCode",{parentName:"a"},"TableCreateStatement")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query::*, tests_cfg::*, EntityName, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    builder.build(\n        &Table::create()\n            .table(CakeFillingPrice.table_ref())\n            .col(\n                ColumnDef::new(cake_filling_price::Column::CakeId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::FillingId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::Price)\n                    .decimal()\n                    .not_null(),\n            )\n            .primary_key(\n                Index::create()\n                    .name("pk-cake_filling_price")\n                    .col(cake_filling_price::Column::CakeId)\n                    .col(cake_filling_price::Column::FillingId)\n                    .primary(),\n            )\n            .foreign_key(\n                ForeignKeyCreateStatement::new()\n                    .name("fk-cake_filling_price-cake_filling")\n                    .from_tbl(CakeFillingPrice)\n                    .from_col(cake_filling_price::Column::CakeId)\n                    .from_col(cake_filling_price::Column::FillingId)\n                    .to_tbl(CakeFilling)\n                    .to_col(cake_filling::Column::CakeId)\n                    .to_col(cake_filling::Column::FillingId),\n            )\n            .to_owned()\n    )\n);\n')),(0,i.kt)("p",null,"To further illustrate it, we will show the SQL statement as string below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PostgreSQL"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_postgres,\n        vec![\n            r#"CREATE TABLE "public"."cake_filling_price" ("#,\n            r#""cake_id" integer NOT NULL,"#,\n            r#""filling_id" integer NOT NULL,"#,\n            r#""price" decimal NOT NULL,"#,\n            r#"CONSTRAINT "pk-cake_filling_price" PRIMARY KEY ("cake_id", "filling_id"),"#,\n            r#"CONSTRAINT "fk-cake_filling_price-cake_filling" FOREIGN KEY ("cake_id", "filling_id") REFERENCES "cake_filling" ("cake_id", "filling_id")"#,\n            r#")"#,\n        ]\n        .join(" ")\n    )\n);\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MySQL"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_mysql,\n        vec![\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` int NOT NULL,",\n            "`filling_id` int NOT NULL,",\n            "`price` decimal NOT NULL,",\n            "PRIMARY KEY `pk-cake_filling_price` (`cake_id`, `filling_id`),",\n            "CONSTRAINT `fk-cake_filling_price-cake_filling` FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SQLite"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_sqlite,\n        vec![\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` integer NOT NULL,",\n            "`filling_id` integer NOT NULL,",\n            "`price` real NOT NULL,",\n            "CONSTRAINT `pk-cake_filling_price`PRIMARY KEY (`cake_id`, `filling_id`),",\n            "FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n')))))}u.isMDXComponent=!0}}]);