import css from "../styles/Pasta.module.css";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";
export default function Pasta({ pastas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <div className={css.hr}>
          <div className={css.hr} style={{ float: "left", width: 540 }}>
            <hr />
          </div>
          <span>MỲ Ý VÀ CƠM CHIÊN</span>
          <div className={css.hr} style={{ float: "right", width: 540 }}>
            <hr />
          </div>
        </div>
      </div>

      {/*Pasta and Rice */}
      <div className={css.menuPasta}>
        {pastas.map((pasta, id) => {
          const src = urlFor(pasta.image).url();
          return (
            <div className={css.pasta} key={id}>
              <Link href={`./pasta/${pasta.slug.current}`}>
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
              <span>{pasta.name}</span>
              <span>
                {pasta.price[1]}
                <span style={{ color: "var(--themeRed)" }}>VND</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
