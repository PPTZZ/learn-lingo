import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://ftp.goit.study/img/**')]
    }
};

export default nextConfig;
