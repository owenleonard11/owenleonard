<script lang="ts">
    export let left:  string = "";
    export let right: string = "";
    export let bold:  string = "";
</script>

<div class="flex flex-row justify-between">
    <p class={bold == "left" ? "font-bold" : ""}>
        {left}
        <slot />
    </p>
    <p class={bold == "right" ? "font-bold" : ""}>{right}</p>
</div>