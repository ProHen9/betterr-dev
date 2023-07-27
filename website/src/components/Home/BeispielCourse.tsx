import { component$ } from "@builder.io/qwik";
import Card from "./course/card";

export default component$(() => {
    return (
        <div class="h-screen bg-coolgray-900 flex flex-items-center justify-center flex-col">
            <h2>
                Ein paar von unseren Kursen:
            </h2>
            <Card 
                title="Javascript"
                image="https://expam.com/img.png"
                altText="Javascript Course Image"
                content="Unser Javascript Kurs ist sehr beliebt, da er perfekt für Anfänger gestaltet ist. "
            />
            <Card 
                title="Typescript"
                image="https://expam.com/img.png"
                altText="Typescript Course Image"
                content="Javascript gemeistert? Dann fange doch mit unserem Typescript Kurs an! Hier bauen wir auf unserem Javascript Kurs auf." 
            />
        </div>
    )
})