import ImageCard from "./ImageCard";

export default function Hero() {
    return (
        <section className="grid grid-cols-2 items-center p-10 mx-36 justify-items-center gap-10">
        <section className="max-w-fit">
            <ImageCard src="/public/sala1.jpg" alt="Furniture">

            </ImageCard>
        </section>
        <section className="max-w-fit">
            <ImageCard src="/public/sofa1.jpg">


            </ImageCard>
        </section>
        </section>
    )
}
