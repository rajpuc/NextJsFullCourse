import Link from "next/link";
import ComponentPage from "../_privateFolder/page";

export default async function Home({searchParams,params}) {

  // http://localhost:3000/?name=Rajesh&age=25
  console.log(await searchParams);
  console.log(await params);

  return (
    <>
      <h1> Welcome to my home.</h1> <br />
      {/* import a component */}
      <ComponentPage/>
      <h1> if you want to make a route that start with "_" then you have to create the folder like "%5fexample" and then you can access this like localhost:3000/_example </h1>
    </>
  );
}
