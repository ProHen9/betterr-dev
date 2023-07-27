import { component$ } from "@builder.io/qwik";
interface Props {
    title: string,
    content: string,
    image: string,
    altText: string
}
export default component$((props: Props) => {
    return (
        <div class="bg-blue rounded">
            <img src={props.image} alt={props.altText}/>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
})