<script lang="ts">
    import { Accordion } from '@skeletonlabs/skeleton';
    import WritingCard from '$lib/components/WritingCard.svelte';
    import * as writings from "$lib/text/writing.json";
</script>

<div class="bg-primary-400 m-4 md:m-8 md:mt-12 lg:m-12 lg:mt-16 lg:p-2 rounded-lg border-2 border-primary-600">
    <Accordion>
        <WritingCard writing={writings.ulysses_supercomputer} />
        <WritingCard writing={writings.drama_life_dedalus} />
    </Accordion>
</div>