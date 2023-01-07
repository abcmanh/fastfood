import css from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza from "../assets/pesto.jpg";
import Pasta from "../assets/pasta.jpg";
import Burger from "../assets/burger.jpeg";
import Salad from "../assets/salad.jpg";
import Drink from "../assets/drink.jpg";
export default function Hero() {
  return (
    <div className={css.container}>
      {/*left side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>Luôn nhanh hơn nữa</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span></span>
          <span></span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>Fast Food</span>
          </span>
        </div>

        <span className={css.miniText}>
          Nhiệm vụ của chúng tôi là mang đến những trải nghiệm dịch vụ tốt nhất,
          nhanh nhất dành cho mọi khách hàng
        </span>

        <span className={css.btn}>Best Seller</span>
        {/*left side best seller */}
        <div className={css.grid}>
          <div className={css.Pizza}>
            <div>
              <Image src={Pizza} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Pizza Hải Sản Pesto</span>
              <span>
                210.000
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          </div>

          <div className={css.Pizza}>
            <div>
              <Image src={Burger} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Burger Bò Khoai</span>
              <span>
                40.000
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          </div>

          <div className={css.Pizza}>
            <div>
              <Image src={Pasta} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Mỳ ý thịt bò bằm</span>
              <span>
                110.000
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          </div>
          {/*right side best seller */}
          <div className={css.Pizza}>
            <div>
              <Image src={Salad} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Salad Trộn Cá Ngừ</span>
              <span>
                40.000
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          </div>

          <div className={css.Pizza}>
            <div>
              <Image src={Drink} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Pepsi Lon</span>
              <span>
                30.000
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*right side */}
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <div className={css.ContactUs}>
          <span>Liên hệ với chúng tôi</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
