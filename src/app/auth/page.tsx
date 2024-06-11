import { Card,CardContent,CardDescription,CardTitle,CardHeader } from "../../components/ui/card";

function page() {
  return (
    <div className=" mt-40 flex items-center justify-center">
    <Card className={"bg-color4 border-2 border-[rgba(255,255,255,.10)] rounded-lg text-light p-4 w-[500px] h-[300px]"}>
    <CardHeader className="flex items-center justify-center text-center">
      <CardTitle className="text-3xl text- font-medium duration-500 animate-in fade-in-20">
        Log in to Slug
      </CardTitle>
      <CardDescription className="duration-500 text-light animate-in fade-in-30">
        Log in with your favorite social provider to get started
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4 duration-500 animate-in fade-in-30">
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log in with Google
      </button>
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        log in with Github
      </button>
    </CardContent>
  </Card>
  </div>
  )
}

export default page