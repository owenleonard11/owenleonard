<script lang="ts">
    export let href: string
    export let text: string
</script>

<a class="card card-hover w-96 max-w-[36rem] m-4 bg-primary-300 rounded-lg grow" href={href}>
    <header>
        <slot />
    </header>
    <hr class="opacity-50" />
    <footer class="p-4">
        <h3 class="h3 font-bold mx-4">{text} →</h3>
    </footer>
</a>
