import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import styles from "./styles/global.scss";
import CardPost from "./components/CardPost/CardPost";
import CardMusic from "./components/CardMusic/CardMusic";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    filter: "music"
  };

  componentWillMount = () => {
    fetch("http://blog.local/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(response => this.setState({ posts: response }));
    fetch("http://blog.local/wp-json/wp/v2/music")
      .then(response => response.json())
      .then(response => this.setState({ music: response }));
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
    }
  };

  handleChangeFilter = what => {
    this.setState({ filter: what });
  };

  render() {
    const { posts, music, filter } = this.state;

    // consider re-arranged & sorting by date (NOT id)
    // Date.parse()
    let cards;

    if (posts && music && filter === "all")
      cards = posts
        .concat(music)
        .sort(function(a, b) {
          return a.id - b.id;
        })
        .reverse();
    else if (music && filter === "music") cards = music;
    else return null;

    return (
      <React.Fragment>
        <Filter changeFilter={this.handleChangeFilter} />
        <div className={styles.wrapper}>
          {cards &&
            cards.map((card, index) => {
              let Card = this.cardType(card.type);
              return <Card key={index} {...card} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
