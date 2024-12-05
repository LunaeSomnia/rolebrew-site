<script lang="ts">
    const { handleName, children } = $props();

    let open = $state(false);

    function onHandleClick() {
        open = !open;
    }
</script>

<div class="sidebar-accordion">
    <button class="sidebar-accordion-handle" onclick={onHandleClick}>
        <p>{handleName}</p>
    </button>
    <div class="sidebar-accordion-content">
        {#if open}
            {@render children?.()}
        {/if}
    </div>
</div>
