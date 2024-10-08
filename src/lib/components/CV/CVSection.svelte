<script lang="ts">
    export let id: string;
    export let title: string;
</script>

<p class="text-xl font-bold mt-2">{title}</p>
<div id="{id}" class="grid grid-cols-4 gap-x-4">
    <slot />
</div>