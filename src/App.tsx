import Home from "./screens/home";
import Repositories from "./screens/repositories";
import Resume from "./screens/resume";

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
                <Home />
                <Resume />
                <Repositories />
            </main>
            <footer className="py-8">
                <div className="flex flex-col items-center gap-4">
                    <img src="/logo.png" className="h-12 brightness-[80%]" draggable={false} />
                    <div className="text-gray-400">Copyright &copy; {new Date().getFullYear()} Ian Hornik</div>
                </div>
            </footer>
        </div>
    );
}
