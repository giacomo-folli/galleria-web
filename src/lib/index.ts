// place files you want to import through the `$lib` alias in this folder.
export type Image = {
	src: string;
	alt: string;
	next: number;
	prev: number;
	index: number;
	info?: {
		[key: string]: string;
	};
};
