import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="flex flex-col flex-items-center justify-center bg-coolgray-900">
            <div class="sm:w-screen  bg-dark-1 md:w-80% rounded rounded-11px m-5 p-5">
                <h2 class="color-white">betterr.dev</h2>
                <div class="flex ">
                    <div class="flex flex-col">
                        <h4>Rechtliches</h4>
                        <a href="/impressum">Impressum</a>
                        <a href="/datenschutz">Datenschutz</a>
                    </div>
                    <div class="flex flex-col">
                        <h4>Ressourcen</h4>
                        <a href="/lernen/start">starten</a>
                        <a href="/lernen">lernen</a>
                    </div>
                </div>
            </div>
        </div>
    )
})