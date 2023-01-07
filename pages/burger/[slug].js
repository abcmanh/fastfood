import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Burgers.module.css";
import Image from "next/image";
import { useState } from "react";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useStore } from "../../store/store";
import toast, {Toaster} from "react-hot-toast"

export default function Burger({ burger }) {
  const src = urlFor(burger.image).url();
  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);
  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };
  const addItems = useStore((state) => state.addItems);
  const addToCart = () => {
    addItems({
      ...burger,
      price: burger.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Thêm thành công vào giỏ hàng")
  };
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </div>

        <div className={css.right}>
          <span>{burger.name}</span>
          <span>{burger.details}</span>
          <span>
            {burger.price[Size]}
            <span style={{ color: "var(--themeRed)" }}>VND</span>
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.SizeVaraints}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                Lớn
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Vừa
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Số lượng</span>
            <div className={css.count}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("dec")}
              />
              <span>{Quantity}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>Thêm vào giỏ hàng</div>
        </div>
        <Toaster/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="burger" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const burger = await client.fetch(
    `*[_type=="burger" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      burger,
    },
  };
}
