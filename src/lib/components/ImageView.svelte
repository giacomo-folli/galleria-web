<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Image } from '$lib';
	import fotos from '$lib/foto';

	export let image: Partial<Image & { next: number; prev: number; index: number }> = {},
		opened: boolean = false;
</script>

<div class="w-[100vw] bg-black">
	<div class="absolute top-4 right-4">
		<button on:click={() => (opened = !opened)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="currentColor"
				class="size-5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<div class="w-full h-[100vh] flex flex-col justify-center">
		{#if !!image && !!image.src}
			<img class="mx-auto object-contain h-[80vh] w-[92vw]" src={image.src} alt={image.alt} />
		{:else}
			<p>Couldn't find the image</p>
		{/if}
	</div>
</div>
