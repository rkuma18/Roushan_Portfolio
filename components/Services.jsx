import Image from "next/image";

const services = [
    {
        icon: "assets/services/icon-1.svg",
        title: "AI & Machine Learning Solutions",
        description: "Design and deploy custom ML models for real world problems ranging from recommendation systems and fraud detection to customer segmentation and forecasting.",
    },
    {
        icon: "assets/services/icon-2.svg",
        title: "Data Strategy & Analytics Consulting",
        description: "Transform raw data into insights with end-to-end analytics solutions data cleaning, feature engineering, dashboard creation, and storytelling for decision makers..",
    },
    {
        icon: "assets/services/icon-3.svg",
        title: "Generative AI & LLM Applications",
        description: "Build intelligent tools powered by LLMs and RAG pipelines, including AI chatbots, knowledge assistants, and tailored GenAI workflows for business use cases.",
    },
    {
        icon: "assets/services/icon-4.svg",
        title: "AI Product Prototyping & Deployment",
        description: "Collaborate on building scalable, production ready AI products or MVPs with a strong focus on usability, domain alignment, and deployment efficiency.",
    },
];

const Services = () => {
    return (
        <section className="relative z-40">
            <div className="container mx-auto">
                <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                    {services.map((service, index) => {
                        return (
                            <li key={index} className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
                                <Image
                                    src={service.icon}
                                    width={48}
                                    height={48}
                                    alt={`${service.title} icon`}
                                    className="mb-4"
                                />
                                <h3 className="text-[20px] text-primary font-semibold mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[15px]">
                                    {service.description}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Services;