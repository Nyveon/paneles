import Point from "./Point";

export default class Rectangle {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	/**
	 * Creates a new Rectangle with the same measurements
	 * @returns cloned Rectangle
	 */
	clone(): Rectangle {
		return new Rectangle(this.width, this.height);
	}

	/**
	 * Calculates this Rectangle's area
	 * @returns int
	 */
	area(): number {
		return this.width * this.height;
	}

	/**
	 * Swaps this Rectangle's width and height
	 */
	transpose(): void {
		[this.width, this.height] = [this.height, this.width];
	}

	/**
	 * Checks if this Rectangle contains another one at a given offset
	 * Note: This consider "this" rectangle as the frame of reference
	 * @param other Rectangle
	 * @param position Point
	 * @returns True if contained, False otherwise
	 */
	contains(other: Rectangle, position: Point): boolean {
		return (
			position.x + other.width <= this.width &&
			position.y + other.height <= this.height
		);
	}

	toString(): string {
		return `[${this.width} x ${this.height}]`;
	}
}
