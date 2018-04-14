// @flow
import type { RocketState } from "../actions/rocket"

type RocketAction = {
	type: string,
	Rocket: RocketState,
}

const initialRocketState = {
	Position: {
		X: 500,
		Y: 0,
	},
	Angle: 0,
	VernierThruster: 0,
	Thrust: 0,
	Speed: 0,
	Message: "Not initialised",
}

const rocketReducer = (state: RocketState = initialRocketState, action: RocketAction) => {
	switch (action.type) {
		case "SET:ROCKET":
			return action.Rocket
		default:
			return state
	}
}

export { rocketReducer }
