import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "rgb(41 164 157 / 46%)",
        }}
      >
        <div>Apna logo(Application)</div>
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
    </>
  );
}
