<script lang="ts">
	import { toast, type Toast } from '$lib/stores/toast';
	import { fly } from 'svelte/transition';

	let toasts: Toast[] = [];
	toast.subscribe((value) => (toasts = value));
</script>

<div class="fixed top-6 left-1/2 z-[1000] -translate-x-1/2 transform space-y-2 w-3/4">
	{#each toasts as toast (toast.id)}
		<div
			in:fly={{ y: -50, duration: 300 }}
			out:fly={{ y: -50, duration: 300 }}
			class="rounded px-6 py-3 text-center text-white shadow"
			class:bg-green-500={toast.type === 'success'}
			class:bg-red-500={toast.type === 'error'}
			class:bg-blue-500={toast.type === 'info'}
		>
			{toast.message}
		</div>
	{/each}
</div>
