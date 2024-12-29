import { motion } from "motion/react";
import profileImage from "./assets/me-bg.png";
import Repositories from "./screens/Repositories";
import { FaInstagram, FaGithub } from "react-icons/fa";

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

export default function App() {
    return (
        <div className="flex flex-col min-h-screen w-full mx-auto max-w-5xl">
            <header className="flex flex-row py-4 px-4">
                <div>
                    <a className="text-2xl font-bold" href="/">
                        <img className="invert h-12" src="/logo.png" draggable={false} />
                    </a>
                </div>
                <div></div>
            </header>
            <main className="px-2">
                <div className="my-6 lg:my-24">
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
                                className=""
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
                                    I'm an enthusiastic mathematics student that dabbles in web development, game
                                    development and 3D art.
                                </p>
                                <a
                                    className="py-3 px-6 rounded-3xl bg-blue-300 text-sm font-semibold"
                                    href="mailto:yiliansource@gmail.com"
                                >
                                    Get in contact!
                                </a>
                            </motion.div>
                        </div>
                        <div className="ml-0 mr-auto"></div>
                    </div>
                </div>
                <Repositories />
            </main>
            <footer></footer>
        </div>
    );
}
