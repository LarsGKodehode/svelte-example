<script lang="ts">
	export let promise: Promise<unknown>;
	export let optional: any = null;
</script>

{#await promise}
	<!-- promise is pending -->
	<p>Awaiting promise</p>
{:then}
	<!-- promise was fulfilled -->
	<slot {optional} />
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}
