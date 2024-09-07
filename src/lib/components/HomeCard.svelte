<script lang="ts">
    export let href: string
    export let text: string
</script>

<a class="card card-hover basis-0 grow-1 shrink-1 m-4 bg-primary-300 rounded-lg" href={href}>
    <header>
        <slot />
    </header>
    <hr class="opacity-50" />
    <footer class="p-4">
        <h3 class="h3 font-bold">{text} >>></h3>
    </footer>
</a>
