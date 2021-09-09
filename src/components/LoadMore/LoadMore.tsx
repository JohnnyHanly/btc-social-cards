import { useDispatch } from "react-redux";
import { loadMoreUserProfiles } from "redux/userProfileSlice";
import renderToast from "utils/renderToast";
import * as S from "./styles";
export const LoadMore = () => {
  const dispatch = useDispatch();
  const loadMoreClicked = () => {
    try {
      dispatch(loadMoreUserProfiles());
      renderToast({ type: "success", message: "Fetched Users" });
    } catch (err: any) {
      renderToast({ type: "error", message: "Could not fetch users" });
    }
  };
  return (
    <S.LoadMoreButton onClick={loadMoreClicked}>Load More</S.LoadMoreButton>
  );
};
