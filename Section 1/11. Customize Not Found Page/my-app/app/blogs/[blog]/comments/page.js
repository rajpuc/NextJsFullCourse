import Link from "next/link";


export default async function Comments({params}) {
    const {blog} = await params;
  return (
    <div>
      All Comments for the blog post {blog}
    </div>
  )
}