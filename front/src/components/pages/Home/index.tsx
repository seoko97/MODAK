import React, { useEffect } from "react";
import { NextPage } from "next";
import RowFrame from "@templates/RowFrame";
import { useAppSelector } from "@src/store/configureStore";
import GridChooseCamp from "@src/components/UI/organisms/GridChooseCamp";
import useScroll from "@src/hooks/useScroll";
import useThrottle from "@src/hooks/useThrottle";
import { useDispatch } from "react-redux";
import { getSigninUser } from "@src/reducers/user/action";

// const Home: NextPage = () => {
//   const { mainReviews } = useAppSelector((state) => state.reviews);
//   const { mainCamps } = useAppSelector((state) => state.camps);
//   const dispatch = useDispatch();
//   const [sh, ch] = useScroll();

//   const throttle = useThrottle(async (asd) => {
//     const a = await dispatch(getSigninUser());
//   }, 1000);

//   useEffect(() => {
//     if (sh + 300 >= ch) throttle("a");
//   }, [sh, ch]);

//   return (
//     <RowFrame>
//       <GridChooseCamp />
//       <div style={{ height: "3000px" }} />
//     </RowFrame>
//   );
// };

const Home: NextPage = () => {
  const { mainReviews } = useAppSelector((state) => state.reviews);
  const { mainCamps } = useAppSelector((state) => state.camps);
  const dispatch = useDispatch();
  const [sh, ch] = useScroll();

  return (
    <RowFrame>
      <GridChooseCamp />
      <div style={{ height: "3000px" }} />
    </RowFrame>
  );
};

export default Home;
