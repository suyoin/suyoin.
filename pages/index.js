import { motion } from "framer-motion";
import getSubdomain from "../util/getSubdomain";

export default function Home() {
	return (
		<>
			<div className="flex flex-col w-screen h-screen space-y-1 items-center justify-center">
				<motion.div
					initial={{ opacity: 0.5, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						opacity: { duration: 0.5 },
						scale: { duration: 0.5 },
					}}
				>
					<a
						href="#"
						className="text-5xl font-custom transition duration-150 ease-out text-red-400 hover:underline"
					>
						suyoin
					</a>
				</motion.div>
				<motion.a
					className="text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					todo
				</motion.a>
			</div>
		</>
	);
}

export function getServerSideProps({ req, res }) {
	const { subdomain } = getSubdomain(req);

	return { props: { subdomain } };
}
