import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
    return (
        <section className="py-24" id="journey">
            <div className="w-full px-4 xl:px-32">
                <AnimatedText
                    text="My Journey"
                    textStyles="h2 mb-[30px] text-center"
                />
                <Cards />
            </div>
        </section>
    )
}

export default Journey;