"use client";

import { usePathname } from "next/navigation";

export default function NotFound(){
  const path = usePathname();
  const pathArray = path.split("/");
  console.log(path);
  const lastPath = pathArray[pathArray.length-1];
  return (
    <>
        <h1>{ lastPath } Blog Page Not Found!</h1>
        <p>Could not found the blog page you are looking for.</p>
        <p>This will not working with static routes, for example if you create a different not found page for service it won't work. cause there is no dynamic route.</p>
        <p>And here you don't have access for "params"</p>
        <p>So,if you  want to access the "blog" path name</p>
        <p>You have to make this component "use client" first</p>
        <p>Then you can access the path using "usePathName" hook like in shown in the example</p>
    </>
  )
}


