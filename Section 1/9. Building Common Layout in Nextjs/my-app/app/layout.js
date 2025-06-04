import Link from "next/link";
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
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            backgroundColor: "rgb(41 164 157 / 46%)",
          }}
        >
          <div>Apna logo</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/about">About</Link>

            <Link href="/services">Services</Link>

            <Link href="/blogs">Blogs</Link>

            <Link href="/files">Files</Link>
          </div>
        </nav>
        {children}
        <footer
          style={{
            textAlign: "center",
            marginTop: "auto",
            padding: "10px",
            backgroundColor: "rgb(41 164 157 / 46%)",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
