

export const metadata = {
  title:"Services Agency",
  description:"you can export metadata from a component as well. for example see :seo/page.js"
}

export default function  ServicesLayout({children}) {
  return (
    <div>
        <h1 style={{fontSize:"42px",color:"green"}}>This services layout</h1>
        {children}
    </div>
  )
}


