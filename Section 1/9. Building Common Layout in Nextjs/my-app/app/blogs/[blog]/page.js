import Link from "next/link";


export default async function Blog({params}) {
    const {blog} = await params;
  return (
    <div>
      Blog NO: {blog}
    </div>
  )
}