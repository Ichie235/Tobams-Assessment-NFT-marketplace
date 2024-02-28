"use client";
import { Public_Sans } from "next/font/google";
import { ComponentProps } from "react";

type ToggleButtonProps = {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	isActive?: boolean;
	isActiveClassName?: string;
	disabled?: boolean;
  className?: string;
} & ComponentProps<"button">;

const font = Public_Sans({ subsets: ["latin"] });

export default function ToggleButton(props: ToggleButtonProps) {
	return (
		<button
			type={props.type}
			className={`${props.className}
            ${font.className}
            outline-none p-2 cursor-pointer
						rounded-lg
            ${props.isActive && props.isActiveClassName}
            `}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}
