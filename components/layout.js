import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import styles from "@/styles/layout.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>{children}</main>
      <Footer />
    </>
  );
}
