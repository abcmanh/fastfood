import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Drinks.module.css";
import Image from "next/image";
import Left from "../../assets/arrowLeft.png";
import Right from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, {Toaster} from "react-hot-toast"
export default function Drink({ drink }) {
  console.log(drink);
  const src = urlFor(drink.image).url();
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
      ...drink,
      price: drink.price,
      quantity: Quantity,
    });
    toast.success("Thêm thành công vào giỏ hàng")
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
          <span>{drink.name}</span>
          <span>{drink.details}</span>
          <span>
            {drink.price}
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

          <div className={`btn ${css.btn}`} onClick={addToCart}>Thêm vào giỏ hàng</div>
        </div>
        <Toaster/>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="drink" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const drink = await client.fetch(
    `*[_type == "drink" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      drink,
    },
  };
}
