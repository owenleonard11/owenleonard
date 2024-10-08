<script lang="ts">
    import CVSection from "$lib/components/CV/CVSection.svelte";
    import CVEntry from "$lib/components/CV/CVEntry.svelte";
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
        <CVSection id="education" title="Education">
            <CVEntry left="University of California, Santa Barbara" bold="left" />
            <CVEntry left="PhD Student, Department of English" right="2024 - present" hoverShadow /> 
            <CVEntry left="University of Miami" right="" bold="left" />
            <CVEntry left="B.S. in Computer Science and English" right="2020 - 2023" hoverShadow /> 
        </CVSection>
        <CVSection id="fellowships" title="Fellowships & Scholarships">
            <CVEntry left="University of California, Santa Barbara" bold="left" />
            <CVEntry left="Regents Fellowship in English" right="2024-2029" hoverShadow />
            <CVEntry left="Yvonne Gartrell Award" right="Fall 2024" hoverShadow />
            <CVEntry left="University of Miami" bold="left" />
            <CVEntry left="'Canes Achievement Award" right="2020 - 2024" hoverShadow />
        </CVSection>
        <CVSection id="honors" title="Honor & Awards">
            <CVEntry left="University of Miami" bold="left" />
            <CVEntry left="Departmental Honors in English" right="2023" hoverShadow >
                <span class="text-slate-700 ml-2 text-sm">for undergraduate honors thesis</span>
            </CVEntry>
            <CVEntry left="Robert M. Healy Award" right="2022" hoverShadow >
                <span class="text-slate-700 ml-2 text-sm">for best undergraduate essay in the humanities</span>
            </CVEntry>
        </CVSection>
        <CVSection id="research" title="Research">
            <CVEntry left="University of Miami" right="" bold="left" />
            <CVEntry left="Undergraduate Research Assistant in Digital Humanities" right="2022" hoverShadow />
        </CVSection>
        <CVSection id="experience" title="Select Technical Experience">
            <CVEntry left="DexCom Continuous Glucose Monitoring" bold="left" />
            <CVEntry left="Software Validation & Verification Intern" right="Summer 2023" hoverShadow />
            <CVEntry left="Harmelin Media" right="" bold="left" />
            <CVEntry left="Software Engineer" right="2020 - 2021" hoverShadow />
            <CVEntry left="University of Pennsylvania Health System" right="" bold="left" />
            <CVEntry left="Data Science Intern" right="Summer 2019" hoverShadow />
        </CVSection>
    </div>
    <div>
        <div class="card p-4 m-8 ml-0 text-lg max-w-2xl rounded-lg">
            You're looking at my <span class="font-bold">interactive online CV</span>, last updated 8 October 2024.
            Click on an entry for additional information.
            If you'd prefer a PDF, you can <a href="cv" class="anchor" download>click here to download</a>.
        </div>
    </div>
</div>
