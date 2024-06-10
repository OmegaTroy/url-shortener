import { getServerSession } from "next-auth/next"

async function DashboardPage() {
  const session = await getServerSession()
  console.log(session?.user) 
  const user = session?.user

  return (
    <div>
      <h1 className="text-3xl font-bold ">Dashboard</h1>
      <p className="text-2xl text-teal-400">{user?.name}</p>
      <span>{user?.email}</span>
      <img className="rounded-full border-2" src={user?.image || undefined } alt={user?.name || undefined} />
    </div>
  )
}

export default DashboardPage