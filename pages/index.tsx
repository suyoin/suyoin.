import Index from "../components/pages/Index";
import Playground from "../components/pages/Playground";
import getSubdomain from "../util/getSubdomain";
import pageList from "../util/pageList";

const pages = {
	index: Index,
	playground: Playground,
};

export default function IndexPage({ subdomain }): React.ReactElement {
	if (subdomain) {
		const pageDescription = pageList.find((pageDescription) => {
			return pageDescription.pageName === subdomain;
		});
		if (pageDescription) {
			return pages[pageDescription.pageName];
		}
	}

	return <Index />;
}

export function getServerSideProps({ req, res }) {
	const { subdomain } = getSubdomain(req);

	if (subdomain) {
		return { props: { subdomain } };
	}

	return { props: {} };
}
