import Layout from "../../components/Layout";
import css from "../../styles/Pastas.module.css";
import Image from "next/image";
import Left from "../../assets/arrowLeft.png";
import Right from "../../assets/arrowRight.png";
import { client, urlFor } from "../../lib/client";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";
export default function Pasta({ pasta }) {
  console.log(pasta);
  const src = urlFor(pasta.image).url();
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
      ...pasta,
      price: pasta.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Thêm thành công vào giỏ hàng");
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.image}>
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
          <span>{pasta.name}</span>
          <span>{pasta.details}</span>
          <span>
            {pasta.price[Size]}
            <span style={{ color: "var(--themeRed)" }}>VND</span>
          </span>
          <div className={css.size}>
            <span>Kích cỡ</span>
            <div className={css.SizeVar}>
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
                src={Left}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("dec")}
              />
              <span>{Quantity}</span>
              <Image
                src={Right}
                height={20}
                width={20}
                objectFit="contain"
                onClick={() => handleQuan("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Thêm vào giỏ hàng
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pasta" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pasta = await client.fetch(
    `*[_type == "pasta" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pasta,
    },
  };
}
