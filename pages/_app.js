import Sidebar from "../components/sidebar"
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return(
  <div className="bg-100 h-screen">
  
  
  <Component {...pageProps} />
  <Sidebar/>
  </div>
  )
}

export default MyApp
