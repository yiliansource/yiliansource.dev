import { motion } from "motion/react";
import profileImage from "./../assets/me-bg.png";
import { FaInstagram, FaGithub, FaChevronDown } from "react-icons/fa";

interface SocialIcon {
    label: string;
    icon: JSX.Element;
    href: string;
}

const socialIcons: SocialIcon[] = [
    {
        label: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/yiliansource/",
    },
    {
        label: "Github",
        icon: <FaGithub />,
        href: "https://github.com/yiliansource",
    },
];

export default function Home() {
    return (
        <section className="my-6 lg:my-24">
            <div className="flex md:flex-row flex-col">
                <motion.div
                    className="ml-0 mr-auto flex flex-row lg:flex-col gap-3 justify-center"
                    transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
                    animate="visible"
                >
                    {socialIcons.map((s) => (
                        <motion.a
                            key={s.label}
                            className="text-2xl"
                            href={s.href}
                            target="_blank"
                            initial={{ scale: 0 }}
                            variants={{ visible: { scale: 1 } }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                    <a></a>
                </motion.div>
                <div className="mx-auto flex flex-col lg:flex-row items-center lg:gap-6">
                    <motion.div
                        className="w-[300px] h-[300px] overflow-hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { ease: "easeInOut", duration: 0.6, delay: 0 },
                        }}
                    >
                        <img className="w-full" src={profileImage} draggable={false} />
                    </motion.div>
                    <motion.div
                        className="px-2 lg:px-0"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { ease: "easeInOut", duration: 0.6, delay: 0.1 },
                        }}
                    >
                        <p className="">My name is</p>
                        <h1 className="mb-2 text-5xl font-bold">Ian Hornik.</h1>
                        <p className="mb-8 max-w-md">
                            I'm an enthusiastic mathematics student that dabbles in web development, game development
                            and 3D art.
                        </p>
                        <a
                            className="py-3 px-6 rounded-3xl bg-blue-300 text-sm font-semibold"
                            href="mailto:yiliansource@gmail.com"
                        >
                            Get in contact!
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    className="ml-0 mr-auto hidden md:flex flex-col justify-center"
                    transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
                    animate="visible"
                >
                    {Array(3)
                        .fill(FaChevronDown)
                        .map((E, i) => (
                            <motion.span key={i} initial={{ opacity: 0 }} variants={{ visible: { opacity: 1 } }}>
                                <E />
                            </motion.span>
                        ))}
                </motion.div>
            </div>
        </section>
    );
}
