import Link from "next/link";
import { notFound } from "next/navigation";
export async function generateMetadata({params}){
  const {blog} = await params;
  return {
    title:`Blog ${blog}`
  }
}

export default async function Blog({params}) {
  const {blog} = await params;
  if(!/^\d+$/.test(blog)){
    notFound();
  }

  return (
    <div>
      Blog NO: {blog}
    </div>
  )
}