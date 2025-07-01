import Link from "next/link";

export const dynamicParams = false;
//export const revalidate = 5; //5s por por jodi kono user ai page k hit kore tokon ata regenerate hobe. Jodi kono static site er amn value thake jegular update hoy time er sathe tokon amader ata use korte hoi. by default er value false takhe.

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `${id}` }));
}

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 5 }, //this is also working exatcly as the top, but there is also a difference which we will talk later.
  });
  const data = await response.json();
  console.log(data);
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
        <h2>Date: {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
