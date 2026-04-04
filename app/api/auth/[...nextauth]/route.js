import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ADD THIS TO FIX THE FLICKER
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Send the login data to your Node.js/Express backend
        const res = await fetch("http://localhost:5000/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // If your backend returns user data, return it to NextAuth
        if (res.ok && user) {
          return user 
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Required for Credentials provider
  },
  // app/api/auth/[...nextauth]/route.js

// ... providers setup ...
callbacks: {
  async jwt({ token, user }) {
    // 'user' is the object returned from your Express fetch call
    if (user) {
      token.id = user.id || user._id;
      token.email = user.email;
      // CRITICAL: Map your backend field (e.g., user.name or user.username) to token.name
      token.name = user.name || user.username; 
    }
    return token;
  },
  async session({ session, token }) {
    // 'token' is what we created above. Now pass it to the browser session.
    if (token) {
      session.user.id = token.id;
      session.user.name = token.name; 
      session.user.email = token.email;
    }
    return session;
  },

  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }