<script>
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
    <p><code>404 Not Found</code></p>
    <h1>Page not found</h1>
{:else}
    <h1>{$page.status} {$page.error?.message}</h1>
{/if}

