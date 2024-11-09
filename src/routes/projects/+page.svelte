<script lang="ts">
    import { slide } from 'svelte/transition';
    import humlHero from '$lib/images/projects/huml_hero.png';
    let showText: boolean = false;
</script>

<div class="flex flex-row md:mx-16 lg:mx-32 xl:mx-64 mt-4 md:mt-8 lg:mt-16 gap-4 lg:gap-8">
    <div class="flex flex-col gap-4 lg:gap-8 w-full w-1/2">
        <a class="card card-hover h-auto max-w-full bg-primary-400 border-2 border-primary-700 rounded-lg" href="/">
            <header>
                <div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-surface-400">
                    <div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4 [&_div]:grid [&_div]:[&_div]:h-3 [&_div]:[&_div]:md:h-5 [&_div]:[&_div]:[&_div]:placeholder">
                        <slot />
                    </div>
                </div>
            </header>
            <footer class="p-2 md:p-4 border-t-2 border-primary-500">
                <p class="text-lg md:text-xl lg:text-3xl font-semibold mx-4">Glowing Brains →</p>
            </footer>
        </a>
        <a class="card card-hover h-auto max-w-full bg-primary-400 border-2 border-primary-700 rounded-lg" href="/">
            <header>
                <div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-surface-400">
                    <div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4 [&_div]:grid [&_div]:[&_div]:h-3 [&_div]:[&_div]:md:h-5 [&_div]:[&_div]:[&_div]:placeholder">
                        <slot />
                    </div>
                </div>
            </header>
            <footer class="p-2 md:p-4 border-t-2 border-primary-500">
                <p class="text-lg md:text-xl lg:text-3xl font-semibold mx-4">AI Infrastructure: From Ground to Cloud →</p>
            </footer>
        </a>
    </div>
    <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
        <a on:mouseenter={() => showText=true} on:mouseleave={() => showText=false}
           class="card card-hover h-auto max-w-full bg-primary-400 border-2 border-primary-700 rounded-lg" href="https://huml.ucsb.edu" target="_blank"
        >
            <div class="px-4 pt-4">
                <img src={humlHero} alt="vector drawing of a GPU" class="h-auto max-w-full rounded-t-md"/>
            </div>
            <footer class="p-2 md:p-4 border-t-2 border-primary-500">
                <p class="text-lg md:text-xl lg:text-3xl font-semibold mx-4">UCSB Center for the Humanities and Machine Learning (HUML) Website →</p>
                {#if showText}
                    <div in:slide out:slide class="mx-4 md:text-lg lg:text-xl">
                        <p>
                            As a graduate student researcher, I desgined the website for UC Santa Barbara's Center for the Humanities and Machine Learning.
                            Visit to see upcoming events, recent publications, and more.
                        </p>
                        <div class="flex flex-row gap-2 mt-2">
                            <span class="badge text-lg bg-secondary-400">2024</span>
                            <span class="badge text-lg bg-secondary-400">web</span>
                            <span class="badge text-lg bg-secondary-400">UCSB</span>
                        </div>
                    </div>
                {/if}
            </footer>
        </a>
    </div>
</div>