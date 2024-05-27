import images from '$lib/foto';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	const meta = images;

	return { meta };
}) satisfies LayoutLoad;
