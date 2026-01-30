<script lang="ts">
	import type { Image } from '$lib/types.js';
	import fotos from '$lib/foto';

	export let data;

	let dialogOpen: boolean = false,
		image: Partial<Image> = {};

	function handleImageClick(i: number) {
		dialogOpen = true;
		image = data.meta[i];
	}
</script>

<div class="w-full flex justify-between">
	<div class="w-fit py-2 px-4 z-30">
		<p class="text-4xl leading-none font-light">Galleria</p>
		<p class="text-[#aaa] text-sm text-opacity-55 leading-none">by Giacomo Folli</p>
	</div>
</div>

<div class="pt-2 px-4 md:px-6 pb-8">
	<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
		{#each fotos as foto, i}
			<button
				class="relative overflow-hidden rounded-lg break-inside-avoid bg-neutral-900 hover:opacity-90 transition-opacity duration-300 cursor-pointer group block w-full"
				on:click={() => handleImageClick(i)}
			>
				<img
					src={foto.src}
					alt={foto.alt}
					loading="lazy"
					class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
				/>

				{#if !!foto && !!foto.info?.author}
					<div
						class="text-right absolute bottom-0 left-0 right-0 px-3 pt-10 bg-gradient-to-t from-black via-black/50 to-transparent text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					>
						<div class="w-full flex justify-between items-center">
							{#if !!foto.info?.data}
								<p class="text-[11px] text-neutral-400">{foto.info.data}</p>
							{/if}
							<p class="font-light">{foto.info.author}</p>
						</div>
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>
