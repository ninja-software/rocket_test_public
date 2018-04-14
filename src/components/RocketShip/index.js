// @flow
import * as React from "react"
import { GuidanceSystem } from "../GuidanceSystem"

import SpriteAnimator from "react-sprite-animator"

import RocketIMG from "../../assets/img/rocket.png"
import DestroyedRocketIMG from "../../assets/img/destroyedrocket.png"

import TrailIMG from "../../assets/img/trail.png"
import ExplosionSprite from "../../assets/img/explosionsprite.png"
import FlameSprite from "../../assets/img/flame.png"
import Sound from "react-sound"
import RocketSound from "../../assets/sounds/rocket.mp3"
import ExplosionSound from "../../assets/sounds/explosion.mp3"

type Props = {
	guidanceData: Object,
	explosionSoundPlayed: boolean,
	onExplosion: Function,
	hasCrashed: boolean,
}

const RocketShip = GuidanceSystem(({ guidanceData, hasCrashed, explosionSoundPlayed, onExplosion }: Props) => {
	if (!guidanceData) {
		return ""
	}

	return (
		<div
			className="rocket-wrapper"
			style={{
				left: guidanceData.Position.X,
				bottom: guidanceData.Position.Y,
				transform: `rotate(${-guidanceData.Angle + 90}deg)`,
			}}
		>
			{!hasCrashed && (
				<div className="trail-wrapper">
					<img src={TrailIMG} alt="" className="trail" />
					<Sound playStatus={"PLAYING"} url={RocketSound} loop={true} />
				</div>
			)}
			{hasCrashed && (
				<div className="explosion-wrapper">
					<SpriteAnimator sprite={ExplosionSprite} stopLastFrame={true} width={94} height={91} fps={5} />
					<SpriteAnimator
						sprite={FlameSprite}
						className="flame-sprite"
						shouldAnimate={true}
						width={85.333333}
						height={85.333333}
						fps={5}
					/>
					{!explosionSoundPlayed && (
						<Sound
							playStatus={"PLAYING"}
							url={ExplosionSound}
							onFinishedPlaying={onExplosion}
							loop={false}
						/>
					)}
				</div>
			)}

			<img src={!hasCrashed ? RocketIMG : DestroyedRocketIMG} alt="" className="rocket" />
		</div>
	)
})

export { RocketShip }
