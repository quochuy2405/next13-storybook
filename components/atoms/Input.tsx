import React from "react";
import { Input } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}
const TextField: React.FC<InputProps> = (props) => {
	return (
		<div className="flex items-center h-fit w-fit relative">
			<Input
				{...props}
				className="w-full h-10 bg-sky-main rounded-lg px-4 py-2 pl-6 text-sm font-normal"
			/>
			<span className="absolute right-2 text-gray-500 opacity-50 hover:opacity-100 cursor-pointer">
				<IoIosCloseCircleOutline size={20} />
			</span>
		</div>
	);
};

export default TextField;
