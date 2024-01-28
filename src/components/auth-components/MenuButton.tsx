import { ReactElement } from "react";

interface Props {
    text: string;
    icon: ReactElement;
    iconRight: ReactElement;
}

export const MenuButton = ({ text, icon, iconRight }: Props) => {
    return (
        <a
            href="#"
            className="flex px-2 rounded  justify-between py-3 hover:bg-gray-100/80 items-center text-gray-600 text-xs first:border-b"
        >
            <div className="flex items-center gap-1">
                {icon}
                <span className="font-semibold text-sm text-gray-600">{text}</span>
            </div>
            <div>{iconRight}</div>
        </a>
    );
};
