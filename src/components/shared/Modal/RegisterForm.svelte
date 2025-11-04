<style>
	/* Hilangkan default icon */
	input[type="date"]::-webkit-calendar-picker-indicator {
	  filter: invert(1);
	  cursor: pointer;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { http } from '../../../lib/apis/http';
    import { auth } from '../../../lib/stores/session';
    import { toast } from '../../../lib/stores/toast';
	import { loading } from '../../../lib/stores/modal';

	const dispatch = createEventDispatcher();

	let fullname = '';
	let nickname = '';
	let email = '';
	let gender = 'LAKI-LAKI';
	let parishOrigin = '';
	let dob = '';
	let password = '';
	let marital = 'single'; // default
	let partnerName = '';
	let phoneNumber = '';
	let socialMediaInstagram = '';
	let weddingDate = '';

	let showPassword = false;

	function togglePassword() {
		showPassword = !showPassword;
	}

	async function handleSubmit(e: any) {
		e.preventDefault();
		loading.show();

		const data = {
			name: fullname,
			email,
			password,
			dob,
			parishOrigin,
			nickname,
            gender,
			marital,
            phoneNumber,
            socialMediaInstagram,
			...(marital === 'married' && { partnerName, maritalDate: weddingDate })
		};

        try {
            const resp = await http(`auths/register`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
    
            auth.login(resp.data.data.token, resp.data.data.user);

		    dispatch('submit', resp.data.data.user);
        } catch(err: any) {
            toast.show(err.message, 'error')
        } finally {
			loading.close();
        }
	}
</script>

<form class="max-h-[50vh] space-y-4 overflow-auto" on:submit={handleSubmit}>
	<div class="flex flex-col gap-2">
		<p class="text-white">Nama Lengkap <span class="text-red-500">*</span></p>
		<input
			bind:value={fullname}
			type="text"
			placeholder="John Doe"
			class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
			required
		/>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Nama Panggilan<span class="text-red-500">*</span></p>
		<input
			bind:value={nickname}
			name="nickname"
			type="text"
			placeholder="John Doe"
			class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
			required
		/>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Email<span class="text-red-500">*</span></p>
		<input
			bind:value={email}
			type="email"
			name="email"
			placeholder="johndoe@gmail.com"
			class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
			required
		/>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Tanggal Lahir<span class="text-red-500">*</span></p>
		<input
			bind:value={dob}
			type="date"
			name="dob"
			placeholder="Name"
			class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
			required
		/>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Asal Paroki<span class="text-red-500">*</span></p>
		<input
			bind:value={parishOrigin}
			type="text"
			name="parishOrigin"
			placeholder="Paroki"
			class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
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
	<div class="flex flex-col gap-2">
		<p class="text-white">Jenis Kelamin<span class="text-red-500">*</span></p>
		<select bind:value={gender} name="gender" class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]" required>
			<option value="LAKI-LAKI">Laki - Laki</option>
			<option value="PEREMPUAN">Perempuan</option>
		</select>
	</div>
	<div class="flex flex-col gap-2">
		<p class="text-white">Status<span class="text-red-500">*</span></p>
		<select bind:value={marital} name="marital" class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]" required>
			<option value="single">Single</option>
			<option value="married">Menikah</option>
			<option value="divorced">Divorced</option>
		</select>
	</div>
    <div class="flex flex-col gap-2">
        <p class="text-white">No Telp (Ada WA)<span class="text-red-500">*</span></p>
        <input
            bind:value={phoneNumber}
            name="phoneNumber"
            type="text"
            placeholder="08123456789"
            class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
            required
        />
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-white">Username Instagram</p>
        <input
            bind:value={socialMediaInstagram}
            name="socialMediaInstagram"
            type="text"
            placeholder="John Doe"
            class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
        />
    </div>
	{#if marital === 'married'}
		<div class="flex flex-col gap-2">
			<p class="text-white">Nama Pasangan<span class="text-red-500">*</span></p>
			<input
				bind:value={partnerName}
				name="partnerName"
				type="text"
				placeholder="John Doe"
				class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<p class="text-white">Tanggal Menikah<span class="text-red-500">*</span></p>
			<input
				bind:value={weddingDate}
				type="date"
				name="marriedAt"
				placeholder=""
				class="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-[#D8BD89] focus:border-[#D8BD89]"
				required
			/>
		</div>
	{/if}

	<button type="submit" class="w-full rounded-full bg-black p-2 text-white hover:bg-[#D8BD89]"
		>Register</button
	>
</form>