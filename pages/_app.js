import Sidebar from "../components/sidebar"
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return(
  <div className="bg-grey ">
  
  <Sidebar/>
  <Component {...pageProps} />

  </div>
  )
}

export default MyApp
