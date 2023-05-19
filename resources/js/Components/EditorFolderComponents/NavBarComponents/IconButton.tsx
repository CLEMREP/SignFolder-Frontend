import Icons from "@/Components/Icons";

export default function IconButton({iconName, notified, onClick}: { iconName: string, notified: boolean, onClick?: any }) {
    if(notified) {
        return (
            <div className="relative">
                <div className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-error-main rounded-full"></div>
                <Icons className={"fill-primary-main cursor-pointer"} iconName={iconName} size={30} />
            </div>
        );
    } else {
        return (
            <Icons className={"fill-primary-main cursor-pointer"} iconName={iconName} size={30} onClick={onClick} />
        );
    }
}
