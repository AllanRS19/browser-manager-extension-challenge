import { useState } from "react";

const ExtensionCard = ({
    id,
    name,
    description,
    logo,
    isActive,
    removeExtension,
    toggleExtensionActiveState
}: {
    id: number,
    name: string,
    description: string,
    logo: string,
    isActive: boolean,
    removeExtension: (id: number) => void;
    toggleExtensionActiveState: (id: number) => void;
}) => {

    const [isChecked, setIsChecked] = useState(isActive);
    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
        toggleExtensionActiveState(id);
    }

    return (
        <div className="extension-card">
            <div className="w-full flex gap-2.5">
                <img
                    src={logo}
                    alt={name}
                    width={40}
                    height={40}
                    className="self-start"
                />
                <div className="flex flex-col max-w-full">
                    <h3 className="font-semibold text-[#091540] dark:text-white">{name}</h3>
                    <p className="shrink-0 truncate text-wrap text-sm dark:text-[#a5a9b7]">{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={() => removeExtension(id)} className="font-semibold px-3.5 py-1.5 border-3 border-white dark:border-[#1f2535] outline-[1.5px] outline-neutral-300/60 rounded-full text-[#091540] dark:text-[#a5a9b7] text-sm cursor-pointer focus-bg hover:bg-red-700 dark:hover:bg-red-400 hover:border-red-700 dark:hover:border-red-400 dark:hover:outline-none hover:text-white dark:hover:text-[#1f2535] transition">
                    Remove
                </button>
                <label className='flex cursor-pointer select-none items-center transition border-3 border-white dark:border-[#1f2535] outline-transparent outline-[2.3px] active:outline-red-500 rounded-full'>
                    <div className='relative'>
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className='sr-only'
                        />
                        <div
                            className={`box block h-6 w-10 rounded-full ${isChecked ? 'bg-red-500' : 'bg-[#E5E7EB] dark:bg-[#525869]'
                                }`}
                        ></div>
                        <div
                            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
                                }`}
                        ></div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default ExtensionCard;