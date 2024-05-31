<script lang="ts">
	import Sparkle from '$lib/components/Sparkle.svelte';
	import { onDestroy, onMount } from 'svelte';

type SparkleType = {
    id: string,
    createdAt: number,
    color: string,
    size: number,
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
    style: any
}


	const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
	const generateSparkle = (): SparkleType => {
		return {
			id: String(random(10000, 99999)),
			createdAt: Date.now(),
			color:'#ffd860',
			size: random(20, 25),
			style: {
				// Pick a random spot in the available space
				top: random(-10, 80) + '%',
				left: random(0, 100) + '%'
			}
		};
	};

	let sparkles: SparkleType[] = [];
	let sparklesInterval: NodeJS.Timer;

	onMount(() => {
		sparklesInterval = setInterval(() => {
			const now = Date.now();
			// Create a new sparkle
			const sparkle = generateSparkle();
			// Clean up any "expired" sparkles
			const nextSparkles = sparkles.filter((sparkle) => {
				const delta = now - sparkle.createdAt;
				return delta < 1500;
			});
			// Include our new sparkle
			nextSparkles.push(sparkle);
			sparkles = nextSparkles;
		}, 400);
	});

	onDestroy(() => {
		clearInterval(sparklesInterval);
	});
</script>

<div class="sparkle-wrapper">
	{#each sparkles as sparkle (sparkle.id)}
		<Sparkle color={sparkle.color} size={sparkle.size} style={sparkle.style} />
	{/each}
	<span class="slot-wrapper">
		<slot />
	</span>
</div>

<style lang="scss">
	.sparkle-wrapper {
		position: relative;
		display: inline-block;

		.slot-wrapper {
			position: relative;
			z-index: 1;
		}
	}
</style>