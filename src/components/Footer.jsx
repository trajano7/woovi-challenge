import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import wooviLogo from "../assets/logo.svg";
import styles from "./Footer.module.css";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <GppGoodOutlinedIcon />
        <p>Pagamento 100% seguro via:</p>
        <img
          src={wooviLogo}
          alt="Woovi Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
