(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/about/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
//   transition:{ duration: 0.6 }
// };
// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };
// export default function AboutDocAI() {
//   return (
//     <section className="bg-gradient-to-b from-blue-50 via-white to-green-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             About 
//         <Link
//           href="/" className="text-white m-4 hover:text-blue-300 transition duration-300">
//          DOC.<span className="text-blue-400">AI</span>
//         </Link>
//           </h1>
//           <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
//             Doc.AI is an AI-powered healthcare platform designed to assist
//             doctors and patients with early disease prediction, preventive
//             care, and personalized medical insights.
//           </p>
//         </motion.div>
//         {/* What is Doc.AI */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="grid md:grid-cols-2 gap-12 items-center mb-20"
//         >
//           <motion.div variants={fadeUp}>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               What is Doc.AI?
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Doc.AI combines artificial intelligence with clinical knowledge
//               to analyze patient symptoms, lab reports, vitals, and medical
//               history.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               It supports early detection of diabetes, heart disease, and
//               maternal health risks, enabling timely medical intervention.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             className="bg-gray-50 rounded-xl p-8 shadow-sm"
//           >
//             <ul className="space-y-4 text-gray-700">
//               <li>✔ AI-assisted disease prediction</li>
//               <li>✔ Preventive healthcare analytics</li>
//               <li>✔ Personalized treatment insights</li>
//               <li>✔ Secure & ethical data handling</li>
//             </ul>
//           </motion.div>
//         </motion.div>
//         {/* Mission & Vision */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="grid md:grid-cols-2 gap-12 mb-20"
//         >
//           <motion.div
//             variants={fadeUp}
//             className="bg-blue-50 p-8 rounded-xl"
//           >
//             <h3 className="text-xl font-semibold text-blue-800 mb-3">
//               Our Mission
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               To make quality healthcare accessible using AI-driven early
//               disease detection and preventive care.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             className="bg-green-50 p-8 rounded-xl"
//           >
//             <h3 className="text-xl font-semibold text-green-800 mb-3">
//               Our Vision
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               To transform healthcare by empowering doctors with intelligent
//               clinical decision support systems.
//             </p>
//           </motion.div>
//         </motion.div>
//         {/* How It Works */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="mb-20"
//         >
//           <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
//             How Doc.AI Works
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: "Data Collection", desc: "Collects symptoms, reports, and vitals." },
//               { title: "AI Analysis", desc: "ML models analyze health patterns." },
//               { title: "Prediction", desc: "Predicts disease probability." },
//               { title: "Doctor Support", desc: "Assists doctors in decision-making." }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
//               >
//                 <h4 className="font-semibold mb-2">{item.title}</h4>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//         {/* Ethics */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="bg-gray-900 text-white rounded-2xl p-10 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-4">
//             Ethical & Responsible AI
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             Doc.AI follows ethical AI practices, ensuring transparency,
//             fairness, and data privacy while assisting—not replacing—
//             medical professionals.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>DocAIPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './appaboutBook with bookmark.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
function DocAIPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "20d8beda7bd953d5fb2ae7ec9f069aa37aa798661bc4f23343d47caaf24f4caf") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "20d8beda7bd953d5fb2ae7ec9f069aa37aa798661bc4f23343d47caaf24f4caf";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            duration: 0.8
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-6xl font-extrabold text-gray-900",
            children: [
                "Smarter Healthcare with",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent",
                    children: "DOC.AI"
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 221,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 221,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-lg text-gray-600",
            children: "AI-powered disease prediction, preventive care, and intelligent doctor assistance."
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen flex items-center justify-center px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                transition: t0,
                className: "text-center max-w-4xl",
                children: [
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                className: "px-6 py-3 bg-blue-600 text-white rounded-xl",
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 231,
                                columnNumber: 253
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#ethics",
                                className: "px-6 py-3 border border-blue-600 text-blue-600 rounded-xl",
                                children: "Ethics"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 231,
                                columnNumber: 340
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 231,
                        columnNumber: 205
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 231,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 231,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            once: true
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: fadeUp,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-gray-800 mb-6",
                    children: "About Doc.AI"
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 247,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-4 leading-relaxed",
                    children: "Doc.AI was created to bridge the gap between massive medical data and timely clinical decisions. It uses artificial intelligence to analyze symptoms, reports, and vitals."
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 247,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: "Our goal is not to replace doctors, but to empower them with early predictions and intelligent insights."
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 247,
                    columnNumber: 335
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 247,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animationData: AI,
            className: "w-64 h-64 md:w-80 md:h-80"
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: t4,
                variants: stagger,
                className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeUp,
                        className: "bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center gap-8",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-gray-700 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: "✔ Early disease prediction"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about/page.js",
                                            lineNumber: 261,
                                            columnNumber: 419
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: "\u2714 Preventive & personalized care"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about/page.js",
                                            lineNumber: 261,
                                            columnNumber: 490
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: "✔ Doctor-first AI approach"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about/page.js",
                                            lineNumber: 261,
                                            columnNumber: 576
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: "✔ Secure medical data handling"
                                        }, void 0, false, {
                                            fileName: "[project]/app/about/page.js",
                                            lineNumber: 261,
                                            columnNumber: 647
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/about/page.js",
                                    lineNumber: 261,
                                    columnNumber: 371
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about/page.js",
                            lineNumber: 261,
                            columnNumber: 305
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 261,
                        columnNumber: 211
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 261,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 261,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            once: true
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold text-center mb-14",
            children: "Why Choose Doc.AI?"
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 277,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-white px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: t8,
                variants: stagger,
                className: "max-w-6xl mx-auto",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-10",
                        children: [
                            "Detects risks before symptoms worsen",
                            "Assists doctors with clinical insights",
                            "Reduces diagnostic delay"
                        ].map(_DocAIPageAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 284,
                        columnNumber: 170
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 284,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center",
                children: [
                    [
                        "95%",
                        "Prediction Accuracy"
                    ],
                    [
                        "10+",
                        "Disease Models"
                    ],
                    [
                        "24/7",
                        "AI Monitoring"
                    ],
                    [
                        "100%",
                        "Data Privacy"
                    ]
                ].map(_DocAIPageAnonymous2)
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 291,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            once: true
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold text-center mb-16",
            children: "How Doc.AI Works"
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: t12,
                variants: stagger,
                className: "max-w-7xl mx-auto",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: [
                            "Secure Data Collection",
                            "AI Pattern Analysis",
                            "Early Risk Prediction",
                            "Doctor Decision Support"
                        ].map(_DocAIPageAnonymous3)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 314,
                        columnNumber: 163
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 314,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-gray-50 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6",
                        children: "AI That Assists, Not Replaces"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 321,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: "Doc.AI provides predictive insights and data-driven recommendations. Final diagnosis and treatment decisions are always made by qualified medical professionals."
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 321,
                        columnNumber: 175
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 321,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            once: true
        };
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            duration: 0.7
        };
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "ethics",
            className: "py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: t16,
                variants: fadeUp,
                transition: t17,
                className: "max-w-6xl mx-auto bg-gray-900 text-white rounded-3xl p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-4",
                        children: "Ethical & Responsible AI"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 346,
                        columnNumber: 238
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 max-w-3xl mx-auto",
                        children: "Built with transparency, fairness, and strict data privacy — Doc.AI follows responsible AI principles in healthcare."
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 346,
                        columnNumber: 311
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 346,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-gradient-to-b from-blue-50 via-white to-green-50",
            children: [
                t3,
                t7,
                t10,
                t11,
                t14,
                t15,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-24 text-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-6",
                            children: "Ready for Smarter Healthcare?"
                        }, void 0, false, {
                            fileName: "[project]/app/about/page.js",
                            lineNumber: 353,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/app/about/page.js",
                            lineNumber: 353,
                            columnNumber: 232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 353,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    return t19;
}
_c = DocAIPage;
function _DocAIPageAnonymous3(step, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: fadeUp,
        className: "bg-white/80 backdrop-blur p-6 rounded-xl shadow-md text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-700",
            children: step
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 361,
            columnNumber: 125
        }, this)
    }, i_1, false, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 361,
        columnNumber: 10
    }, this);
}
function _DocAIPageAnonymous2(t0, i_0) {
    const [value, label] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-4xl font-bold",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 365,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm mt-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 365,
                columnNumber: 72
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 365,
        columnNumber: 10
    }, this);
}
function _DocAIPageAnonymous(text, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: fadeUp,
        className: "p-8 rounded-xl shadow-lg text-center hover:scale-105 transition",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-700",
            children: text
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 368,
            columnNumber: 124
        }, this)
    }, i, false, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 368,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DocAIPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_about_page_99364efe.js.map