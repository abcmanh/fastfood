import { urlFor } from "../lib/client";
import drink from "../sanity/schemas/drink";
import css from "../styles/Drink.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Drink({ drinks }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <div className={css.hr}>
          <div className={css.hr} style={{ float: "left", width: 620 }}>
            <hr />
          </div>
          <span>ĐỒ UỐNG</span>
          <div className={css.hr} style={{ float: "right", width: 620 }}>
            <hr />
          </div>
        </div>
      </div>
      <div className={css.menuDrink}>
        {drinks.map((drink, id) => {
          const src = urlFor(drink.image).url();
          return (
            <div className={css.drink} key={id}>
              <Link href={`./drink/${drink.slug.current}`}>
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
              <span>{drink.name}</span>
              <span>
                {drink.price}
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
