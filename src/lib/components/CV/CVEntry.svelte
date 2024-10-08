<script lang="ts">
    export let left:  string = "";
    export let right: string = "";
    export let bold:  string = "";
</script>

<div class="justify-self-start col-span-3">
    <p class={bold == "left" ? "font-bold" : ""}>
        {left}
        <slot />
    </p>
</div>
<div class="justify-self-end">
    <p class={bold == "right" ? "font-bold" : ""}>{right}</p>
</div>