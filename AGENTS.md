<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Deployment version policy

The user requires a version bump for every new deployment release from version 1.0.0 onward. Unless they specify another version, increment the patch version before deploying so the deployed site displays the new version. A single release promoted to both develop and master uses the same version on both branches; retries of that release do not require another bump.

Use `npm.cmd version patch --no-git-tag-version` (or the explicitly requested version). Commit `package.json`, `package-lock.json`, and `src/app/generated-version.ts` together. The version lifecycle hook synchronizes the displayed version. Do not deploy a new release without a version bump.
