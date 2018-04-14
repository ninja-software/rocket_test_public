// @flow

import * as React from "react"

import { Ocean } from "./ocean"
import { Barge } from "../Barge"
import { connect } from "react-redux"

const mapStateToProps = (state, ownProps = {}) => {
	return {
		Barge: state.Barge,
	}
}

type BargeProps = { Position: { X: number, Y: number } }

const World = connect(mapStateToProps)((props: { children: any, Barge: BargeProps }) => {
	const { children } = props
	return (
		<div id="World">
			<div id="FlySpace">
				{children}
				<Barge position={props.Barge.Position} />
			</div>
			<Ocean />
		</div>
	)
})

export { World }
