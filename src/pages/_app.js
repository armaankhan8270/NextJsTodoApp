import { StateUserContetx } from "../Context/UserContext";
import "../styles/globals.css";
import Navbars from "./Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <StateUserContetx>
      <Navbars />

      <Component {...pageProps} />
    </StateUserContetx>
  );
}

export default MyApp;
