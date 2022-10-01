import Header from "../commons/header/header";
import Footer from "../commons/footer/footer";
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
