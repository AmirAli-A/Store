import "react-image-gallery/styles/scss/image-gallery.scss";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Store, { persistor } from "../redux/store/Store";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../global.css";
import { PersistGate } from "redux-persist/integration/react";

<link
  rel="stylesheet"
  href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
/>;

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
