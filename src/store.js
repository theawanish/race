import { configureStore } from "@reduxjs/toolkit";

import raceReducer from "./pages/race-list/raceSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";

const store = configureStore({
	reducer: {
		race: raceReducer,
		login: loginReducer,
		user: userReducer,
	},

});

export default store;
