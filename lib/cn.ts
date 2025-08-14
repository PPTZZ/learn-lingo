import {twMerge} from "tailwind-merge";
import clsx from "clsx";

const cn = (...inputs: string[]) => twMerge(clsx(inputs))

export default cn