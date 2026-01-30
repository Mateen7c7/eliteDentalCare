import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Blanck from "./Blanck";

export default function Layout() {
  let show = true;
  // let updationDate = new Date("2025-12-07");
  // let presentDate = new Date();

  // if (presentDate < updationDate) {
  //   show = true;
  // }

  return (
    <main className="bg-bg ">
      {show ? (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <Blanck />
        </>
      )}
    </main>
  );
}
