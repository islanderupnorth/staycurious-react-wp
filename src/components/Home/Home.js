import React, { Component, Fragment } from "react";
import styles from "../../styles/global.scss";
import CardPost from "../CardPost/CardPost";
import CardMusic from "../CardMusic/CardMusic";
import CardQuote from "../CardQuote/CardQuote";
import Filter from "../Filter/Filter";
import posed from "react-pose";
import { connect } from "react-redux";
import {
  fetchPosts,
  fetchQuotes,
  fetchMusic,
} from "../../store/actions/fetchActions.js";

const gridProps = {
  open: {
    delayChildren: 300,
    staggerChildren: 25,
    opacity: 1,
  },
  closed: {
    delay: 0,
    staggerChildren: 15,
    staggerDirection: -1,
    opacity: 0,
  },
};

const Grid = posed.ul(gridProps);

class Home extends Component {
  state = {
    cardsVisible: false,
  };

  componentWillMount = () => {
    this.props.fetchPosts();
    this.props.fetchQuotes();
    this.props.fetchMusic();
  };

  cardType = type => {
    let Card;
    switch (type) {
      case "post": {
        Card = CardPost;
        return Card;
      }
      case "music": {
        Card = CardMusic;
        return Card;
      }
      case "quote": {
        Card = CardQuote;
        return Card;
      }
    }
  };

  handleFilterReshuffle = () => {
    const { cardsVisible } = this.state;
    if (!cardsVisible)
      this.setState({
        cardsVisible: true,
      });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cardsVisible: true });
    }, 300);
  }

  render() {
    const { cardsVisible } = this.state;
    const { posts, quotes, music, filter } = this.props;

    // consider re-arranged & sorting by date (NOT id)
    // Date.parse()
    let cards;

    if ((posts && filter === "all") || (posts && !filter)) {
      cards = posts
        .concat(music)
        .concat(quotes)
        .sort((a, b) => {
          return a.id - b.id;
        })
        .reverse();
    } else if (music && filter === "music") cards = music;
    else if (posts && filter === "posts") cards = posts;
    else if (quotes && filter === "quotes") cards = quotes;

    if (cards) console.log("cards[0]", cards[0]);

    return (
      <Fragment>
        <Filter changeFilter={this.handleChangeFilter} />
        {!cards ? (
          <h1>loading...</h1>
        ) : (
          <Fragment>
            {/* <h1>{cards[0].acf.quote}</h1> */}
            <Grid
              className={styles.wrapper}
              pose={cardsVisible ? "open" : "closed"}
              onPoseComplete={!cardsVisible && this.handleFilterReshuffle}
            >
              {cards.map((card, i) => {
                // if (i > 0) {
                let Card = this.cardType(card.type);
                return <Card key={i} {...card} />;
                // }
              })}
            </Grid>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.items,
  posts: state.posts.items,
  music: state.music.items,
  filter: state.filter.choice,
});

export default connect(
  mapStateToProps,
  { fetchPosts, fetchQuotes, fetchMusic }
)(Home);
