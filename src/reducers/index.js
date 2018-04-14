// @flow
import { combineReducers } from "redux"
import { bargeReducer as Barge } from "./barge"
import { rocketReducer as Rocket } from "./rocket"
import { settingsReducer as Settings } from "./settings"

const rootReducer = combineReducers({
	Rocket,
	Barge,
	Settings,
})

export { rootReducer }
