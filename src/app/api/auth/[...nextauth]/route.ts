import NextAuth from "next-auth"
import GitHubProvaider from "next-auth/providers/github"
import {GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET} from '@/config/config'

const handler = NextAuth({
  providers: [
    GitHubProvaider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
})

export { handler as GET, handler as POST }