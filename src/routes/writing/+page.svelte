<script lang="ts">
    import { page } from '$app/stores';
    import { beforeUpdate } from 'svelte';
    import { Accordion } from '@skeletonlabs/skeleton';
    import WritingCard from '$lib/components/WritingCard.svelte';
    import * as writings from "$lib/text/writing.json";

    let openItem: string | null;
    beforeUpdate(() => {
        openItem = $page.url.searchParams.get('open')
    });
</script>

<div class="bg-primary-300 m-4 md:m-8 md:mt-12 lg:m-12 lg:mt-16 lg:p-2 rounded-lg border-2 border-primary-600">
    <div class="m-4 text-lg md:text-xl">
        <p>
            Below you will find a selection of my academic writing, sorted from newest to oldest. Click the titles to see a brief summary
            and download a PDF where possible.
        </p>
    </div>
    <div class="border-t-2 border-primary-700 mx-4"></div>
    <Accordion>
        <WritingCard writing={writings.ulysses_supercomputer} open={openItem == 'ulysses'}/>
        <WritingCard writing={writings.drama_life_dedalus} open={openItem == 'drama'}/>
    </Accordion>
</div>