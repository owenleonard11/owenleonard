<script lang="ts">
    import * as cv from "$lib/text/cv.json";
    import { slide } from "svelte/transition";

    let entryVisible: number = -1; 
    const setEntryVisible = (uid: number) => { entryVisible = uid; }
</script>

<div class="flex flex-row h-[80dvh]">
    <div class="m-8 p-4 max-w-4xl h-full border-black border-2 rounded-md bg-warning-100 font-serif overflow-y-auto">
        <p class="text-4xl font-bold">Owen Leonard</p>
        <p class="text-lg text-slate-700">
            <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
            <span>|</span>
            <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
        </p>
        <hr class="mt-2"/>
        {#each cv.sections as section}
            <p class="text-xl font-bold mt-2">{section.title}</p>
            <div class="grid grid-cols-4 gap-x-16">
                {#each section.entries as entry}
                    {#if entry.side}
                        <button 
                            on:click={() => setEntryVisible(entry.uid)} 
                            class="grid grid-cols-subgrid col-span-4 hover:shadow-lg {entryVisible == entry.uid ? "bg-warning-300 shadow-lg" : ""}">
                            <div class="justify-self-start col-span-3 w-full rounded-sm text-left" >
                                <p class={entry.bold == "left" ? "font-bold" : ""}>
                                    {entry.left}
                                    {#if entry.alt}
                                        <span class="text-slate-700 ml-2 text-sm">{entry.alt}</span>
                                    {/if}
                                </p>
                            </div>
                            <div class="justify-self-end w-full text-right">
                                <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                            </div>
                        </button>
                    {:else}
                    <div class="justify-self-start col-span-3 w-full rounded-sm text-left">
                        <p class={entry.bold == "left" ? "font-bold" : ""}>
                            {entry.left}
                            {#if entry.alt}
                                <span class="text-slate-700 ml-2 text-sm">{entry.alt}</span>
                            {/if}
                        </p>
                    </div>
                    <div class="justify-self-end w-full text-right">
                        <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                    </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
    <div>
        <div class="card p-4 m-8 ml-0 text-lg max-w-2xl rounded-lg">
            You're looking at my <span class="font-bold">interactive online CV</span>, last updated 8 October 2024.
            Click on an entry for additional information.
            If you'd prefer a PDF, you can 
            <a href="https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf" class="anchor" download>
                click here to download
            </a>.
        </div>
        {#each cv.sections as section}
            {#each section.entries as entry}
                {#if entry.uid == entryVisible}
                    <div transition:slide class="card p-4 mx-8 ml-0 max-w-2xl rounded-lg border-tertiary-600 border-2">
                        {entry.side}
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
