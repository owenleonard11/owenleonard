<script lang="ts">
    import { base } from "$app/paths";
    import OwenIcon from "$lib/components/OwenIcon.svelte";
    import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<div class="flex flex-row m-4 md:m-8 md:mt-12 lg:m-12 lg:mt-16 xl:m-16 xl:mt-24">
    <div class="hidden md:block mr-8">
        <OwenIcon classes="h-[30dvw] w-[30dvw] stroke-[4px]"/>
        <div class="mt-4 text-center w-128 text-lg xl:text-xl px-4">
            after Constantin Brancusi's 
            <em><a class="anchor" href="https://www.themorgan.org/exhibitions/online/ulysses/brancusis-symbol-joyce">
                Symbol of James Joyce
            </a></em>
        </div>
    </div>
    <div class="text-sm md:text-lg lg:text-xl md:mr-8">
        <div class="rounded-lg border-tertiary-400 border-2 p-2 lg:p-4 bg-secondary-100">
            <p>
                I'm Owen Leonard, a PhD student in English at UC Santa Barbara. 
                My research interests include critical AI and critical machine learning, 
                computational methods and the archive,
                and twentieth-century modernism and its implications for the digital present.
                Follow the links below for more:
            </p>
        </div>
        <dl class="
            list-dl mt-4 inline-block 
            [&_a]:card-hover [&_a]:flex [&_a]:p-2 [&_a]:bg-secondary-100 [&_a]:rounded-md [&_a]:border-tertiary-400 [&_a]:border-2 [&_a]:pr-4
            [&_i]:text-2xl [&_i]:w-8 [&_i]:md:text-4xl [&_i]:md:w-10
            [&_dt]:text-left [&_dt]:font-bold [&_dt]:text-base [&_dt]:lg:text-xl
            [&_dd]:text-xs [&_dd]:md:text-sm [&_dd]:lg:text-lg
        ">
            <a href="{base}/cv">
                <span class="badge mr-1 md:mr-2 text-center"><i class="fa-regular fa-file"/></span>
                <span>
                    <dt>View my CV →</dt>
                    <dd>See my interactive online CV, or download a PDF</dd>
                </span>
            </a>
            <a href="{base}/disjecta">
                <span class="badge mr-1 md:mr-2 text-center"><i class="fa-solid fa-book-open"/></span>
                <span>
                    <dt>Read my blog →</dt>
                    <dd>Find the latest from my blog, <em>disjecta</em></dd>
                </span>
            </a>
            <a href="{base}/projects">
                <span class="badge mr-1 md:mr-2 text-center"><i class="fa-regular fa-folder"/></span>
                <span>
                    <dt>Check out my projects →</dt>
                    <dd>Browse my writing and programming projects</dd>
                </span>
            </a>
            <a href="https://github.com/owenleonard11" target="_blank">
                <span class="badge mr-1 md:mr-2 text-center"><i class="fa-brands fa-github"/></span>
                <span>
                    <dt>Visit my Github page →</dt>
                    <dd>Explore and download my open-source code</dd>
                </span>
            </a>
            <a href="https://orcid.org/0009-0007-4386-5628" target="_blank">
                <span class="badge mr-1 md:mr-2 text-center"><i class="fa-brands fa-orcid"/></span>
                <span>
                    <dt>Visit my ORCID profile →</dt>
                    <dd>Find my scholarly publications</dd>
                </span>
            </a>
        </dl>
    </div>
</div>