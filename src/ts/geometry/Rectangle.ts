export default class Rectangle {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	clone(): Rectangle {
		return new Rectangle(this.width, this.height);
	}

	area(): number {
		return this.width * this.height;
	}
}
