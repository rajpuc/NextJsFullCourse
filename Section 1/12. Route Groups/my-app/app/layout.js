import Link from "next/link";

export const metadata = {
  title:{
    template:"%s | Technical Agency",
    default:"Technical Agency Check"
  }
}
// export const metadata = {
//   title:"Technical Agency",
//   description:"you can also add other metadata as well like this."
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: "0",
          margin: "0",
        }}
      >
 
        {children}
      </body>
    </html>
  );
}
