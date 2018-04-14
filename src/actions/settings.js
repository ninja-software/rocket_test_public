//@flow

const EXPLOSIONSOUND = "SET:SETTINGS:EXPLOSIONSOUND"
const HASCRASHED = "SET:SETTINGS:HASCRASHED"
const GITHUBUSERNAME = "SET:SETTINGS:GITHUBUSERNAME"

const setSetting = (type: string, value: string | number) => {
	return {
		type,
		value,
	}
}

export { setSetting, EXPLOSIONSOUND, HASCRASHED, GITHUBUSERNAME }
