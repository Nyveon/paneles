import Point from "./geometry/Point";
import Rectangle from "./geometry/Rectangle";
import { fill, packingRatio } from "./packing";

export function manualTest() {
	const r = new Rectangle(4, 5);
	const r2 = new Rectangle(1, 2);

	const { count } = fill(r, r2, new Point(0, 0));

	console.log(packingRatio(r, r2, count));
}
