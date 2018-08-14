import React from "react";
import posed from "react-pose";
import styles from "./cardQuote-style.scss";
import formateDate from "../../utils/utils";

const cardProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

const Card = posed.li(cardProps);

const CardQuote = ({ acf, date }) => (
  <Card className={styles.cardQuote}>
    <span className={styles.quotationMark}>“</span>
    <span className={styles.quote}>{acf.quote}</span>
    <div className={styles.author}>
      <span className={styles.name}>{acf.quote_author}</span>
    </div>
    <span className={styles.date}>{formateDate(date)}</span>
  </Card>
);

export default CardQuote;
