import Select from "@/Components/TableComponents/Select";
import Header from "@/Components/TableComponents/Header";
import SearchBar from "@/Components/TableComponents/SearchBar";
import Body from "@/Components/TableComponents/Body/Body";
import Icons from "@/Components/Icons";

export default function Table() {
    return (
        <div className="flex flex-col justify-start items-start w-full h-full rounded-xl bg-background-light-paper dark:bg-background-dark-paper overflow-auto">
            <div className="flex flex-row justify-center items-center w-full p-5 gap-5">
                <Select />
                <SearchBar />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full overflow-auto">
                <Header />
                <Body />
            </div>
            <div className="flex flex-row justify-end items-center w-full p-5 gap-5 border-t-2 border-background-light-neutral dark:border-background-dark-neutral">
                <span className="text-text-light-disabled dark:text-text-dark-secondary">1/5</span>
                <Icons className={"fill-text-light-disabled dark:fill-text-dark-disabled"} iconName={'chevronLeft'} />
                <Icons className={"fill-text-light-secondary dark:fill-text-dark-secondary"} iconName={'chevronRight'} />
            </div>
        </div>
    );
}
