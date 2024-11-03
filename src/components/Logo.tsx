import Image from "next/image";
import logo from "../app/Assets/logo.png";

export function Logo() {
    return (
        <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
            <Image src={logo} className="h-24 w-24" alt="Logo"/>
        </span>
    )
}