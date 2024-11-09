<script lang="ts">
    import { slide } from 'svelte/transition';

    export let project;
    const { title, url, banner, banner_alt, desc, tags } = project;

    let expand: boolean = false;
</script>

<a 
    on:focus={() => expand=true} on:focusout={() => expand=false} on:mouseenter={() => expand=true} on:mouseleave={() => expand=false} 
    class="card card-hover h-auto max-w-full bg-primary-400 border-2 border-primary-700 rounded-lg" href={url} target="_blank"
>
    {#if banner}
        <div class="px-4 pt-4 border-b-2 border-primary-500">
            {#await import(`$lib/images/projects/${banner}.png`) then { default: src }}
                <img {src} alt={banner_alt} class="h-auto max-w-full rounded-t-md"/>
            {/await} 
        </div>
    {/if}
    <footer class="p-2 md:p-4">
        <p class="text-lg md:text-xl lg:text-3xl font-semibold mx-4">
            {title} <span class="touch:hidden">→</span>
        </p>
        {#if expand}
            <div transition:slide class="mx-4 md:text-lg lg:text-xl">
                <p>{desc}</p>
                <div class="flex flex-row gap-2 mt-2">
                    {#each tags as tag}
                        <span class="badge text-lg bg-secondary-400">{tag}</span>
                    {/each}
                </div>
            </div>
        {/if}
    </footer>
</a>