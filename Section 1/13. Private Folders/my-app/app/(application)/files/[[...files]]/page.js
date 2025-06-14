import Link from "next/link";

export default async function Files({params}) {
  const path = await params;
  console.log(path);
  const {files}= path;

  return (
    <>
      <h1>This is Optional catch all route example.</h1>
      <h1> Rule for Optional catch all route: You can not keep this in root directory means: Root/[[...files]] - this is not possible</h1>
      <h3>And the file path is : {files?.join('/')}</h3>
    </>
  );
}
