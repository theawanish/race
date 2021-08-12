import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  race: []
};
const mainArr = [];
const raceListSlice = createSlice({
  name: "raceList",
  initialState,
  reducers: {
    fetchRaceLoading: (state) => {
      state.isLoading = true;
    },
    fetchRaceSuccess: (state, action) => {
   
      const {horse , time, event} = action.payload;
      mainArr.filter(
        (obj)=>{
          if(obj.id === horse.id && event === 'start') {
           time = null;
           return obj;
          } else if (obj.id === horse.id && event !== 'start'){
            obj.time = time;
            return obj;
          } else {
            return obj;
            
          }
        }
      );
      const found = mainArr.some(el => el.id === horse.id);
      if(!found) {
        mainArr.push({id:horse.id,horseName:horse.name, currentMode: event,time: event === 'start' ? '' : time})
      }

      const n =  mainArr.length;
      let running = [];
      let start = [];
      for (let i = 0; i < n; i++) {
          if (mainArr[i].time == 0 || mainArr[i].time == "") {
            running.push(mainArr[i]);
          } else {
            start.push(mainArr[i]);
          }
      }
      start.sort((a, b) => a.time - b.time);
      start = [...start,...running];
      state.race = [...start];
    },
    fetchRaceFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = raceListSlice;

export const {
  fetchRaceLoading,
  fetchRaceSuccess,
  fetchRaceFail,
} = actions;

export default reducer;
