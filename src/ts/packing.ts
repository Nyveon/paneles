import Point from "./geometry/Point";
import Rectangle from "./geometry/Rectangle";

interface Placement {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface AlgorithmResult {
	count: number;
	placements: Placement[];
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

	//todo: consider panel > container
	//todo: consider diagonal case of previous

	if (maximumPossible === 0) {
		return 1;
	}

	return count / maximumPossible;
}

/**
 * Fills the container Rectangle with as many panel Rectangles as possible
 * @param container Containing Rectangle
 * @param panel Panel to tile
 * @param cursor Point to start from -> Will be mutated!
 * @returns Number of panels placed, how they were placed
 */
export function fill(
	container: Rectangle,
	panel: Rectangle,
	cursor: Point
): AlgorithmResult {
	const placements: Placement[] = [];
	let count = 0;

	while (container.contains(panel, cursor)) {
		placements.push({
			x: cursor.x,
			y: cursor.y,
			width: panel.width,
			height: panel.height,
		});
		count++;
		cursor.x += panel.width;

		if (!container.contains(panel, cursor)) {
			cursor.x = 0;
			cursor.y += panel.height;
		}
	}

	return { count, placements };
}

export function transposeFill(
	container: Rectangle,
	panel: Rectangle
): AlgorithmResult {
	const pos = new Point(0, 0);

	//todo: potential optimization, transpose optimally first then only do one orientation
	//todo: can also exit early if maximum possible count is reached

	const panel1 = panel.clone();
	const result1 = fill(container, panel1, pos);
	pos.x = 0;
	panel1.transpose();
	const result2 = fill(container, panel1, pos);
	const firstOrientation: AlgorithmResult = {
		count: result1.count + result2.count,
		placements: [...result1.placements, ...result2.placements],
	};

	pos.set(0, 0);
	const result3 = fill(container, panel1, pos);
	pos.x = 0;
	panel1.transpose();
	const result4 = fill(container, panel1, pos);
	const secondOrientation: AlgorithmResult = {
		count: result3.count + result4.count,
		placements: [...result3.placements, ...result4.placements],
	};

	return firstOrientation.count >= secondOrientation.count
		? firstOrientation
		: secondOrientation;
}
