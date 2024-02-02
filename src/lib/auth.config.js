
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("user", user);
        token.id = user.id;
        if(user._doc.isAdmin){
        token.isAdmin = user._doc.isAdmin;
       }
      } 
      
      return token;
      
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        if(token.isAdmin){
        session.user.isAdmin = token.isAdmin;
         }
      }
     
      return session
    },
    authorized({ auth, request, session }) {
       console.log("session", session);
       console.log("auth", auth);
       console.log("request", request);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true
    },
  },
};
