import Link from "next/link";

export const dynamicParams = false; //static site generation er por amra jokon new route a jai sheta o static generate hoye save hoye jai kintu amra jodi amnta na chai tahole amader dynamicParams false korte hobe. ata false korle jototuku amra manually static site generate korbo shegulai takbe notun kore r generate hobe na. and it is working in only production mood


export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data.map(({ id }) => ({ blogID: `${id}` }));
  // return [
  //   { blogID: "1" },
  //   { blogID: "2" },
  //   { blogID: "3" },
  //   { blogID: "4" },
  //   { blogID: "5" },
  // ];
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
