<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";
    import { beforeNavigate } from "$app/navigation";

    import '@fortawesome/fontawesome-free/css/all.min.css';
    import * as cv from "$lib/text/cv_text.json"
    import CvModal from "$lib/components/CVModal.svelte";

    let innerWidth=0;

    let entryVisible: string = ""; 
    const setEntryVisible = (uid: any) => { return () => entryVisible = uid; };

    const modalStore = getModalStore();
    const triggerSideModal = (side: any) => {
        const modalComponent: ModalComponent = { ref: CvModal, props: { side: side}}
        const sideModal: ModalSettings = {
            type: 'component',
            component: modalComponent
        }
        return () => { modalStore.trigger(sideModal) }
    };

    const toastStore = getToastStore();
    const mobileWarningToast: ToastSettings = {
        message: `Warning: This page is not designed to accomodate narrow screens. Consider 
            <a href='https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf' class='anchor' download target='_blank'>downloading a PDF</a>
            instead.`,
            timeout: 20000
    }

    onMount(() => {
        if (innerWidth < 768) {
            toastStore.trigger(mobileWarningToast);
        }
    })
    beforeNavigate(toastStore.clear)
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col lg:flex-row">
    <div class="mx-8 mb-4 lg:m-8 p-4 lg:w-[70dvw] max-h-[70dvh] lg:max-w-2xl lg:max-h-[80dvh] order-2 lg:order-1 
                border-primary-600 border-2 rounded-md bg-primary-300 font-serif overflow-y-auto">
        <p class="text-2xl md:text-3xl lg:text-4xl font-bold">Owen Leonard</p>
        <p class="text-sm md:text-lg text-slate-700">
            <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
            <span>|</span>
            <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
        </p>
        {#each cv.sections as section, s_index}
            <p class="text-lg md:text-xl font-bold mt-2 text-left">{section.title}</p>
            <div class="border-t-2 border-primary-600"/>
            <div class="text-lg">
                {#each section.entries as entry, e_index}
                    <div class="grid grid-cols grid-cols-5">
                        <div class="col-span-1 py-0.5">{entry.date}</div>
                        <button 
                            on:click={setEntryVisible(`${s_index}${e_index}`)}
                            class="text-left col-span-4 hover:bg-primary-400 py-0.5 rounded-md"
                        >
                            <strong>{entry.bold}</strong>{entry.norm}
                        </button>
                    </div>      
                    {#if 'undr' in entry}
                        <div class="grid grid-cols grid-cols-5">
                            <div class="col-span-1"></div>
                            <div class="col-span-4 text-slate-700"><em>{entry.undr}</em></div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
    <div class="order-1 mx-8 my-4 lg:order-2 lg:m-8 lg:ml-0">
        <div class="card lg:text-lg p-4 lg:w-[30vw] rounded-lg bg-primary-300 border-primary-600 border-2">
            You're looking at my <span class="font-bold">interactive online CV</span>.
            Click on an entry for additional information. If you'd prefer a PDF, 
            <a href="https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf" class="anchor" download target="_blank">
                click here to download
            </a>.
        </div>
        {#each cv.sections as section, s_index}
            {#each section.entries as entry, e_index}
                {#if entryVisible == `${s_index}${e_index}`}
                    <div 
                        transition:slide
                        class="card lg:text-lg p-4 lg:w-[30vw] rounded-lg bg-primary-300 border-primary-600 border-2 mt-2"
                    >   
                        <div>
                            {entry.side}
                        </div>
                        {#if 'href' in entry}
                            <div>
                                <a href={entry.href} target="_blank" class="anchor mb-2">
                                    {entry.href}
                                    <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                                </a>
                            </div>
                        {/if}
                        
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
