<script lang="ts">
    export let left       :  string = "";
    export let right      : string  = "";
    export let bold       :  string = "";
    export let hoverShadow: boolean = false;
</script>

<div class="contents {hoverShadow ? "[&>*]:hover:shadow-lg [&>*]:hover:cursor-pointer": ""}">
    <div class="justify-self-start col-span-3 w-full rounded-sm">
        <p class={bold == "left" ? "font-bold" : ""}>
            {left}
            <slot />
        </p>
    </div>
    <div class="justify-self-end w-full text-right">
        <p class={bold == "right" ? "font-bold" : ""}>{right}</p>
    </div>
</div>
    