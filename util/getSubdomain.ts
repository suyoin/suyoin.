import { NextApiRequest } from "next";

const getSubdomain = (req: NextApiRequest) => {
	let host: string;
	let sub: string;
	if (req.headers.host) {
		host = req.headers.host;
	}

	if (typeof window !== "undefined") {
		host = window.location.host;
	}

	if (host) {
		sub = host.split(".")[0];

		if (sub === host) {
			sub = undefined;
		}
	}

	return { host, subdomain: sub };
};

export default getSubdomain;
