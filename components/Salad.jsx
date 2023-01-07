import { urlFor } from "../lib/client";
import salad from "../sanity/schemas/salad";
import css from "../styles/Salad.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Salad({ salads }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <div className={css.hr}>
          <div className={css.hr} style={{ float: "left", width: 650 }}>
            <hr />
          </div>
          <span>SALAD</span>
          <div className={css.hr} style={{ float: "right", width: 650 }}>
            <hr />
          </div>
        </div>
      </div>
      <div className={css.menuSalad}>
        {salads.map((salad, id) => {
          const src = urlFor(salad.image).url();
          return (
            <div className={css.salad} key={id}>
              <Link href={`./salad/${salad.slug.current}`}>
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
              <span>{salad.name}</span>
              <span>
                {salad.price}
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
