import Point from "./geometry/Point";
import Rectangle from "./geometry/Rectangle";
import { fill } from "./packing";

export function manualTest() {
	const p = new Point(1, 2);
	console.log(p.toString());
	p.set(3, 5);
	console.log(p.toString());
	p.add(1, -1);
	console.log(p.toString());

	const r = new Rectangle(4, 5);
	console.log(r.toString(), r.area());
	r.transpose();
	console.log(r.toString(), r.area());

	const r2 = new Rectangle(1, 1);
	p.set(0, 0);

	console.log(r.contains(r2, p));
	p.add(1, 1);
	console.log(r.contains(r2, p));
	p.add(1, 1);
	console.log(r.contains(r2, p));
	p.add(1, 1);
	console.log(r.contains(r2, p));
	p.add(1, 1);
	console.log(r.contains(r2, p));

	console.log(r.area());
	console.log(fill(r, r2, new Point(0, 0)));
}
