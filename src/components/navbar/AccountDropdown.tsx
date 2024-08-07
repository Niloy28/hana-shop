"use client";

import React from "react";
import { useTheme } from "next-themes";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
	CircleUser,
	MoonIcon,
	SunIcon,
	ToggleLeftIcon,
	ToggleRightIcon,
} from "lucide-react";

const AccountDropdown = () => {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="w-10 h-10 rounded-full"
					variant="secondary"
					size="icon"
				>
					<CircleUser className="w-5 h-5 " />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="hover:cursor-pointer">
					Logout
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="hover:cursor-pointer"
					onClick={() => {
						theme === "light" ? setTheme("dark") : setTheme("light");
					}}
				>
					<div className="w-full flex justify-evenly">
						<MoonIcon />
						{theme === "light" ? <ToggleRightIcon /> : <ToggleLeftIcon />}
						<SunIcon />
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AccountDropdown;
