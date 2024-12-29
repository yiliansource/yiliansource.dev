import blobshape from "blobshape";
import partyJsImage from "../assets/img/projects/partyjs.png";
import tenaciousTanksImage from "../assets/img/projects/tenacious-tanks.png";

interface ProjectDescription {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
}

const projects: ProjectDescription[] = [
    {
        title: "party.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor tincidunt lectus, eget porta quam mattis id. Nullam feugiat quis ipsum feugiat egestas. Donec at lorem feugiat, consectetur justo ac, auctor eros. Vivamus vitae commodo neque, vel laoreet nulla. Nam dictum, purus mollis aliquam pretium, nisi purus faucibus nibh, quis elementum mi dui sit amet enim. Cras odio elit, venenatis id sodales quis, semper luctus magna. Cras nec arcu ac est dictum consequat. Cras ac eleifend purus. Maecenas tempor consequat magna eu viverra. Integer sed leo magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: partyJsImage,
        subtitle: "A fun JS library",
    },
    {
        title: "Tenacious Tanks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor tincidunt lectus, eget porta quam mattis id. Nullam feugiat quis ipsum feugiat egestas. Donec at lorem feugiat, consectetur justo ac, auctor eros. Vivamus vitae commodo neque, vel laoreet nulla. Nam dictum, purus mollis aliquam pretium, nisi purus faucibus nibh, quis elementum mi dui sit amet enim. Cras odio elit, venenatis id sodales quis, semper luctus magna. Cras nec arcu ac est dictum consequat. Cras ac eleifend purus. Maecenas tempor consequat magna eu viverra. Integer sed leo magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: tenaciousTanksImage,
        subtitle: "An intense arena brawler",
    },
];

function Projects() {
    return (
        <div className="relative min-h-screen py-20">
            <div className="flex flex-col divide-y items-center">
                {projects.map((p) => (
                    <div key={p.title} className="py-10 max-w-4xl">
                        <div className="relative mb-6 flex flex-row gap-16">
                            <div className="absolute top-[-80px] left-[-100px]">
                                <svg className="w-[300px] h-[300px]">
                                    <path className="fill-orange-300" d={blobshape({ size: 300 }).path} />
                                </svg>
                            </div>
                            <div className="relative">
                                {p.subtitle && (
                                    <h4 className="mb-2 uppercase text-md tracking-wider font-light">{p.subtitle}</h4>
                                )}
                                <h3 className="text-6xl font-black">{p.title}</h3>
                            </div>
                            <p className="text-justify text-lg">{p.description}</p>
                        </div>
                        <div>
                            <img className="rounded-xl shadow" src={p.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
