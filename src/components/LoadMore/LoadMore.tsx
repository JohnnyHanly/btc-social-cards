import React from "react";
import { useDispatch } from "react-redux";
import { loadMoreUserProfiles } from "redux/userProfileSlice";
import * as S from "./styles";

export const LoadMore = () => {
  const dispatch = useDispatch();
  const loadMoreClicked = () => {
    dispatch(loadMoreUserProfiles());
  };
  return (
    <S.LoadMoreButton onClick={loadMoreClicked}>Load More</S.LoadMoreButton>
  );
};
