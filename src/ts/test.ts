import Point from "./geometry/Point";
import Rectangle from "./geometry/Rectangle";
import { fill, packingRatio } from "./packing";

function testRange() {
	const start = new Point(0, 0);
	const MAXM = 10; // O(MAXM^4 💀)
	//todo: could set b = a and y = x in loops for 0.5x iterations
	let total = 0;
	let underOne = 0;
	let bad = 0;
	let fails = 0;

	for (let a = 1; a < MAXM; a++) {
		for (let b = 1; b < MAXM; b++) {
			const container = new Rectangle(a, b);

			for (let x = 1; x < MAXM; x++) {
				for (let y = 1; y < MAXM; y++) {
					const panel = new Rectangle(x, y);

					start.set(0, 0);
					const { count, placements } = fill(container, panel, start);
					const ratio = packingRatio(container, panel, count);
					console.log(container.toString(), panel.toString(), placements);
					console.log(ratio);

					// Reporting
					total++;
					if (ratio < 1) {
						underOne++;
						if (ratio < 0.8) {
							bad++;

							if (ratio === 0) {
								fails++;
							}
						}
					}
				}
			}
		}
	}

	console.log(
		`Total: ${total}\n${underOne} suboptimal: ${bad} bad, ${fails} fails`
	);
}

export function manualTest() {
	testRange();
}
