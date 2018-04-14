// @flow

import * as React from "react"

type Props = {
	children: any,
}

class Ocean extends React.Component<Props> {
	componentDidMount() {
		let canvas = document.querySelector("#Ocean canvas")
		let ctx = canvas.getContext("2d")
		canvas.width = window.innerWidth
		canvas.height = 200
		let song = document.querySelector("#song")

		let horizont = 0
		let totalwaves = 70

		function clearScreen() {
			ctx.clearRect(0, horizont, canvas.width, canvas.height)
		}

		function drawSea() {
			ctx.globalAlpha = 0.65
			ctx.fillStyle = "#254a6b"
			ctx.fillRect(0, horizont, canvas.width, canvas.height)
			ctx.globalAlpha = 1.0
		}

		function rnd(min, max) {
			return min + ~~(Math.random() * (max - min))
		}

		class Wave {
			constructor(x, y) {
				this.x = x
				this.y = y
				this.size = rnd(5, 40) * rnd(1, 5)
				this.small = true
				this.color = ["#4591a8", "#5ba4ba", "#316b7c"][rnd(0, 3)]
				this.speed = 10
			}

			update() {
				if (this.speed > 0) {
					this.speed--
					return
				} else this.speed = 10

				if (this.small) {
					this.x -= 2
					this.size += 4
					this.small = false
				} else {
					this.x += 2
					this.size -= 4
					this.small = true
				}
			}

			draw() {
				ctx.beginPath()
				ctx.strokeStyle = this.color
				ctx.lineWidth = 3
				ctx.moveTo(this.x, this.y)
				ctx.lineTo(this.x + this.size, this.y)
				ctx.stroke()
			}
		}

		ctx.beginPath()
		ctx.lineWidth = 2
		ctx.strokeStyle = "#074659"
		ctx.moveTo(0, horizont - 1)
		ctx.lineTo(canvas.width, horizont - 1)
		ctx.stroke()

		// Init
		let waves = []

		for (let i = 0; i < totalwaves; i++) waves[i] = new Wave(rnd(0, canvas.width), rnd(horizont + 1, canvas.height))
		// Loop
		function update() {
			for (let i = 0; i < totalwaves; i++) waves[i].update()
		}

		function draw() {
			clearScreen()

			for (let i = 0; i < totalwaves; i++) waves[i].draw()

			drawSea()
		}

		function loop() {
			requestAnimationFrame(loop)
			update()
			draw()
		}

		loop()
	}
	render() {
		return (
			<div id="Ocean">
				{this.props.children}
				<canvas />
			</div>
		)
	}
}

export { Ocean }
