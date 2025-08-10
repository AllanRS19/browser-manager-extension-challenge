import { cn } from "../lib/utils";

const FilterButton = ({ title, action, active }: { title: string, action: () => void, active?: boolean }) => {
    return (
        <button className={cn(
            "px-4 py-1.5 rounded-full bg-white dark:bg-[#2f354b] dark:text-white border-2 border-transparent focus:border-[#EBF2FC] dark:focus:border-[#2f354b] outline-[1.5px] outline-neutral-200 dark:outline-neutral-600 cursor-pointer transition ease-in focus dark:hover:opacity-100 hover:opacity-40 dark:hover:!bg-[#525868]", 
            active && "dark:hover:!bg-red-400 hover:!opacity-60 !bg-red-700 dark:!bg-red-400 dark:outline-0 text-white dark:text-black")}
            onClick={action}
        >
            {title}
        </button>
    )
}

export default FilterButton;