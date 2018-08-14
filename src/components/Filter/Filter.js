import React from "react";
import styles from "./filter-style.scss";
import { handleFiltering } from "../../store/actions/handleFilteringAction.js";
import { connect } from "react-redux";

class Filter extends React.Component {
  render() {
    return (
      <div className={styles.filter}>
        <button
          type="button"
          onClick={() => {
            this.props.handleFiltering("all");
          }}
        >
          All
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.handleFiltering("posts");
          }}
        >
          Posts
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.handleFiltering("music");
          }}
        >
          Music
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.handleFiltering("quotes");
          }}
        >
          Quotes
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter.choice,
});

export default connect(
  mapStateToProps,
  { handleFiltering }
)(Filter);
