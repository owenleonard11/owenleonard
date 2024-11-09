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
    <div class="md:text-xl lg:text-2xl md:mr-8">
        <div class="rounded-lg p-2 lg:p-4 bg-primary-400 border-primary-700 border-2">
            <p>
                I'm Owen Leonard, a PhD student in English at UC Santa Barbara. 
                My research interests include critical AI and critical machine learning, 
                computational methods and the archive,
                and twentieth-century modernism and its implications for the digital present.
                Follow the links below for more:
            </p>
            <dl class="
            list-dl mt-4 inline-block 
            [&_a]:card-hover [&_a]:flex [&_a]:p-2 [&_a]:pr-4 [&_a]:border-t-2 [&_a]:border-primary-700 last:[&_a]:border-b-2
            [&_i]:text-2xl [&_i]:w-8 [&_i]:md:text-3xl [&_i]:lg:text-4xl [&_i]:md:w-10
            [&_dt]:text-left [&_dt]:font-bold [&_dt]:text-base [&_dt]:lg:text-xl
            [&_dd]:text-xs [&_dd]:md:text-sm [&_dd]:lg:text-lg
        ">
            <a href="{base}/cv" class="border-t-2 border-primary-700">
                <span class="badge p-0 mr-2 lg:mr-4 text-center"><i class="fa-regular fa-file"/></span>
                <span>
                    <dt>View my CV →</dt>
                    <dd>See my interactive online CV, or download a PDF</dd>
                </span>
            </a>
            <a href="{base}/writing">
                <span class="badge p-0 mr-2 lg:mr-4 text-center"><i class="fa-solid fa-book-open"/></span>
                <span>
                    <dt>Read my writing →</dt>
                    <dd>Find my latest academic writing</dd>
                </span>
            </a>
            <a href="{base}/projects">
                <span class="badge p-0 mr-2 lg:mr-4 text-center"><i class="fa-regular fa-folder"/></span>
                <span>
                    <dt>Check out my projects →</dt>
                    <dd>Browse my writing and programming projects</dd>
                </span>
            </a>
            <a href="https://github.com/owenleonard11" target="_blank">
                <span class="badge p-0 mr-2 lg:mr-4 text-center"><i class="fa-brands fa-github"/></span>
                <span>
                    <dt>Visit my Github page →</dt>
                    <dd>Explore and download my open-source code</dd>
                </span>
            </a>
            <a href="https://orcid.org/0009-0007-4386-5628" target="_blank">
                <span class="badge p-0 mr-2 lg:mr-4 text-center"><i class="fa-brands fa-orcid"/></span>
                <span>
                    <dt>Visit my ORCID profile →</dt>
                    <dd>Find my scholarly publications</dd>
                </span>
            </a>
        </dl>
        </div>
        
    </div>
</div>