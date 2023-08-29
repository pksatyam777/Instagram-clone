import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // ...add more providers here
  ],
  pages:{
    signIn:"/auth/signin",
  },
  callbacks:{
    async session({session,token,user}){
      session.user.name=session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.id= token.sub;
      return session;
    }

  }
  
});

export { handler as GET, handler as POST }