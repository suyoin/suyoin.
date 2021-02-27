import Link from "next/link";

const NavigationBar = () => {
	return (
		<div className="flex flex-row justify-left items-center space-x-3 p-3 sticky w-full h-10 bg-gray-800 ">
			<Link href="/">
				<a className="text-xl text-gray-500 font-custom">suyoin</a>
			</Link>
			<Link href="/playground">
				<a className="text-xl text-gray-400 font-custom">playground</a>
			</Link>
		</div>
	);
};

export default NavigationBar;
