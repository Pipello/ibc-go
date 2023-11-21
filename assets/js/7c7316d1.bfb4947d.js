"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[621],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},71339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Keeper API",sidebar_label:"Keeper API",sidebar_position:3,slug:"/apps/interchain-accounts/legacy/keeper-api"},o="Keeper API",c={unversionedId:"apps/interchain-accounts/legacy/keeper-api",id:"version-v8.0.x/apps/interchain-accounts/legacy/keeper-api",title:"Keeper API",description:"Deprecation Notice",source:"@site/versioned_docs/version-v8.0.x/02-apps/02-interchain-accounts/10-legacy/03-keeper-api.md",sourceDirName:"02-apps/02-interchain-accounts/10-legacy",slug:"/apps/interchain-accounts/legacy/keeper-api",permalink:"/v8/apps/interchain-accounts/legacy/keeper-api",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:3,frontMatter:{title:"Keeper API",sidebar_label:"Keeper API",sidebar_position:3,slug:"/apps/interchain-accounts/legacy/keeper-api"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v8/apps/interchain-accounts/legacy/integration"},next:{title:"Overview",permalink:"/v8/ibc/light-clients/overview"}},s={},l=[{value:"Deprecation Notice",id:"deprecation-notice",level:2},{value:"<code>RegisterInterchainAccount</code>",id:"registerinterchainaccount",level:2},{value:"<code>SendTx</code>",id:"sendtx",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keeper-api"},"Keeper API"),(0,a.kt)("h2",{id:"deprecation-notice"},"Deprecation Notice"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This document is deprecated and will be removed in future releases"),"."),(0,a.kt)("p",null,"The controller submodule keeper exposes two legacy functions that allow respectively for custom authentication modules to register interchain accounts and send packets to the interchain account."),(0,a.kt)("h2",{id:"registerinterchainaccount"},(0,a.kt)("inlineCode",{parentName:"h2"},"RegisterInterchainAccount")),(0,a.kt)("p",null,"The authentication module can begin registering interchain accounts by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterInterchainAccount"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"if err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, connectionID, owner.String(), version); err != nil {\n  return err\n}\n\nreturn nil\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," argument is used to support ICS-29 fee middleware for relayer incentivization of ICS-27 packets. Consumers of the ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterInterchainAccount")," are expected to build the appropriate JSON encoded version string themselves and pass it accordingly. If an empty string is passed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," argument, then the version will be initialized to a default value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," callback of the controller's handler, so that channel handshake can proceed."),(0,a.kt)("p",null,"The following code snippet illustrates how to construct an appropriate interchain accounts ",(0,a.kt)("inlineCode",{parentName:"p"},"Metadata")," and encode it as a JSON bytestring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n  Version:                icatypes.Version,\n  ControllerConnectionId: controllerConnectionID,\n  HostConnectionId:       hostConnectionID,\n  Encoding:               icatypes.EncodingProtobuf,\n  TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n  return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(appVersion)); err != nil {\n  return err\n}\n")),(0,a.kt)("p",null,"Similarly, if the application stack is configured to route through ICS-29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS-29 ",(0,a.kt)("inlineCode",{parentName:"p"},"Metadata")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n  Version:                icatypes.Version,\n  ControllerConnectionId: controllerConnectionID,\n  HostConnectionId:       hostConnectionID,\n  Encoding:               icatypes.EncodingProtobuf,\n  TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n  return err\n}\n\nfeeMetadata := feetypes.Metadata{\n  AppVersion: string(appVersion),\n  FeeVersion: feetypes.Version,\n}\n\nfeeEnabledVersion, err := feetypes.ModuleCdc.MarshalJSON(&feeMetadata)\nif err != nil {\n  return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(feeEnabledVersion)); err != nil {\n  return err\n}\n")),(0,a.kt)("h2",{id:"sendtx"},(0,a.kt)("inlineCode",{parentName:"h2"},"SendTx")),(0,a.kt)("p",null,"The authentication module can attempt to send a packet by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"SendTx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Authenticate owner\n// perform custom logic\n    \n// Construct controller portID based on interchain account owner address\nportID, err := icatypes.NewControllerPortID(owner.String())\nif err != nil {\n  return err\n}\n    \n// Obtain data to be sent to the host chain. \n// In this example, the owner of the interchain account would like to send a bank MsgSend to the host chain. \n// The appropriate serialization function should be called. The host chain must be able to deserialize the transaction. \n// If the host chain is using the ibc-go host module, `SerializeCosmosTx` should be used. \nmsg := &banktypes.MsgSend{FromAddress: fromAddr, ToAddress: toAddr, Amount: amt}\ndata, err := icatypes.SerializeCosmosTx(keeper.cdc, []proto.Message{msg})\nif err != nil {\n  return err\n}\n\n// Construct packet data\npacketData := icatypes.InterchainAccountPacketData{\n  Type: icatypes.EXECUTE_TX,\n  Data: data,\n}\n\n// Obtain timeout timestamp\n// An appropriate timeout timestamp must be determined based on the usage of the interchain account.\n// If the packet times out, the channel will be closed requiring a new channel to be created.\ntimeoutTimestamp := obtainTimeoutTimestamp()\n\n// Send the interchain accounts packet, returning the packet sequence\n// A nil channel capability can be passed, since the controller submodule (and not the authentication module) \n// claims the channel capability since ibc-go v6.\nseq, err = keeper.icaControllerKeeper.SendTx(ctx, nil, portID, packetData, timeoutTimestamp)\n")),(0,a.kt)("p",null,"The data within an ",(0,a.kt)("inlineCode",{parentName:"p"},"InterchainAccountPacketData")," must be serialized using a format supported by the host chain.\nIf the host chain is using the ibc-go host chain submodule, ",(0,a.kt)("inlineCode",{parentName:"p"},"SerializeCosmosTx")," should be used. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"InterchainAccountPacketData.Data")," is serialized using a format not supported by the host chain, the packet will not be successfully received."))}d.isMDXComponent=!0}}]);