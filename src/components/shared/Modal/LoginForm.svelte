<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { http } from '../../../lib/apis/http';
    import { auth } from '../../../lib/stores/session';
    import { toast } from '../../../lib/stores/toast';
	import { loading } from '../../../lib/stores/modal';

	const dispatch = createEventDispatcher();

	let showPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}

	let email = '';
	let password = '';
	
	async function handleSubmit(e: any) {
        e.preventDefault();

		loading.show();

		try {
			const data = {
				email,
				password
			};

			const resp = await http(`auths/login`, {
				method: 'POST',
				body: JSON.stringify(data)
			});

            auth.login(resp.data.data.token, resp.data.data.user);

			dispatch('submit', resp.data.data.user);
		} catch (err: any) {
			toast.show(err.message, 'error');
		} finally {
			loading.close();
		}
	}
</script>

<form on:submit={handleSubmit} class="space-y-4">
	<div class="flex flex-col gap-2">
		<p class="text-white">Email<span class="text-red-500">*</span></p>
		<input
			bind:value={email}
			type="email"
			name="email"
			placeholder="johndoe@gmail.com"
			class="w-full rounded border p-2"
			required
		/>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Password<span class="text-red-500">*</span></p>
		<div class="flex items-center rounded border px-2 py-1">
			<input
				type={showPassword ? 'text' : 'password'}
				bind:value={password}
				placeholder="Enter password"
				class="flex-1 py-2 outline-none"
				required
			/>
			<button
				type="button"
				on:click={togglePassword}
				class="ml-2 text-sm text-[#FFFFFF] focus:outline-none"
			>
				{showPassword ? 'Hide' : 'Show'}
			</button>
		</div>
	</div>
	<button type="submit" class="w-full rounded-full bg-black p-2 text-white hover:bg-[#D8BD89]"
		>Login</button
	>
</form>
