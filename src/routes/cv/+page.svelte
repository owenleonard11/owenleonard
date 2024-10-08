<script lang="ts">
    import CVSection from "$lib/components/CV/CVSection.svelte";
    import CVEntry from "$lib/components/CV/CVEntry.svelte";
</script>

<div class="m-8 p-4 min-w-xl max-w-3xl border-black border-2 rounded-md bg-warning-100 font-serif">
    <p class="text-4xl font-bold">Owen Leonard</p>
    <p class="text-xl text-slate-700">
        <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
        <span>|</span>
        <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
    </p>
    <hr class="mt-2"/>
    <CVSection id="education" title="Education">
        <CVEntry left="University of California, Santa Barbara" right="Isla Vista, CA" bold="left" />
        <CVEntry left="PhD Student, Department of English" right="2024 - present" /> 
        <CVEntry left="University of Miami" right="Miami, FL" bold="left" />
        <CVEntry left="B.S. in Computer Science and English" right="2020 - 2023" /> 
    </CVSection>
    <CVSection id="fellowships" title="Fellowships & Scholarships">
        <CVEntry left="University of California, Santa Barbara" bold="left" />
        <CVEntry left="Regents Fellowship in English" right="2024-2029" />
        <CVEntry left="Yvonne Gartrell Award" right="Fall 2024" />
        <CVEntry left="University of Miami" bold="left" />
        <CVEntry left="'Canes Achievement Award" right="Fall 2024" />
    </CVSection>
    <CVSection id="honors" title="Honor & Awards">
        <CVEntry left="University of Miami" bold="left" />
        <CVEntry left="Departmental Honors in English" right="2023">
            <span class="text-slate-700 ml-2 text-sm">for undergraduate honors thesis</span>
        </CVEntry>
        <CVEntry left="Robert M. Healy Award" right="2022">
            <span class="text-slate-700 ml-2 text-sm">for best undergraduate essay in the humanities</span>
        </CVEntry>
    </CVSection>
    <CVSection id="research" title="Research">
        <CVEntry left="University of Miami" right="Miami, FL" bold="left" />
        <CVEntry left="Undergraduate Research Assistant in Digital Humanities" right="Spring -Fall 2022"/>
    </CVSection>
    <CVSection id="experience" title="Select Technical Experience">
        <CVEntry left="DexCom Continuous Glucose Monitoring" right="San Diego, CA" bold="left" />
        <CVEntry left="Software Validation & Verification Intern" right="Summer 2023" />
        <CVEntry left="Harmelin Media" right="Bala Cynwyd, PA" bold="left" />
        <CVEntry left="Software Engineer" right="2020 - 2021" />
        <CVEntry left="University of Pennsylvania Health System" right="Philadelphia PA" bold="left" />
        <CVEntry left="Data Science Intern" right="Summer 2019" />
    </CVSection>
</div>
