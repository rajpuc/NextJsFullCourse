import Link from "next/link";

export default async function Files({params}) {
  const path = await params;
  console.log(path);
  const {files}= path;

  return (
    <>
      <h1>This is required catch all route example.</h1>
      
      <h3>And the file path is : {files.join('/')}</h3>
    </>
  );
}
