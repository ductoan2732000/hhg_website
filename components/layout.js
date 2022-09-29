import Footer from "@/components/common/footer";
import styles from "@/styles/Home.module.css";
export default function Layout({ children }) {
  return (
    <>
      <div>header</div>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
