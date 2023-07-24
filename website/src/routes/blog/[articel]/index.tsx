import { component$,    } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
export const useArticleData = routeLoader$(async (requestEvent) => {
    try {
        const res = await fetch(`https://json.com/products/${requestEvent.params.articel}`);
        const article = await res.json();
        return article;
    } catch {
        return "Error"
    }
  });

export default component$(() => {
    const article = useArticleData()
    if (article.value == "Error") {
        return (
            <div class="bg-coolGray-9 h-screen flex justify-center flex-items-center color-white flex-col">
                <p>Ein Error ist aufgetreten. Dein geünschter Blogpost wurde nicht gefunden.</p>
                <a href="/blog" class="color-white underline">zurück zu allen Posts</a>
            </div>
        )
    }

    return (
        <div class="bg-coolGray-9">

        </div>
    )
})