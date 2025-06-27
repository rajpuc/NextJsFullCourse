import Link from "next/link";

//example 1: next js nicher 5 page k build time ei generate kore dibe.
// export function generateStaticParams(){
//   return [
//     {blogID:'1'},
//     {blogID:'2'},
//     {blogID:'3'},
//     {blogID:'4'},
//     {blogID:'5'},
//   ]
// }

// example 2: But jodi amn hoi dynamically rendered page er content gula jodi kicu kicu somoy por por change hoi tahole tokon ata kaj korbe na. Tokon amader jeta korte hobe sheata hocce incremental site regeneration. And ata ssg er extended version. jta amra next project a dekbo akn ssg k r aktu details a jana jak. Toh aikane nicher example ta keyal koro jekhane amra api call kore static site generate kora dekbo:
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `${id}` }));
}



const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
