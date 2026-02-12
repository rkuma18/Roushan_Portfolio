import StatsItem from "./StatsItem";
import { statsData } from "@/data/statsData";

const Stats = () => {
    return (
        <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
            {statsData.map((item) => {
                return (
                    <StatsItem
                        endCountNum={item.endCountNum}
                        endCountText={item.endCountText}
                        text={item.text}
                        key={item.id}
                    />
                );
            })}
        </section>
    );
};

export default Stats;