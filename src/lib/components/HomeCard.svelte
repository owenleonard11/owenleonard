<script lang="ts">
    export let href: string
    export let text: string
</script>

<a class="card card-hover w-96 max-w-[32rem] m-2 md:m-4 bg-primary-300 rounded-lg grow" href={href}>
    <header>
        <slot />
    </header>
    <hr class="opacity-50" />
    <footer class="p-2 md:p-4">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold mx-4">{text} →</p>
    </footer>
</a>
