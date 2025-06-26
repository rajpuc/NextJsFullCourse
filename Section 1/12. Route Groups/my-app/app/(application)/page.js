import Link from "next/link";


export default async function Home({searchParams,params}) {

  // http://localhost:3000/?name=Rajesh&age=25
  console.log(await searchParams);
  console.log(await params);

  return (
    <>
      <h1> Welcome to my home.</h1> <br />

  

    </>
  );
}
