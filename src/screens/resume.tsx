import { motion } from "motion/react";
import clsx from "clsx";

export default function Resume() {
    return (
        <motion.section
            className="pt-4 pb-16"
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", duration: 0.6, delay: 0 },
            }}
        >
            <h2 className="mb-8 text-4xl font-bold text-center">My résumé.</h2>
            <Timeline items={timelineItems} />
        </motion.section>
    );
}

interface TimelineItemData {
    location: string;
    description: string;
    dateStart: Date;
    dateEnd?: Date;
}

const timelineItems: TimelineItemData[] = [
    {
        location: "HTBLuVA Wien 5 Spengergasse",
        description: "Media & Game Design",
        dateStart: new Date(2015, 0),
        dateEnd: new Date(2020, 0),
    },
    {
        location: "Technical University of Vienna",
        description: "Technical Mathematics (Bachelor)",
        dateStart: new Date(2021, 0),
        dateEnd: new Date(2024, 0),
    },
    {
        location: "Technical University of Vienna",
        description: "Technical Mathematics (Master)",
        dateStart: new Date(2024, 0),
    },
];

const Timeline = ({ items }: { items: TimelineItemData[] }) => (
    <div className="flex flex-col">
        {items.map((item, index, arr) => (
            <TimelineItem
                key={item.description}
                data={item}
                flip={index % 2 === 0}
                first={index === 0}
                last={index === arr.length - 1}
            />
        ))}
    </div>
);
const TimelineItem = ({
    data,
    flip,
    first,
    last,
}: {
    data: TimelineItemData;
    flip: boolean;
    first: boolean;
    last: boolean;
}) => (
    <div
        className={clsx("lg:grid lg:grid-rows-1 lg:grid-flow-dense")}
        style={{
            gridTemplateColumns: "1fr 4px 1fr",
        }}
    >
        <div className="hidden lg:block col-start-2 relative">
            <div
                className={clsx(
                    "absolute w-full h-full bg-blue-400",
                    first && "h-1/2 top-1/2",
                    last && "h-1/2 bottom-1/2"
                )}
            ></div>
            <div
                className={clsx(
                    "absolute h-4 w-4 bg-blue-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                )}
            ></div>
            {last &&
                [...Array(4).keys()].map((i) => (
                    <div
                        key={i}
                        className="absolute h-2 w-1 bg-blue-400 top-1/2"
                        style={{
                            transform: `translateY(calc(-50% + 16px + 13px * ${i}))`,
                            opacity: 1 - i / 4,
                        }}
                    ></div>
                ))}
        </div>
        <div
            className={clsx(
                "lg:flex flex-col px-2 lg:px-10 py-2",
                !flip ? "col-start-1 items-end" : "col-start-3 items-start"
            )}
        >
            <div>
                <p className="text-xl font-bold">{data.location}</p>
                <p className="mb-2">{data.description}</p>
                <p className="text-sm text-gray-400">
                    {data.dateStart.getFullYear()} - {data.dateEnd?.getFullYear() ?? "now"}
                </p>
                {/* <p>{data.dateStart.toDateString()}</p>
                <p>{data.dateEnd?.toDateString()}</p> */}
            </div>
        </div>
    </div>
);
