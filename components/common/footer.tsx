import styles from "@/styles/layout.module.scss";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`px-5 py-2 row`}>
        <div
          className={`${styles.footerLogo} col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center`}
        >
          <Image src={logo} width={250} height={250} alt="logo hhg" />
        </div>
        <div className={` col-lg-4 col-md-4 col-sm-12 col-xs-12`}>
          <b className={`d-flex flex-column ${styles.footerInfo}`}>
            <div className={`${styles.footerInfoContent}`}>
              THÔNG TIN LIÊN HỆ NỘI THẤT ART:
            </div>
            <div className={`${styles.footerInfoContent}`}>
              Công ty TNHH Tư Vấn Thiết Kế và Xây Dựng NTA
            </div>
            <div className={`${styles.footerInfoContent}`}>
              Địa chỉ: 232 Đường số 8, P. Bình Hưng Hòa A, Quận Bình Tân, TP.
              HCM
            </div>
            <div className={`${styles.footerInfoContent}`}>
              Hotline: 0908802348 (Mr. Trung)
            </div>
            <div className={`${styles.footerInfoContent}`}>
              Email: info.noithatart@gmail.com
            </div>
          </b>
        </div>
        <div
          className={`${styles.footerContact} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
        >
          hung
        </div>
      </div>
    </footer>
  );
};

export default Footer;
