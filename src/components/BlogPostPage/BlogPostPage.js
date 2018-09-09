import React, { Fragment } from "react";
import { connect } from "react-redux";
import { activePost } from "../../store/actions/activePostAction.js";
import { fetchPosts } from "../../store/actions/fetchActions.js";
import formateDate from "../../utils/utils";
import Arrow from "../Arrow/Arrow";
import renderHTML from "react-render-html";
import styles from "./blogPostPage-style.scss";
import Slider from "react-slick";
// import "../../styles/slick.scss";
import "!style-loader!css-loader!slick-carousel/slick/slick.css";
import "!style-loader!css-loader!slick-carousel/slick/slick-theme.css";

class BlogPostPage extends React.Component {
  state = {};

  handleGallery = () => {
    fetch(
      `http://blog.local/wp-json/gallery_plugin/v2/post/${this.state.post.id}`
    )
      .then(response => response.json())
      .then(items => this.setState({ gallery: items || "none" }));
  };

  componentDidMount = () => {
    // if it hasn't received active post props then fetch to then iterate over in render()
    if (!this.state.post && !this.props.post) {
      this.props.fetchPosts();
    }
  };

  render() {
    const { post, gallery } = this.state;

    if (this.props.post && !post) {
      this.setState({ post: this.props.post });
    } else if (this.props.posts && !post) {
      this.props.posts.find(item => {
        if (item.slug === this.props.match.params.slug)
          this.setState({ post: item });
      });
    }

    let content;
    // check content.rendered from WP API if it includes inline styling and if it does remove it
    if (post) {
      if (!gallery) this.handleGallery();

      content = post.content.rendered.includes("<style")
        ? post.content.rendered.replace(
            post.content.rendered.substring(
              post.content.rendered.indexOf("<style"),
              post.content.rendered.indexOf("</style>") + 8
            ),
            ""
          )
        : post.content.rendered;

      content = content.includes("<div id='gallery")
        ? content.replace(
            content.substring(
              content.indexOf("<div id='gallery"),
              content.length
            ),
            ""
          )
        : content;
    }

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      arrows: true,
      lazyLoad: true,
      autoplay: true,
      prevArrow: <Arrow />,
      nextArrow: <Arrow next />,
      dotsClass: "custom-dots",
    };

    return (
      <Fragment>
        <Arrow />
        <div className={styles.postContainer}>
          {!post ? (
            <h1 />
          ) : (
            <div>
              <div className={styles.date}>{formateDate(post.date)}</div>
              <h1>{post.title.rendered}</h1>
              {renderHTML(content)}
              {gallery &&
                gallery !== "none" && (
                  <Slider {...settings}>
                    {gallery.map((image, i) => (
                      <div key={i}>
                        <img src={image} />
                      </div>
                    ))}
                  </Slider>
                )}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.activePost.items,
  posts: state.posts.items,
});

export default connect(
  mapStateToProps,
  { activePost, fetchPosts }
)(BlogPostPage);
