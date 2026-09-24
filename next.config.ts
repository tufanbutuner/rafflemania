import path from "path";
import { fileURLToPath } from "url";

import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up past the repo and
  // finds an unrelated lockfile in the home directory.
  turbopack: {
    root: dirname,
  },
};

export default withPayload(nextConfig);
