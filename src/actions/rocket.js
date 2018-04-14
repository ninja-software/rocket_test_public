//@flow
export type RocketState = {
	Position: { X: number, Y: number },
	Angle: number,
	VernierThruster: number,
	Thrust: number,
	Speed: number,
	Message: string
}

const setRocket = (Rocket: RocketState) => {
	return {
		type: "SET:ROCKET",
		Rocket
	}
}

export { setRocket }
