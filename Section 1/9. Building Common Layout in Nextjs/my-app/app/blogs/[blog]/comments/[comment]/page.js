import Link from "next/link";


export default async function Comment({params}) {
    const {blog,comment} = await params;
  return (
    <div>
      Comment No: {comment} for the blog post {blog}
    </div>
  )
}