module.exports = [
"[project]/app/[username]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Username = ({ params })=>{
    // In Next.js 15, params is a Promise. You must 'use' it.
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-sky-950 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold",
            children: [
                "Welcome, ",
                resolvedParams.username,
                "!"
            ]
        }, void 0, true, {
            fileName: "[project]/app/[username]/page.js",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/[username]/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Username;
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
];

//# sourceMappingURL=app_%5Busername%5D_page_515c08db.js.map