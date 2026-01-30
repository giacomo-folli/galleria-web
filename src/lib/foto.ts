import type { Image } from '$lib/types';

const author = 'Giacomo Folli'

// Dynamically load all images from /static/images
const imageGlob = import.meta.glob('/static/images/o/*.{jpg,jpeg,png,webp,gif,svg}');

const fotos: Pick<Image, 'src' | 'alt' | 'info'>[] = Object.keys(imageGlob)
	.map(path => {
		const name = path.split('/').pop() || 'Image';

		return {
			src: path.replace('/static', ''), // Convert to /images/... path
			alt: path.split('/').pop()?.split('.')[0] || 'Image',
			info: {
				author: author,
				name: name,
				data: '25/05/2024'
			},
		}
	})
	.sort((a, b) => a.src.localeCompare(b.src)); // Sort alphabetically for consistent order

const images: Image[] = fotos.map((f, i) => {
	return {
		...f,
		index: i,
		prev: i == 0 ? fotos.length - 1 : i - 1,
		next: i == fotos.length - 1 ? 0 : i + 1
	};
});

export default images;
