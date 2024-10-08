<script lang="ts">
    export let id: string;
    export let title: string;
</script>

<div id="{id}" class="mt-2">
    <p class="text-xl font-bold">{title}</p>
    <slot />
</div>