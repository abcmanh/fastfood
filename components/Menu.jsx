import { urlFor } from "../lib/client";
import pizza from "../sanity/schemas/pizza";
import css from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Menu({ pizzas }) {
  return (
    <div className={css.container} id={`aaa`}>
      <div className={css.heading}>
        <span>THỰC ĐƠN</span>
        <span></span>
        <div className={css.hr}>
          <div className={css.hr} style={{ float: "left", width: 650 }}>
            <hr />
          </div>
          <span>PIZZA</span>
          <div className={css.hr} style={{ float: "right", width: 650 }}>
            <hr />
          </div>
        </div>
      </div>

      {/*Pizza */}
      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                {pizza.price[1]}
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
