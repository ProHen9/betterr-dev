
import { component$ } from "@builder.io/qwik";
import FirstSection from "~/components/Home/FirstSection";
import SecondSection from "~/components/Home/SecondSection";
import type { DocumentHead } from "@builder.io/qwik-city";
import ThirdSection from "~/components/Home/ThirdSection";
import BeispielCourse from "~/components/Home/BeispielCourse";
import Footer from "~/components/Home/Footer";
export default component$(() => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <BeispielCourse />
      <ThirdSection />
      <Footer />
    </>
  );
})
export const head: DocumentHead = {
  title: "betterr.dev | Development leicht gemacht."
}
