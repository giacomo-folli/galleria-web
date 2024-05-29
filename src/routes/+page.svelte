<script lang="ts">
	import type { Image } from '$lib';
	import Dialog from '$lib/components/Dialog.svelte';
	import ImageView from '$lib/components/ImageView.svelte';
	import LinkIcon from '$lib/components/LinkIcon.svelte';
	import fotos from '$lib/foto';

	export let data;

	let dialogOpen: boolean = false,
		image: Partial<Image> = {},
		showTitles: boolean = false;
	function handleImageClick(i: number) {
		dialogOpen = true;
		image = data.meta[i];
	}

	const handleShowNextImage = () => (image = data.meta[image.next!]);
	const handleShowPrevImage = () => (image = data.meta[image.prev!]);
</script>

<div class="fixed w-fit pt-5 md:pt-6 pb-5 px-4 z-30">
	<p class="text-4xl leading-none">Galleria</p>
	<p class="text-[#aaa] text-sm text-opacity-55 leading-none">by Giacomo Folli</p>
</div>

<div class="sticky -top-16 w-full h-20 py-5 px-4 bg-black backdrop-blur-lg z-20" />
<div class="sticky top-0 w-full text-right text-xs md:text-sm py-5 pt-[25px] px-4 bg-black bg-opacity-75 backdrop-blur-sm z-20">
	<p class="flex items-center justify-end gap-1">
		foto di <a class="underline" href="https://www.instagram.com/paco.nocap/">gepy </a><LinkIcon />
	</p>
	<p class="flex items-center justify-end gap-1">
		foto di <a class="underline" href="https://www.instagram.com/martina.pagliara/"
			>marti
		</a><LinkIcon />
	</p>
	<p class="flex items-center justify-end gap-1">
		foto di <a class="underline" href="https://www.instagram.com/_pietro_g02/">pietro </a><LinkIcon
		/>
	</p>
</div>

<div class="">
	<div class="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
		{#each fotos as foto, i}
			<button class="relative" on:click={() => handleImageClick(i)}>
				<img
					src={foto.src}
					alt={foto.alt}
					class="aspect-square object-cover hover:opacity-80 hover:shadow-inner hover:border-b-[20px] hover:border-black"
				/>

				{#if !!foto && !!foto.info?.name && showTitles}
					<div
						class="absolute top-0 left-0 w-full text-center h-full flex flex-col justify-center opacity-50 hover:opacity-90"
					>
						<span class="mx-auto bg-black px-1 rounded-sm bg-opacity-60 text-[20px] font-mono">
							{foto.info.name}
						</span>
					</div>
				{/if}

				{#if !!foto && !!foto.info?.data}
					<div
						class="bg-black px-1 rounded-tl-sm bg-opacity-60 absolute bottom-0 right-0 text-[10px]"
					>
						{foto.info.data}
					</div>
				{/if}

				{#if !!foto && !!foto.info?.author}
					<div
						class="bg-black px-1 rounded-tr-sm bg-opacity-60 absolute bottom-0 left-0 text-[10px]"
					>
						{foto.info.author}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<div class="w-full z-50">
	<Dialog transition="scale" bind:open={dialogOpen} _transitionDuration="0.6s">
		<ImageView bind:image bind:opened={dialogOpen} />

		<div class="absolute bottom-8 w-full flex justify-center gap-2">
			<button on:click={handleShowPrevImage}>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
						/>
					</svg>
				</div>
			</button>
			{image.index} of {fotos.length}
			<button on:click={handleShowNextImage}>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</button>
		</div>
	</Dialog>
</div>
