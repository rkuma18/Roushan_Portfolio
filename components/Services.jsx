import Image from "next/image";
import { servicesData } from "@/data/servicesData";

const Services = () => {
    return (
        <section className="relative z-40">
            <div className="w-full px-4 xl:px-32">
                <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                    {servicesData.map((service) => {
                        return (
                            <li key={service.id} className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
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