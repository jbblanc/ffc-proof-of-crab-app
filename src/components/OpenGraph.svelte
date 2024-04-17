<script lang="ts">
	export let title = 'Proof of Crab';
	export let description = 'Proof of Humanity token and challenge based on Farcaster frame';
	export let url = 'https://ffc-proof-of-crab-app.vercel.app/';
	export let image =
		'https://jopwkvlrcjvsluwgyjkm.supabase.co/storage/v1/object/public/poc-images/GrabHome.png';
	export let imageType = null;
	export let type = 'website';
	export let locale = 'en_US';
	//export let localeAlternate = 'fr_FR'; //ex: en_US
	export let twitterAccount = null; //ex: @bobby_12

	if (!imageType) {
		imageType = getImageType(image);
	}

	export function getFileExtension(filePath: string) {
		return filePath ? filePath.split('.').pop()?.toLowerCase() : null;
	}

	function getImageType(fileUri: string) {
		if (fileUri) {
			const ext = getFileExtension(fileUri);
			// beware, cnft media url end with .png&size=thumb, etc
			if (ext.includes('png')) {
				return 'image/png';
			} else if (ext.includes('jpg') || ext.includes('jpeg')) {
				return 'image/jpg';
			} else if (ext.includes('gif')) {
				return 'image/gif';
			}
		}
		return 'image/png';
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	{#if imageType}
		<meta property="og:image:type" content={imageType} />
	{/if}
	<meta property="og:locale" content={locale} />
	<!--{#if localeAlternate}
    <meta property="og:locale:alternate" content={localeAlternate} />
  {/if}-->

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	{#if twitterAccount}
		<meta property="twitter:site" content={twitterAccount} />
	{/if}
</svelte:head>
