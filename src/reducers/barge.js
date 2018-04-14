// @flow
type BargeState = { Position: { X: number, Y: number } }
type BargeAction = {
	type: string,
	Position: BargePosition,
}
const bargeReducer = (state: BargeState = { Position: { X: 0, Y: 0 } }, action: BargeAction) => {
	switch (action.type) {
		case "SET:BARGE":
			return { Position: action.Position }
		default:
			return state
	}
}

export { bargeReducer }
