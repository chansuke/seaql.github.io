"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2407],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Using `sea-orm-cli`",c={unversionedId:"generate-entity/sea-orm-cli",id:"generate-entity/sea-orm-cli",title:"Using `sea-orm-cli`",description:"First, install sea-orm-cli with cargo.",source:"@site/docs/03-generate-entity/01-sea-orm-cli.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/sea-orm-cli",permalink:"/SeaORM/docs/next/generate-entity/sea-orm-cli",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/03-generate-entity/01-sea-orm-cli.md",tags:[],version:"current",lastUpdatedBy:"Sanford Pun",lastUpdatedAt:1640968089,formattedLastUpdatedAt:"1/1/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debug Log",permalink:"/SeaORM/docs/next/install-and-config/debug-log"},next:{title:"Entity Structure",permalink:"/SeaORM/docs/next/generate-entity/entity-structure"}},u=[{value:"Configure Environment",id:"configure-environment",children:[],level:2},{value:"Getting Help",id:"getting-help",children:[],level:2},{value:"Generating Entity Files",id:"generating-entity-files",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-sea-orm-cli"},"Using ",(0,i.kt)("inlineCode",{parentName:"h1"},"sea-orm-cli")),(0,i.kt)("p",null,"First, install ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sea-orm-cli\n")),(0,i.kt)("h2",{id:"configure-environment"},"Configure Environment"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=sql://username:password@localhost/database\n")),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," flag on any CLI command or subcommand for help."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# List all available commands\n$ sea-orm-cli -h\n\n# List all subcommands available in `generate` command\n$ sea-orm-cli generate -h\n\n# Show how to use `generate entity` subcommand\n$ sea-orm-cli generate entity -h\n")),(0,i.kt)("h2",{id:"generating-entity-files"},"Generating Entity Files"),(0,i.kt)("p",null,"Discover all tables in a database and generate a corresponding SeaORM entity file for each table."),(0,i.kt)("p",null,"Supported databases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MySQL"),(0,i.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"SQLite")),(0,i.kt)("p",null,"Command line options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-u")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-url"),": database URL (default: DATABASE_URL specified in ENV)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-s")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--database-schema"),": database schema (default: DATABASE_SCHEMA specified in ENV)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For MySQL & SQLite, this argument is ignored"),(0,i.kt)("li",{parentName:"ul"},"For PostgreSQL, this argument is optional with default value 'public'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--output-dir"),": entity file output directory (default: current directory)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"--verbose"),": print debug messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--include-hidden-tables"),": generate entity files from hidden tables (tables with names starting with an underscore are hidden and ignored by default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--compact-format"),": generate entity file of ",(0,i.kt)("a",{parentName:"li",href:"/SeaORM/docs/next/generate-entity/entity-structure"},"compact format")," (default: true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--expanded-format"),": generate entity file of ",(0,i.kt)("a",{parentName:"li",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure"},"expanded format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--with-serde"),": automatically derive serde Serialize / Deserialize traits for the entity (",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"serialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deserialize"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"both"),") (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate entity files of database `bakery` to `src/entity`\n$ sea-orm-cli generate entity \\\n    -u sql://sea:sea@localhost/bakery \\\n    -o src/entity\n")))}m.isMDXComponent=!0}}]);