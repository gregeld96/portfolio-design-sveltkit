<script lang="ts">
	import ProjectDetail from '../../../components/pages/project/ProjectDetail.svelte';

	export let data: any;
</script>

{#if data.project}
	<ProjectDetail project={data.project} />
{:else}
	<div class="flex min-h-screen items-center justify-center">
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Project Not Found</h1>
			<p class="mb-8 text-gray-600 dark:text-gray-400">
				The project you're looking for doesn't exist.
			</p>
			<a
				href="/projects"
				class="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
			>
				Back to Projects
			</a>
		</div>
	</div>
{/if}
