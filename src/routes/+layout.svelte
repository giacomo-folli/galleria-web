<script lang="ts">
	import './app.css';

	let promise: Promise<boolean> = new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});

	let loaded: boolean = false;
	promise.then((success) => (loaded = success));
</script>

{#if !loaded}
	<div class="loader flex flex-col justify-center">
		<div class="mx-auto w-fit flex flex-col justify-end animate-bounce">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.6"
				stroke="#999"
				class="size-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
				/>
			</svg>
		</div>
		<span class="mx-auto type-welcome text-sm text-[#999]"></span>
	</div>
{/if}

<div class="main" class:loaded>
	<slot />
</div>

<style>
	.loader {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 500;
	}

	.main {
		display: none;
	}

	.loaded {
		display: block;
	}
</style>
