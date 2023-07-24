import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/lernen/Header";
export default component$(() => {
    return (
        <div>
            <Header />
            <main>
                <Slot />
            </main>
        </div>
    )
})