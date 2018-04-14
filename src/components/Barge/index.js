// @flow
import * as React from "react"
import barge from "../../assets/img/barge.png"

type Props = {
	position: { X: number, Y: number },
}

const Barge = ({ position }: Props) => {
	if (!position) position = { X: 0, Y: 0 }
	return (
		<div id="Barge" style={{ left: position.X - 193 }}>
			<img src={barge} alt="" />
		</div>
	)
}

export { Barge }
