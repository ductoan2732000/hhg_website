import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
