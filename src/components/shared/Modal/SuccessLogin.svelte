<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onDestroy } from 'svelte';

	export let name;

	const dispatch = createEventDispatcher();

	let interval;

	// Start an interval to dispatch every 5 seconds
	interval = setInterval(() => {
        location.reload();
		dispatch('close');
	}, 5000);

	// // Cleanup when component is destroyed
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center justify-center gap-2">
	<p class="text-sm">Shalom, {name}</p>
	<p class="text-2xl text-[#D8BD89] italic">Aku Padamu, Kamu Bisa</p>
</div>
