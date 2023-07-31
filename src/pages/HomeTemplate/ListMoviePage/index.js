import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";
import { actFetchListMovie } from "./slide/actions";
import Loader from "components/Loader";

class ListMoviePage extends Component {
  componentDidMount() {
    const { fetchListMovie } = this.props;
    fetchListMovie();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return data?.map((movie) => {
      return <MovieItem key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>ListMoviePage</h3>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
