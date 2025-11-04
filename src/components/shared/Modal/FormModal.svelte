<script lang="ts">
	import { authModalOpen, authModalTab, closeAuthModal, loading } from '$lib/stores/modal';
	import { onDestroy } from 'svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import RegisterForm from './RegisterForm.svelte';
	import LoginForm from './LoginForm.svelte';
	import PhotoForm from './PhotoForm.svelte';
	import SuccessLogin from './SuccessLogin.svelte';

	let open: boolean;
	let tab: 'login' | 'register' | 'photo';
	let user: any;

	$: ($authModalOpen, (open = $authModalOpen));
	$: ($authModalTab, (tab = $authModalTab));

	function changeData(data: any) {
		user = data.detail;
	}

	function changeTab(section: string) {
		authModalTab.set(section)
	}

	onMount(() => {
		const unsubscribe = authModalOpen.subscribe((isOpen) => {
			if (typeof document !== 'undefined') {
				if (isOpen) {
					document.body.classList.add('overflow-hidden');
				} else {
					document.body.classList.remove('overflow-hidden');
				}
			}
		});

		return () => {
			unsubscribe();
			if (typeof document !== 'undefined') {
				document.body.classList.remove('overflow-hidden');
			}
		};

		onDestroy(() => {
			document.body.classList.remove('overflow-hidden');
		});
	});
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		transition:fade
		on:click={() => {
			if(tab === 'login' ||  tab === 'register') {
				closeAuthModal();
				changeTab('login');
			}
		}}
	>
		<div
			class="relative w-full max-w-md rounded-xl bg-gradient-to-br from-[#080808] to-[#D8BD89] p-6 text-white shadow-xl"
			on:click|stopPropagation
			transition:fly={{ y: 30, duration: 200 }}
		>
			<!-- Close Button -->
			{#if tab === 'login' || tab === 'register'}
				<button
					class="absolute top-3 right-3 text-gray-400 hover:text-black"
					on:click={() => {
						closeAuthModal();
						changeTab('login');
					}}
				>✕</button>
			{/if}

			<div class="flex w-full items-center justify-center">
				<img src="/favicon.png" alt="Header Logo" class="w-[120px]" />
			</div>
			<!-- Tabs -->
			{#if tab !== 'photo' && tab !== 'success-login' && tab !== 'success-register'}
				<div class="mb-6 flex space-x-4">
					<button
						class={tab === 'login'
							? 'border-b-2 border-[#D8BD89] font-bold'
							: 'cursor-pointer text-gray-500'}
						on:click={() => authModalTab.set('login')}
					>
						Login
					</button>
					<button
						class={tab === 'register'
							? 'border-b-2 border-[#D8BD89] font-bold'
							: 'cursor-pointer text-gray-500'}
						on:click={() => authModalTab.set('register')}
					>
						Register
					</button>
				</div>
			{/if}

			<!-- Content -->
			{#if tab === 'login'}
				<LoginForm
					on:submit={(e: any) => {
						changeData(e);
						changeTab('success-login');
					}}
				/>
			{:else if tab === 'success-login'}
				<SuccessLogin
					name={user?.name}
					on:close={() => {
						closeAuthModal();
						changeTab('login');
						loading.show();
					}}
				/>
			{:else if tab === 'photo'}
				<PhotoForm 
					on:success={() => {
						changeTab('success-login');
					}}
				/>
			{:else}
				<RegisterForm on:submit={(e) => {
					changeData(e);
					changeTab('photo');
				}} />
			{/if}
		</div>
	</div>
{/if}
