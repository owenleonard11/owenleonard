<script lang="ts">
    export let href: string
    export let text: string
    export let bg: string
    export let classes: string = ""
</script>

<a class="card card-hover w-96 max-w-[20rem] md:max-w-[30rem] m-2 md:m-4 bg-primary-400 border-2 border-primary-700 rounded-lg grow" href={href}>
    <header>
        <div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md {bg} {classes}">
            <div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4 [&_div]:grid [&_div]:[&_div]:h-3 [&_div]:[&_div]:md:h-5 [&_div]:[&_div]:[&_div]:placeholder">
                <slot />
            </div>
        </div>
    </header>
    <footer class="p-2 md:p-4 border-t-2 border-primary-500">
        <p class="text-xl md:text-2xl lg:text-4xl font-semibold mx-4">{text}&nbsp;→</p>
    </footer>
</a>
