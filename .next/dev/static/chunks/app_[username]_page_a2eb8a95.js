(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/[username]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const Username = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0e96dc6e6941a64f4b3f1015a2cf960d0a7048a4b026073feae3801860bb3aa1") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e96dc6e6941a64f4b3f1015a2cf960d0a7048a4b026073feae3801860bb3aa1";
    }
    const { params } = t0;
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    let t1;
    if ($[1] !== resolvedParams.username) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-sky-950 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: [
                    "Welcome, ",
                    resolvedParams.username,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/app/[username]/page.js",
                lineNumber: 19,
                columnNumber: 95
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/[username]/page.js",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = resolvedParams.username;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = Username;
const __TURBOPACK__default__export__ = Username;
var _c;
__turbopack_context__.k.register(_c, "Username");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // "use client"; // MUST be the very first line
 // import React from 'react'
 // import { useSession } from 'next-auth/react'
 // // CORRECT IMPORT for App Router:
 // import { useRouter } from 'next/navigation' 
 // const Dashboard = () => {
 //   const router = useRouter();
 //   const { data: session, status } = useSession();
 //   // Loading state
 //   if (status === "loading") {
 //     return <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">Syncing Session...</div>;
 //   }
 //   // Redirect if not logged in
 //   if (status === "unauthenticated") {
 //     router.push("/login");
 //     return null;
 //   }
 //   return (
 //     <div className="min-h-screen bg-[#020617] text-white pt-28 px-8">
 //       <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
 //         <h1 className="text-3xl font-black italic uppercase tracking-tighter">
 //           Operator <span className="text-blue-400 not-italic">Dashboard</span>
 //         </h1>
 //         <p className="mt-4 text-gray-400">Welcome back, {session?.user?.name}</p>
 //       </div>
 //     </div>
 //   )
 // }
 // export default Dashboard;
}),
]);

//# sourceMappingURL=app_%5Busername%5D_page_a2eb8a95.js.map