<script lang="ts">
	import { onDestroy } from 'svelte';
	import { onMount } from 'svelte';
	import { auth } from '../../../lib/stores/session';
	import { http } from '../../../lib/apis/http';
	import { loading } from '../../../lib/stores/modal';
	import { toast } from '../../../lib/stores/toast';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let videoEl: HTMLVideoElement;
	let canvasEl: HTMLCanvasElement;
	let stream: MediaStream | null = null;
	let photoData: string | null = null;
	let imageBlob = null;
	let removeButton: boolean = false;
	let section: string = 'success';

	// Minta izin & tampilkan kamera
	async function startCamera() {
		try {
			stream = await navigator.mediaDevices.getUserMedia({ video: true });
			videoEl.srcObject = stream;
			await videoEl.play();
			removeButton = true;
		} catch (err) {
			console.error('Camera error:', err);
			alert('Tidak bisa akses kamera: ' + err.message);
		}
	}

	// Ambil foto dari kamera
	function takePhoto() {
		const ctx = canvasEl.getContext('2d');
		if (!ctx) return;

		canvasEl.width = videoEl.videoWidth;
		canvasEl.height = videoEl.videoHeight;

		ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);

		canvasEl.toBlob(
			(blob) => {
				imageBlob = blob;
			},
			'image/jpeg',
			0.9
		);

		photoData = canvasEl.toDataURL('image/png'); // hasil base64

		stopCamera();
	}

	async function submitPhoto() {
		loading.show();

		try {
			if (!imageBlob) return;

			const formData = new FormData();
			formData.append('file', imageBlob, 'photo.jpg');
			formData.append('category', 'photo-profile');

			const response = await http(`media-file/upload`, {
				method: 'POST',
				body: formData
			});

			const resp = await http('accounts/profile-pic', {
				method: 'PUT',
				body: JSON.stringify({
					photoUrl: response.data
				})
			});

			dispatch('success');
		} catch (err: any) {
			toast.show(err.message, 'error');
		} finally {
			loading.close();
		}
	}

	function changeSection(value: string) {
		section = value;
	}

	function stopCamera() {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			stream = null;
		}
	}

	async function retakePhoto() {
		photoData = null; // hasil base64

		stream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = stream;
		await videoEl.play();
	}

	onMount(() => {
		auth.restore();
	});

	onDestroy(() => {
		stopCamera();
	});
</script>

{#if section === 'success'}
	<div class="flex flex-col items-center justify-center gap-2">
		<p class="text-sm">Terima Kasih sudah mendaftar</p>
		<p class="text-2xl text-[#D8BD89] italic">Welcome to Project 37</p>
		<button
			on:click={() => changeSection('photo')}
			class="rounded bg-green-600 px-4 py-2 text-white"
		>
			Give us your best photo
		</button>
	</div>
{:else}
	<div class="space-y-4">
		<!-- Video Kamera -->
		{#if photoData}
			<div class="flex items-center justify-center">
				<img
					src={photoData}
					alt="Captured photo"
					class="h-[250px] w-[250px] rounded-full border object-cover"
				/>
			</div>
		{:else}
			<div class="flex items-center justify-center">
				<video
					bind:this={videoEl}
					autoplay
					playsinline
					class="h-[250px] w-[250px] rounded-full border object-cover"
				></video>
			</div>
		{/if}

		<div class="flex justify-center gap-3">
			{#if photoData}
				<button
					on:click={retakePhoto}
					type="button"
					class="rounded bg-green-600 px-4 py-2 text-white"
				>
					Retake Photo
				</button>
				<button
					on:click={() => submitPhoto()}
					type="button"
					class="rounded bg-black px-4 py-2 text-white"
				>
					Submit
				</button>
			{:else if !removeButton}
				<button
					on:click={startCamera}
					type="button"
					class="rounded bg-blue-600 px-4 py-2 text-white"
				>
					Open Camera
				</button>
			{:else}
				<button
					on:click={takePhoto}
					type="button"
					class="rounded bg-green-600 px-4 py-2 text-white"
				>
					Take Photo
				</button>
			{/if}
		</div>

		<!-- Canvas untuk snapshot (disembunyikan, hanya digunakan capture) -->
		<canvas bind:this={canvasEl} class="hidden"></canvas>
	</div>
{/if}
