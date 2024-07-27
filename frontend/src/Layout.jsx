// import { Navbar } from "./components/Header/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
