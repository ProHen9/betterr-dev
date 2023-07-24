import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import svg from "/favicon.svg"
import { useVisibleTask$ } from "@builder.io/qwik"
import styles from "./firstsection.css?inline"

export default component$(() => {
  useStyles$(styles)


  const widthDisplay = useSignal<number>(0);
  const heightDisplay = useSignal<number>(0)

  
  useVisibleTask$(() => {
    widthDisplay.value = window.innerWidth;
    heightDisplay.value = window.innerHeight
  });

  return (
    <div class="containerFirstSection bg-coolgray-900">
      <img class=" animate-forwards animate-duration-1s animate-ease animate-fade-in" src={svg} alt="Das Logo" width={widthDisplay.value / 2} height={heightDisplay.value / 3} />
      <h3 class="color-white animate-forwards animate-duration-1s animate-ease animate-fade-in">Development leicht gemacht.</h3>
      <p class="color-white m-2 animate-forwards animate-duration-1s animate-ease animate-fade-in-up">lerne professionel <a href="/lernen/programmieren/start" class="color-white bg-blue-500 p-1 border-rd">programmieren</a> und <a href="/lernen" class="color-white bg-rose-700 p-1 border-rd">alles</a> was dazu gehört</p>
      <div class="i-material-symbols-keyboard-double-arrow-down-rounded"></div>
    </div>
  );
})