import React from "react";
import posed from "react-pose";
import styles from "./cardPost-style.scss";
import formateDate from "../../utils/utils";
import img from "./unsplash.jpg";
import { connect } from "react-redux";
import { activePost } from "../../store/actions/activePostAction.js";
import { Link } from "react-router-dom";

const cardProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

const Card = posed.li(cardProps);

const mockContent = `This is the excerpt from the content itself. If you’re still reading this then you
should probably move on. I like you anyway!`;

const CardPost = ({ acf, date, slug, title }) => (
  <Card>
    <Link
      to={`/blog/${slug}`}
      onClick={() => this.props.activePost(this.props)}
    >
      <div className={styles.cardPost}>
        {acf &&
          acf.featured_image && (
            <img
              className={styles.image}
              src={acf.featured_image.sizes.medium_large}
              alt={title.rendered}
            />
          )}
        <div className={styles.info}>
          <span className={styles.date}>{formateDate(date)}</span>
          <h1>{title.rendered}</h1>
          <p className={styles.excerpt}>{acf.tldr ? acf.tldr : mockContent}</p>
        </div>
      </div>
    </Link>
  </Card>
);

export default connect(
  null,
  { activePost }
)(CardPost);
