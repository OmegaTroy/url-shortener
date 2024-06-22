import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl text-color1 dark:text-color5 font-bold">Enhance Your Link Management</h1>
      <p className="text-2xl max-w-[75ch] duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6"> Slug is an open-source platform that allows you to create, manage, and share short links with ease. Its fast, secure, and easy to use.</p>
      </section>
      <div className='flex items-center gap-5'>
      <Button variant="default" className="text-light bg-color1 hover:bg-color5 text-lg font-semibold">
        <Link href='/dashboard'>Create a Link</Link>
      </Button>
      <Button variant="ghost" className="text-lg font-medium" asChild>
      <Link target="_blank" className="text-color2 dark:text-light dark:hover:text-color2 hover:bg-color3" href="https://github.com/OmegaTroy/url-shortener">Star on GitHub</Link>
      </Button>
      </div>
    </main>
  );
}
