<script lang="ts">
    export let href: string
    export let text: string
    export let bg  : string
</script>

<a class="card card-hover min-w-96 m-4 bg-primary-300 rounded-lg grow" href={href}>
    <header>
        <div class="mx-8 mt-8 p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-{bg}">
            <slot />
        </div>
    </header>
    <hr class="opacity-50" />
    <footer class="p-4">
        <h3 class="h3 font-bold mx-4">{text} →</h3>
    </footer>
</a>
