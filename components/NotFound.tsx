//404 page
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
	return (
		<motion.div
			className="w-screen h-screen flex flex-col justify-center space-y-10 items-center"
			initial={{ opacity: 0.5, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div>
				<p className="text-red-500 font-custom text-3xl text-center py-2">
					suyoin
				</p>
				<p className="text-white inline-block border-r border-solid mr-5 px-5 py-4 text-xl font-semibold">
					404
				</p>
				<p className="text-white inline-block text-left align-middle font-normal pb-2">
					This page could not be found.
				</p>
			</div>
			<Link href="/">
				<a className="font-semibold rounded-full border-2 border-red-500 bg-opacity-0 text-red-500 transition duration-300 ease-out bg-red-500 hover:bg-opacity-100 hover:text-gray-800 text-1xl px-6 py-2">
					Back
				</a>
			</Link>
		</motion.div>
	);
};

export default NotFound;
