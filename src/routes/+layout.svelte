<script lang="ts">
	import { inject } from '@vercel/analytics';
	import './app.css';

	// just to get some analytics from vercel
	inject({ mode: 'auto' });
</script>

<div class="main">
	<slot />
</div>
