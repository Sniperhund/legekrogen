import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "legekrogen.webmcdm.dk",
			},
			{
				protocol: "https",
				hostname: "api.legekrogen.lucasskt.dk",
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
