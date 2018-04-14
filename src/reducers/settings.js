// @flow

import { EXPLOSIONSOUND, HASCRASHED, GITHUBUSERNAME } from "../actions/settings"

type SettingsState = {
	GitHubUsername: string,
	hasCrashed: boolean,
	explosionSoundPlayed: boolean
}

type SettingsAction = {
	type: string,
	value: string | number | boolean
}

const initialSettings = {
	BaseURL: "rocket.theninja.life",
	GitHubUsername: "nii236",
	hasCrashed: false,
	explosionSoundPlayed: false
}

const settingsReducer = (state: SettingsState = initialSettings, action: SettingsAction) => {
	switch (action.type) {
		case EXPLOSIONSOUND:
			state = Object.assign({}, state, {
				explosionSoundPlayed: action.value
			})
		case HASCRASHED:
			state = Object.assign({}, state, {
				hasCrashed: action.value
			})
		case GITHUBUSERNAME:
			state = Object.assign({}, state, {
				GitHubUsername: action.value
			})
		default:
			return state
	}
	return state
}

export { settingsReducer }
