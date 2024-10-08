<script lang="ts">
    import CVSection from "$lib/components/CV/CVSection.svelte";
    import CVEntry from "$lib/components/CV/CVEntry.svelte";

    import * as cv from "$lib/text/cv.json";
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
                    <div class="contents {entry[4] ? "[&>*]:hover:shadow-lg [&>*]:hover:cursor-pointer": ""}">
                        <div class="justify-self-start col-span-3 w-full rounded-sm">
                            <p class={entry[3] == "left" ? "font-bold" : ""}>
                                {entry[0]}
                                {#if entry[2]}
                                    <span class="text-slate-700 ml-2 text-sm">{entry[2]}</span>
                                {/if}
                            </p>
                        </div>
                        <div class="justify-self-end w-full text-right">
                            <p class={entry[3] == "right" ? "font-bold" : ""}>{entry[1]}</p>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <div>
        <div class="card p-4 m-8 ml-0 text-lg max-w-2xl rounded-lg">
            You're looking at my <span class="font-bold">interactive online CV</span>, last updated 8 October 2024.
            Click on an entry for additional information.
            If you'd prefer a PDF, you can <a href="cv" class="anchor" download>click here to download</a>.
        </div>
    </div>
</div>
