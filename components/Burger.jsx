import css from "../styles/Burger.module.css";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

export default function Burger({ burgers }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <div className={css.hr}>
          <div className={css.hr} style={{ float: "left", width: 640 }}>
            <hr />
          </div>
          <span>BURGER</span>
          <div className={css.hr} style={{ float: "right", width: 640 }}>
            <hr />
          </div>
        </div>
      </div>

      {/*Burger */}
      <div className={css.menuBurger}>
        {burgers &&
          burgers.map((burger, id) => {
            const src = urlFor(burger.image).url();
            return (
              <div className={css.burger} key={id}>
                <Link href={`./burger/${burger.slug.current}`}>
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
                <span>{burger.name}</span>
                <span>
                  {burger.price[1]}
                  <span style={{ color: "var(--themeRed)" }}>VND</span>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
