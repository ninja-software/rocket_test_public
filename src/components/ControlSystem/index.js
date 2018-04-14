// @flow
import * as React from "react"
import { connect } from "react-redux"

type Props = {}
type State = {}

const mapStateToProps = (state, ownProps = {}) => {
	return {}
}

@connect(mapStateToProps)
class ControlSystem extends React.Component<Props> {
	render() {
		return <div id="ControlSystem" />
	}
}

export { ControlSystem }
