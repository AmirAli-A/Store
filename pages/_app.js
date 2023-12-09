import "react-image-gallery/styles/scss/image-gallery.scss";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Store from "../redux/store/Store";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import '../global.css'

<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>




 
function MyApp({ Component, pageProps }) {
  
  if (Component.getLayout) {

    return Component.getLayout(<Component {...pageProps}/>)
    
  }
  return (
    <Provider store={Store}>
      <Header/>
       <Component {...pageProps} />
       <Footer/>
    </Provider>
   
  ) 
}

export default MyApp
