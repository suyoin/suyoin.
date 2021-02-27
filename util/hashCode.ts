//https://github.com/roblox-ts/roblox-ts.github.io/blob/7aec8177373b22bc342c9cd67a44b4cdb4b39251/src/util/hash.ts#L6

import lzstring from "lz-string";

const CODE_PREFIX = "#code/";

export const getCodeFromHash = (hash: string) => {
	const decompressed = lzstring.decompressFromEncodedURIComponent(
		hash.substr(CODE_PREFIX.length)
	);
	if (decompressed !== undefined) {
		return decompressed;
	}
};

export const getHashFromCode = (code: string) => {
	return `${CODE_PREFIX}${lzstring.compressToEncodedURIComponent(code)}`;
};
