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
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
}

export default nextConfig
