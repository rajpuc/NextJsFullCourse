import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link active">
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
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>

        <p>Static Site generation is also Server site rendering's part and it is happend on build time and it means dynamically rendering pagegula j gula runtime a run hoi shegula k build time a ei render kore fela.</p>
        <p>Now the question is : Dynamic page toh infinite hote pare tahole shegular kivabe ssg kivbe korbo?</p>

        <p>Basically akhane jeta kori sheta hocce frequently visited page gulakei ssg kori</p>
      </div>
    </>
  );
};

export default Home;
