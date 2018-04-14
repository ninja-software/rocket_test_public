// @flow
import * as React from "react"
import { connect } from "react-redux"

import { setBarge } from "../../actions/barge"
import { setRocket } from "../../actions/rocket"
import { setSetting, EXPLOSIONSOUND, HASCRASHED, GITHUBUSERNAME } from "../../actions/settings"

type Props = {
	Rocket: Object
}

const mapStateToProps = (state, ownProps = {}) => {
	return {
		Rocket: state.Rocket,
		Settings: state.Settings
	}
}

const hasCrashed = (message: string) => {
	switch (message) {
		case "You missed the barge!":
		case "You have smashed into the barge too quickly!":
			return true
		case "Rocket is in flight":
		default:
			return false
	}
}

const GuidanceSystem = (Cmp: React.ComponentType<any>) => {
	return connect(mapStateToProps)(
		class GuidedRocket extends React.Component<Props> {
			socket = null
			connect = () => {
				const { Settings } = this.props
				const githubUsername = Settings.GitHubUsername
				if (!githubUsername) throw new Error("Invalid username")
				const baseURL = Settings.BaseURL
				this.socket = new WebSocket(`wss://${baseURL}/ws/rocket/${githubUsername}`)
				this.socket.onopen = this.onOpen
				this.socket.onmessage = this.onMessage
				this.socket.onclose = this.onClose
			}
			onOpen = () => {
				this.start()
			}
			start = () => {
				const { Settings } = this.props
				const baseURL = Settings.BaseURL
				const githubUsername = Settings.GitHubUsername
				if (!githubUsername) throw new Error("Invalid username")
				fetch(`https://${baseURL}/api/start/${githubUsername}`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/x-www-form-urlencoded"
					}
				})
			}
			onMessage = event => {
				let data = JSON.parse(event.data)
				if (!data) return
				this.props.dispatch(setRocket(data.Rocket))
				this.props.dispatch(setBarge(data.Barge.Position))
				const hascrashed = hasCrashed(data.Message)
				if (hascrashed && !this.props.Settings.hasCrashed) {
					this.props.dispatch(setSetting(HASCRASHED, true))
				}
			}
			onClose = () => {
				console.log("Guidance System Closed")
			}
			componentDidMount() {
				this.connect()
			}

			render() {
				return (
					<Cmp
						{...this.props}
						guidanceData={this.props.Rocket}
						hasCrashed={this.props.Settings.hasCrashed}
						explosionSoundPlayed={this.props.Settings.explosionSoundPlayed}
						onExplosion={() => {
							this.props.dispatch(setSetting(EXPLOSIONSOUND, true))
						}}
					/>
				)
			}
		}
	)
}

export { GuidanceSystem }
