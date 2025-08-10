import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sampleData } from "./constants";

import Navbar from "./components/Navbar";
import ExtensionsListHeader from "./components/ExtensionsListHeader";
import ExtensionCard from "./components/ExtensionCard";

const App = () => {

    const [searchParams] = useSearchParams();
    const [extensions, setExtensions] = useState(sampleData);
    const [originalExtensions, setOriginalExtensions] = useState([...extensions]);

    const handleToggleExtensionState = (id: number) => {
        const extensionToToggle = extensions.find((extension) => extension.id === id);
        console.log(extensionToToggle);
        if (!extensionToToggle) return;

        extensionToToggle.isActive = !extensionToToggle?.isActive;
    }

    const handleRemoveExtension = (id: number) => {
        const foundExtension = extensions.filter((extension) => extension.id === id);
        if (foundExtension.length === 0) return;

        setExtensions((prev) => prev.filter((ext) => ext.id !== id));
        setOriginalExtensions((prev) => prev.filter((ext) => ext.id !== id));
    }

    useEffect(() => {
        const filter = searchParams.get("filter");

        if (!filter || filter === "all") {
            setExtensions([...originalExtensions]);
        } else if (filter === "active") {
            const filtered = originalExtensions.filter((ext) => ext.isActive);
            setExtensions(filtered);
        } else if (filter === "inactive") {
            const filtered = originalExtensions.filter((ext) => !ext.isActive);
            setExtensions(filtered);
        }

    }, [searchParams, originalExtensions]);

    return (
        <main className="w-full px-6 pb-10">
            <Navbar />
            <section className="extensions-list-section">
                <ExtensionsListHeader />

                <section className="extensions-wrapper">
                    {extensions.length > 0 && extensions.map((extension) => (
                        <ExtensionCard
                            key={extension.id}
                            removeExtension={() => handleRemoveExtension(extension.id)}
                            toggleExtensionActiveState={() => handleToggleExtensionState(extension.id)}
                            {...extension}
                        />
                    ))}
                </section>
                {extensions.length <= 0 && (
                    <div className="w-full flex flex-col gap-4 justify-center items-center h-[310px] md:h-[415px] bg-white dark:bg-[#1f2535] border dark:border-0 border-neutral-200 rounded-2xl text-center pt-0 mt-0">
                        <img src="/images/empty-box.png" alt="Empty Box" className="w-32 h-32 md:w-40 md:h-40" />
                        <p className="text-lg md:text-xl font-semibold text-wrap dark:text-white">There are no extensions available</p>
                    </div>
                )}
            </section>
        </main>
    )
}

export default App;