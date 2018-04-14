import React, { Component } from "react"
import "./assets/css/reset.css"
import "./assets/css/rocket_test.css"
import "hover.css/css/hover.css"
import "react-rangeslider/lib/index.css"

import { World } from "./components/World"
import { RocketShip } from "./components/RocketShip"
import { ControlSystem } from "./components/ControlSystem"
import { MetricsSystem } from "./components/MetricsSystem"

class App extends Component {
	render() {
		return (
			<div>
				<World>
					<RocketShip />
				</World>
				<div className={"ui"}>
					<ControlSystem />
					<MetricsSystem />
				</div>
			</div>
		)
	}
}

export default App
