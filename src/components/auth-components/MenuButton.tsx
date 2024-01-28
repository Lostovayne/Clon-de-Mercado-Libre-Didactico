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
            className="flex px-2 rounded  justify-between py-3 hover:bg-gray-100 items-center text-gray-600 text-xs first:border-b"
        >
            <div>{icon}</div>
            <div className="text-sm">{text}</div>
            <div>{iconRight}</div>
        </a>
    );
};
