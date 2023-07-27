
<script lang="ts">
	import WorkLink from './../../components/WorkLink.svelte';
    import { onMount } from "svelte";
	let language = "en"

	const date1: Date = new Date('2023-07-27');
	const date2: Date = new Date();

	const diffInMilliseconds: number = date2.getTime() - date1.getTime();


	const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

	onMount(() => {
		if (navigator.language == "de") {
			language = "de"
		}
	})
</script>
<svelte:head>
	<title>zuhören | About us</title>
	<meta name="description" content={language? "Zuhören ist eine Social-Media-App mit dem Focus auf lagem Kontent. Dabei werden Videos, Audios und Blogartikelt unterstützt.": "en"} />
</svelte:head>

<section>
	{#if language == "de"}
		<h2>
			Hey,
		</h2>
		<p>
			dies ist eine relativ neue Social-Media-App, die erste Zeile Code wurde vor {diffInDays} Tagen geschrieben und das von dem Gründer <WorkLink name="Henri"/>. Unsere Mission war es, eine App zu entwickeln, die mal zur abwechslung Content bereitstellt, der etwas länger ist. Wir bieten die Möglichkeit Creatorn vor dem Content, kleine Werbespots zu posten. Als Consumer kann man sich Posts abspeichern, liken, disliken, kommentieren, Sharen, einer Liste hinzufügen, 
		</p>
	{:else}
		<p>nö</p>
	{/if}
</section>