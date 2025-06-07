import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1> <br/>
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
      
    </>
  );
}
