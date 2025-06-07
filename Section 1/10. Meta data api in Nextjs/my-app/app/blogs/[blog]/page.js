import Link from "next/link";
export async function generateMetadata({params}){
  const {blog} = await params;
  return {
    title:`Blog ${blog}`
  }
}

export default async function Blog({params}) {
    const {blog} = await params;
  return (
    <div>
      Blog NO: {blog}
    </div>
  )
}