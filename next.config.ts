import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "legekrogen.webmcdm.dk",
			},
		],
	},
}

export default nextConfig
