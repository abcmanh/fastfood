import { UilFacebook, UilInstagram } from "@iconscout/react-unicons";
import css from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={css.container} id={`bbb`}>
      <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilInstagram size={45} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>
          <Link href="../">Fudo</Link>
        </span>
      </div>
    </div>
  );
}
