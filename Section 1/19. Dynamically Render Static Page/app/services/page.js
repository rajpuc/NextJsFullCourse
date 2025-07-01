import { cookies } from "next/headers";
import Link from "next/link";

// export const dynamic = "auto"; //by defaul value, jokon search params await hoi , cookies use kori tokon auto automatically ata k dynamic rendering banai dei.
// export const dynamic = "force-dynamic"; // ata ai static page ta k forcefully dynamically render korabe.
// export const dynamic = "error"; // search params, cookies use korle error dibe build time means ata forcefully static e generate korbe.
// export const dynamic = "force-static"; // ata korle params,cookies,headers teke amra kono value pabo na.

const Services = async ({ searchParams }) => {
  // const search = await searchParams; // ata use kore o page k forcefully er poribore dynamically render kora jai.
  // console.log(search);
  const myCookies = await cookies();
  console.log(myCookies);

  console.log("Running Services Component");
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
            <Link href="/services" className="nav-link active">
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
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
