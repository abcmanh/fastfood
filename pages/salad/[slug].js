import Layout from "../../components/Layout";
import Image from "next/image";
import css from "../../styles/Salads.module.css";
import Left from "../../assets/arrowLeft.png";
import Right from "../../assets/arrowRight.png";
import { client, urlFor } from "../../lib/client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../store/store";
export default function Salad({ salad }) {
  console.log(salad);
  const src = urlFor(salad.image).url();
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
      ...salad,
      price: salad.price,
      quantity: Quantity,
    });
    toast.success("Added to Cart");
  };
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.image}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            objectFit="contain"
            layout="fill"
            unoptimized
          />
        </div>

        <div className={css.right}>
          <span>{salad.name}</span>
          <span>{salad.details}</span>
          <span>
            {salad.price}
            <span style={{ color: "var(--themeRed)" }}>VND</span>
          </span>

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
                alt=""
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
    `*[_type == "salad" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(a) {
  const { slug = "" } = a.params;
  const salad = await client.fetch(
    `*[_type == "salad" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      salad,
    },
  };
}
