import styles from './footer.module.scss';
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import footer from "@/assets/image/footer.png";
import { Facebook, Mail, MapPin } from "react-feather";
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`px-5 py-4 row d-flex justify-content-center`}>
        <div
          className={`${styles.footerLogo} col-lg-3 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center`}
        >
          <Image src={logo} width={250} height={250} alt="logo hhg" />
        </div>
        <div className={` col-lg-3 col-md-4 col-sm-12 col-xs-12`}>
          <b className={`d-flex flex-column ${styles.footerInfo} py-4`}>
            <div className={`py-1 text-center`}>
              THÔNG TIN LIÊN HỆ NỘI THẤT ART:
            </div>
            <div className={`py-1 text-center`}>
              Công ty TNHH Tư Vấn Thiết Kế và Xây Dựng NTA
            </div>
            <div className={`py-1 text-center`}>
              Địa chỉ: 232 Đường số 8, P. Bình Hưng Hòa A, Quận Bình Tân, TP.
              HCM
            </div>
            <div className={`py-1 text-center`}>
              Hotline: 0908802348 (Mr. Trung)
            </div>
            <div className={`${styles.footerInfoContent} text-center`}>
              Email: info.noithatart@gmail.com
            </div>
          </b>
        </div>
        <div
          className={`${styles.footerContact} col-lg-3 col-md-4 col-sm-12 col-xs-12`}
        >
          <div className={` d-flex justify-content-center py-4`}>
            <Facebook className={`${styles.footerContactIcon} w-25`}></Facebook>
            <Mail className={`${styles.footerContactIcon} w-25`}></Mail>
            <MapPin className={`${styles.footerContactIcon} w-25`}></MapPin>
          </div>
          <div
            className={`${styles.footerContactImage} d-flex justify-content-center py-lg-4 py-md-1 py-sm-1 py-xs-1`}
          >
            <Image src={footer} alt="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
