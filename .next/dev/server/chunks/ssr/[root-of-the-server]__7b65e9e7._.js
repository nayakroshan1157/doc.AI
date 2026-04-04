module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/login/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation"; 
// import Link from "next/link"; 
// const Login = () => { // REMOVED 'async' from here
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(""); 
//     const router = useRouter();
//     const handleSubmit = async (e) => { // 'async' stays here!
//         e.preventDefault();
//         setError(""); 
//         try {
//             const result = await signIn("credentials", {
//                 email: email,
//                 password: password,
//                 redirect: false, 
//             });
//             if (result?.error) {
//                 setError("Login Failed: Invalid email or password");
//             } else {
//                 // Success! Redirect to profile
//                 router.push("/profile");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             setError("An unexpected error occurred.");
//         }
//     };
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <form className="bg-white p-8 rounded-2xl shadow-lg w-96" onSubmit={handleSubmit}>
//                 <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">LOGIN</h2>
//                 {error && (
//                     <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded text-center">
//                         {error}
//                     </div>
//                 )}
//                 <div className="mb-4">
//                     <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
//                     <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold shadow-md">
//                     Login
//                 </button>
//             </form>
//             <p className="text-sm text-center mt-4 text-gray-600">
//                 Don't have an account?{" "}
//                 <Link href="/register" className="text-blue-500 hover:underline">
//                     Register
//                 </Link>
//             </p>
//         </div>
//     );
// };
// export default Login;
}),
"[project]/app/login/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/login/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7b65e9e7._.js.map