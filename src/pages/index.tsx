import type { NextPage, NextPageContext } from 'next'
import {getSession, signIn,signOut,useSession} from "next-auth/react"

const Home: NextPage = () => {

  const {data}=useSession()

  console.log("the user data is",data)

  return (
<div>
  {
    data?.user ?<button onClick={()=>signOut()}>signOut</button> :
    <button onClick={()=>signIn("google")}>SignIn</button>
  }
  {
    data?.user?.name
  }
  
</div>
  )
}


export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
}

export default Home
