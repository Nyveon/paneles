export default class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Creates a new Point at the same position
	 * @returns cloned Point
	 */
	clone(): Point {
		return new Point(this.x, this.y);
	}

	/**
	 * Changes this Point's position *to* the given coordinates
	 * @param x int
	 * @param y int
	 */
	set(x: number, y: number): void {
		this.x = x;
		this.y = y;
	}

	/**
	 * Changes this Point's position *by* the given coordinates
	 * @param x int
	 * @param y int
	 */
	add(x: number, y: number): void {
		this.x += x;
		this.y += y;
	}

	toString(): string {
		return `${this.x}, ${this.y}`;
	}
}
