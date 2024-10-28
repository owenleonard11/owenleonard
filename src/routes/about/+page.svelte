<script lang="ts">
    import { base } from "$app/paths";
    import OwenIcon from "$lib/components/OwenIcon.svelte";
    import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<div class="flex flex-row m-8 md:m-12 md:mt-16 lg:m-16 lg:mt-24">
    <div class="hidden md:block mr-8 rounded-lg border-tertiary-400 border-2 py-4 bg-secondary-100">
        <OwenIcon classes="h-[30dvw] w-[30dvw] stroke-[4px]"/>
        <div class="mt-4 text-center w-128 text-lg xl:text-xl px-4">
            after Constantin Brancusi's 
            <em><a class="anchor" href="https://www.themorgan.org/exhibitions/online/ulysses/brancusis-symbol-joyce">
                Symbol of James Joyce
            </a></em>
        </div>
    </div>
    <div class="md:text-xl mr-8">
        <div class="rounded-lg border-tertiary-400 border-2 p-4 bg-secondary-100">
            <p>
                I'm Owen Leonard, a PhD student in English at UC Santa Barbara. 
                My research interests include critical AI and critical machine learning, 
                computational methods and the archive,
                and twentieth-century modernism and its implications for the digital present.
                Follow the links below for more:
            </p>
        </div>
        <dl class="list-dl mt-4 inline-block [&_a]:card-hover">
            <a class="flex p-2 bg-secondary-100 rounded-md border-tertiary-400 border-2 pr-4" href="{base}/cv">
                <span class="badge mr-2"><i class="w-10 fa-regular fa-file text-4xl"/></span>
                <span class="text-xl">
                    <dt class="text-left font-bold">View my CV →</dt>
                    <dd class="text-lg">See my interactive online CV, or download a PDF</dd>
                </span>
            </a>
            <a class="flex p-2 bg-secondary-100 rounded-md border-tertiary-400 border-2" href="{base}/disjecta">
                <span class="badge mr-2"><i class="w-10 fa-solid fa-book-open text-4xl"/></span>
                <span class="text-xl">
                    <dt class="text-left font-bold">Read my blog →</dt>
                    <dd class="text-lg">Find the latest from my blog, <em>disjecta</em></dd>
                </span>
            </a>
            <a class="flex p-2 bg-secondary-100 rounded-md border-tertiary-400 border-2" href="{base}/projects">
                <span class="badge mr-2"><i class="w-10 fa-regular fa-folder text-4xl"/></span>
                <span class="text-xl">
                    <dt class="text-left font-bold">Check out my projects →</dt>
                    <dd class="text-lg">Browse my writing and programming projects</dd>
                </span>
            </a>
            <a class="flex p-2 bg-secondary-100 rounded-md border-tertiary-400 border-2" href="https://github.com/owenleonard11">
                <span class="badge mr-2"><i class="w-10 fa-brands fa-github text-4xl"/></span>
                <span class="text-xl">
                    <dt class="text-left font-bold">Visit my Github page →</dt>
                    <dd class="text-lg">Explore and download my open-source code</dd>
                </span>
            </a>
            <a class="flex p-2 bg-secondary-100 rounded-md border-tertiary-400 border-2" href="https://orcid.org/0009-0007-4386-5628">
                <span class="badge mr-2"><i class="w-10 fa-brands fa-orcid text-4xl"/></span>
                <span class="text-xl">
                    <dt class="text-left font-bold">Visit my ORCID profile →</dt>
                    <dd class="text-lg">Find my scholarly publications</dd>
                </span>
            </a>
        </dl>
    </div>
</div>