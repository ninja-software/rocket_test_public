//@flow

const setBarge = (pos: { X: number, Y: number }) => {
	return {
		type: "SET:BARGE",
		Position: pos,
	}
}

export { setBarge }
