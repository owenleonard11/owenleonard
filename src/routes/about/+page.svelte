<script lang="ts">
    import { base } from "$app/paths";
    import OwenIcon from "$lib/components/OwenIcon.svelte";
</script>

<div class="flex flex-row m-8 md:m-12 md:mt-16 lg:m-16 lg:mt-24">
    <div class="hidden md:block mr-8">
        <OwenIcon classes="h-[30dvw] w-[30dvw] stroke-[4px]"/>
        <div class="mt-4 text-center w-128 text-lg xl:text-xl px-4">
            after Constantin Brancusi's 
            <em><a class="anchor" href="https://www.themorgan.org/exhibitions/online/ulysses/brancusis-symbol-joyce">
                Symbol of James Joyce
            </a></em>
        </div>
    </div>
    <div class="md:text-xl xl:text-2xl col-span-2 mr-8">
        <p>
            Hi! I'm Owen Leonard, a PhD student at UC Santa Barbara. 
            My research interests include critical AI and critical machine learning, 
            computational methods and the archive,
            and twentieth-century modernism and its implications for the digital present.
            You can find my <a class="anchor" href="{base}/cv">interactive CV here</a>.
        </p>
        <p class="mt-8">
            You can find an overview of my projects on this site's
            <a href="/projects" class="anchor">projects page</a>,
            or go straight to
            <a target="_blank" href="https://github.com/owenleonard11" class="anchor">my Github</a>
            to find the source code and documentation.
            <em><a href="/disjecta" class="anchor">Disjecta</a></em>
            is my intermittently updated blog, where I post shorter casual writings
            that don't fit into other projects.
        </p>
        <p class="mt-8">
            This site is powered by <a target="_blank" href="https://kit.svelte.dev" class="anchor">SvelteKit</a>
            with UI elements from <a target="_blank" href="https://skeleton.dev" class="anchor">Skeleton</a>. 
            Background textures are by <a target="_blank" href="https://www.transparenttextures.com/" class="anchor">Transparent Textures</a>.
            You can view the site's source code on <a target="_blank" href="https://github.com/owenleonard11/owenleonard" class="anchor">Github</a>.
        </p>
    </div>
</div>