import Point from "./geometry/Point";
import Rectangle from "./geometry/Rectangle";

interface Placement {
	x: number;
	y: number;
	width: number;
	height: number;
}

/**
 * Calculates the ratio of covered area to maximum possible coverage
 * @param container
 * @param panel
 * @param count Number of panels placed
 * @returns ratio, 1 if 0 possible
 */
export function packingRatio(
	container: Rectangle,
	panel: Rectangle,
	count: number
) {
	const maximumPossible = Math.floor(container.area() / panel.area());

	if (maximumPossible === 0) {
		return 1;
	}

	return count / maximumPossible;
}

/**
 * Fills the container Rectangle with as many panel Rectangles as possible
 * @param container Containing Rectangle
 * @param panel Panel to tile
 * @param position Point to start from
 * @returns Number of panels placed, how they were placed, and the endinng position
 */
export function fill(
	container: Rectangle,
	panel: Rectangle,
	position: Point
): { count: number; placements: Placement[]; finalPosition: Point } {
	let count = 0;
	let placements: Placement[] = [];
	let pos = position.clone();

	while (container.contains(panel, pos)) {
		placements.push({
			x: pos.x,
			y: pos.y,
			width: panel.width,
			height: panel.height,
		});
		count++;
		pos.x += panel.width;

		if (!container.contains(panel, pos)) {
			pos.x = 0;
			pos.y += panel.height;
		}
	}

	return { count, placements, finalPosition: pos };
}
