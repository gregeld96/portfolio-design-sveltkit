<script lang="ts">
	export let logo = '/favicon.png'; // you can pass custom logo path

	import { loading } from '$lib/stores/modal';

	let load: boolean = true;
	loading.subscribe((value) => (load = value));
</script>

{#if load}
	<div class="flex h-screen items-center justify-center">
		<div class="fixed inset-0 z-[5000] flex items-center justify-center bg-black/80">
			<div class="relative flex h-32 w-32 items-center justify-center">
				<!-- Spinning border -->
				<div
					class="absolute inset-0 animate-spin rounded-full border-4 border-t-[#D8BD89] border-r-transparent border-b-transparent border-l-transparent"
				></div>

				<!-- Logo -->
				<img src={logo} alt="Loading Logo" class="relative z-10 h-24 w-24" />
			</div>
		</div>
	</div>
{/if}
