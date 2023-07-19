import { component$ } from "@builder.io/qwik";

export default component$ (() => {
    return (
        <div class="bg-coolGray-7">
            <nav class="text-center animate-fade-in animate-duration-1s animate-forwards">
                <a href="/" class="no-underline">Home</a>
                <a href="" class="no-underline">Starten</a>
                <a href="">Anmelden</a>
            </nav>
        </div>
    )
})