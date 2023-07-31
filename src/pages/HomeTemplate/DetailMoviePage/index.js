import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailMovie } from "./slide/actions";
import Loader from "components/Loader";

const DetailMoviePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const data = useSelector((state) => state.detailMovieReducer.data);

  useEffect(() => {
    dispatch(actFetchDetailMovie(params.id));
  }, [dispatch, params.id]);

  if (loading) return <Loader />;
  return (
    <div>
      <h3>DetailMoviePage</h3>
      <div className="container text-center">
        <img src={data?.hinhAnh} alt="" />
        <h3>{data?.tenPhim}</h3>
        <p>{data?.moTa}</p>
        <p>{data?.ngayKhoiChieu}</p>
      </div>
    </div>
  );
};

export default DetailMoviePage;
