import Footer from "../components/common/footer";
export default function Layout({ children }) {
  return (
    <>
      <div>header</div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
