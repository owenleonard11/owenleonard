<script lang="ts">
    import * as projects from '$lib/text/projects.json'
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="flex flex-row md:mx-16 lg:mx-32 xl:mx-64 mt-4 md:mt-8 lg:mt-16 gap-4 lg:gap-8 mb-4">
    <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
        <ProjectCard project={projects.huml_site}/>
    </div>
    <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">

    </div>
</div>