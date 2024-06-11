import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-[80%] flex-col items-center justify-center gap-10">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl text-color5 font-bold">Enhance Your Link Management</h1>
      <p className="text-2xl max-w-[75ch] duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6"> Slug is an open-source platform that allows you to create, manage, and share short links with ease. Its fast, secure, and easy to use.</p>
      </section>
      <div className='flex items-center gap-5'>
      <Button variant="outline" className="text-black text-lg font-semibold">Create a Link</Button>
      <Button variant="ghost" className="border text-light text-lg font-semibold" asChild>
      <Link href="https://github.com/OmegaTroy/url-shortener">Star on GitHub</Link>
      </Button>
      </div>
    </main>
  );
}
