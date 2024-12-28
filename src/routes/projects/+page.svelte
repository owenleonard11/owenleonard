<script lang="ts">
    import * as projects from '$lib/text/projects.json'
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="flex flex-col lg:flex-row m-4 md:m-8 md:mt-12 lg:mx-16 lg:mt-16 xl:mx-32 xl:mt-24 gap-4 lg:gap-8 mb-4">
    <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
        <ProjectCard project={projects.huml_site}/>
    </div>
    <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
        
    </div>
</div>