import { useSearchParams } from "react-router-dom";

import { filterButtonsData } from "../constants";
import FilterButton from "./FilterButton";

const ExtensionsListHeader = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get("filter");

    const handleSearchParamsChange = (filterValue: string) => {
        if (searchParams.get("filter") === filterValue) return;
        if (filterValue === "all") {
            searchParams.delete("filter");
        }

        searchParams.set("filter", filterValue.toLowerCase());

        setSearchParams(searchParams);
    }

    return (
        <header className="w-full flex flex-col items-center justify-between md:flex-row max-md:pb-6">
            <h1 className="text-3xl font-bold text-[#091540] dark:text-white">
                Extensions List
            </h1>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
                {filterButtonsData.map((filterButton) => {

                    const isActive = 
                        filterButton.actionTitle === 'all'
                        ? !currentFilter || currentFilter.toLowerCase() === 'all'
                        : filterButton.actionTitle === currentFilter

                    return (
                        <FilterButton 
                            key={filterButton.title}
                            title={filterButton.title}
                            action={() => handleSearchParamsChange(`${filterButton.actionTitle}`)}
                            active={isActive}
                        />
                    )
                })}
            </div>
        </header>
    )
}

export default ExtensionsListHeader;