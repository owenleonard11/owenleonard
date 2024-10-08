<script lang="ts">
    export let id: string;
    export let title: string;
</script>

<div id="{id}" class="mt-2 grid grid-cols-3">
    <div>
        <p class="text-xl font-bold">{title}</p>
    </div>
    <div />
    <slot />
</div>