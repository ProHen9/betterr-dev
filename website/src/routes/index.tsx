
import { component$ } from "@builder.io/qwik";
import FirstSection from "~/components/Home/FirstSection";
import SecondSection from "~/components/Home/SecondSection";
export default component$(() => {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
})
