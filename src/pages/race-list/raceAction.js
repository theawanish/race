import {
  fetchRaceLoading,
  fetchRaceSuccess,
  fetchRaceFail
} from "./raceSlice";

import {
  getAllRace
} from "../../api/raceApi";

export const fetchAllRace = () => async (dispatch) => {
  dispatch(fetchRaceLoading());
  try {
    const result = await getAllRace();
    result.data &&
      dispatch(fetchRaceSuccess(result.data));
  } catch (error) {
    dispatch(fetchRaceFail(error.message));
  }
};
