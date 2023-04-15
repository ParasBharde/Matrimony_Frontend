import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/admin/welcome",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
        // async authorize(credentials, req) {
        //   if (credentials.username === "shubham@gmail.com") {
        //     return {
        //       user: {
        //         name: "ABC",
        //       },
        //     };
        //   }

        //   return null;
        // },
      async authorize(credentials, req) {
        var data = JSON.stringify({
          identifier: credentials.username,
          password: credentials.password,
        });

        const res = await fetch("http://172.105.57.17:1337/api/auth/local", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        });
        const user = await res.json();
        // console.log("user", user);
        const nextRes = await fetch(
          "http://172.105.57.17:1337/api/users/me?populate=user_profile",
          {
            method: "get",
            headers: {
              Authorization: "Bearer " + user.jwt,
            },
          }
        );
        const userRes = await nextRes.json();
        
        if (userRes && userRes.isAdmin == true) {
          console.log("userRes", userRes);
          return userRes;
        }
        return null;
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
