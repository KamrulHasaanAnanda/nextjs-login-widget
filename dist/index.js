"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("lucide-react");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e);const l=({onLogin:a})=>{const[l,n]=e.useState(""),[o,s]=e.useState(""),[u,c]=e.useState(""),[d,m]=e.useState(!1);return r.default.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.default.createElement("div",{className:"max-w-md w-full space-y-8"},r.default.createElement("div",null,r.default.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Sign in to your account")),r.default.createElement("form",{className:"mt-8 space-y-6",onSubmit:e=>{e.preventDefault(),l&&o?(a(l),c("")):c("Please fill in all fields")}},r.default.createElement("div",{className:"rounded-md shadow-sm -space-y-px"},r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"username",className:"sr-only"},"Username"),r.default.createElement("input",{id:"username",name:"username",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",value:l,onChange:e=>n(e.target.value)})),r.default.createElement("div",{className:"relative"},r.default.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),r.default.createElement("input",{id:"password",name:"password",type:d?"text":"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:o,onChange:e=>s(e.target.value)}),r.default.createElement("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5",onClick:()=>m(!d)},d?r.default.createElement(t.EyeOff,{className:"h-5 w-5 text-gray-400"}):r.default.createElement(t.Eye,{className:"h-5 w-5 text-gray-400"})))),u&&r.default.createElement("div",{className:"text-red-500 text-sm mt-2"},u),r.default.createElement("div",null,r.default.createElement("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Sign in")))))},n=({username:e,onLogout:t})=>r.default.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},r.default.createElement("div",{className:"max-w-md w-full space-y-8"},r.default.createElement("div",null,r.default.createElement("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Welcome, ",e,"!")),r.default.createElement("div",{className:"mt-8 space-y-6"},r.default.createElement("button",{onClick:t,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Log out"))));exports.AuthWrapper=()=>{const[t,a]=e.useState(null);return React.createElement("div",null,t?React.createElement(n,{username:t,onLogout:()=>{a(null)}}):React.createElement(l,{onLogin:e=>{a(e)}}))},exports.DisplayComponent=n,exports.LoginComponent=l;
//# sourceMappingURL=index.js.map
