import React from "react";
import styles from "./cardMusic-style.scss";
import formateDate from "../../utils/utils";

const CardMusic = props => {
  const { href, title, featuredImage, date } = props;
  return (
    <a href={`/${href}`}>
      <div className={styles.cardMusic}>
        <img
          className={styles.image}
          src={featuredImage}
          alt={title.rendered}
        />
        <div className={styles.info}>
          {date && <span className={styles.date}>{formateDate(date)}</span>}
          <h1>{title.rendered}</h1>
          <p className={styles.excerpt}>
            This is the excerpt from the content itself. It is possbile to read
            and as much as you need. If you’re still reading this then you
            should probably move on. I like you anyway!
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardMusic;
