import css from "../styles/Services.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>NGON NHẤT</span>
        <span>NHANH NHẤT</span>
        <span>AN TOÀN NHẤT</span>
      </div>

      {/*features */}
      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Dễ dàng đặt hàng</span>
          <span>Chỉ cần một vài bước trong việc đặt đồ ăn</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Vệ sinh an toàn thực phẩm</span>
          <span>Thực phẩm được bảo đảm vệ sinh an toàn trong điều kiện thích hợp nhất</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic"/>
          </div>
          <span>Giao hàng đúng thời gian</span>
          <span>Cam kết giao hàng luôn đúng thời gian hoặc nhanh hơn</span>
        </div>
      </div>
    </>
  );
}
