import Link from "next/link";
import pageList from "../util/pageList";

const NavigationBar = ({ current }: { current: string }) => {
	return (
		<div className="flex flex-row justify-left items-center space-x-5 p-3 sticky w-full h-10 bg-gray-800 ">
			<>
				{pageList.map((pageDescription) => {
					return (
						<Link
							key={pageDescription.pageName}
							href={pageDescription.relativeUrl}
						>
							<a
								className={`text-xl font-custom transition duration-300 ease-out ${
									current === pageDescription.pageName
										? `text-red-500`
										: `text-gray-400 hover:text-red-400`
								}`}
							>
								{pageDescription.displayName}
							</a>
						</Link>
					);
				})}
			</>
		</div>
	);
};

export default NavigationBar;
