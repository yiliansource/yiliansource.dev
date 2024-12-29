import { Octokit } from "@octokit/rest";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import { motion } from "motion/react";

interface RepositoryInformation {
    title: string;
    description?: string;
    language?: string;
    stars?: number;
    url?: string;
    updatedAt?: number;
}

interface ColorDescription {
    color: string;
    url: string;
}

function Repositories() {
    const [repositories, setRepositories] = useState<RepositoryInformation[]>([]);
    const [colors, setColors] = useState<Record<string, ColorDescription>>({});

    useEffect(() => {
        const octo = new Octokit();

        octo.rest.repos
            .listForUser({
                username: "yiliansource",
            })
            .then(({ data }) => {
                setRepositories(
                    data
                        .filter((d) => !d.archived && !!d.stargazers_count && d.stargazers_count > 5)
                        .sort((a, b) => b.stargazers_count! - a.stargazers_count!)
                        .map(
                            (r) =>
                                ({
                                    title: r.name,
                                    description: r.description,
                                    language: r.language,
                                    stars: r.stargazers_count,
                                    url: r.html_url,
                                    updatedAt: r.updated_at,
                                } as RepositoryInformation)
                        )
                );
            });
    }, []);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
            .then((res) => res.json() as unknown as Record<string, ColorDescription>)
            .then((json) => setColors(json));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <motion.div
                className="flex flex-col items-center my-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
                <h2 className="mb-4 text-5xl font-bold">Other projects of mine.</h2>
                <p className="text-stone-600 text-lg max-w-lg">
                    Phasellus euismod mi urna. Proin congue neque non metus ultrices, eu varius enim finibus.
                    Pellentesque eleifend quam sit amet massa laoreet congue. In venenatis molestie consequat. Nunc
                    dapibus tempus viverra.
                </p>
            </motion.div>
            <motion.div className="relative mx-auto my-8 max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {repositories.map((r) => (
                    <motion.a
                        key={r.title}
                        className="relative flex flex-col border bg-white rounded-xl p-6 shadow"
                        href={r.url}
                        target="_blank"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 0.2 + Math.random() * 1,
                                duration: 0.4,
                            },
                        }}
                    >
                        <h3 className="mb-1 font-bold text-base">{r.title}</h3>
                        <p className="mb-4 text-sm text-stone-600 leading-[22px]">{r.description}</p>
                        <div className="flex flex-row gap-4 mt-auto mb-0 text-sm text-stone-600">
                            {r.language && (
                                <span>
                                    <span
                                        className={clsx("mr-2 inline-block rounded-full w-3 h-3 align-middle")}
                                        style={
                                            r.language in colors ? { backgroundColor: colors[r.language].color } : {}
                                        }
                                    ></span>
                                    <span>{r.language}</span>
                                </span>
                            )}
                            <span>
                                <TiStar className="mr-1 inline-block text-lg align-text-top text-stone-300" />
                                <span>{r.stars}</span>
                            </span>
                            {/* {r.updatedAt && <span>{format(r.updatedAt)}</span>} */}
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}

export default Repositories;
