# Build context for this Dockerfile is intentionally tiny (~1 KB) — only the
# Dockerfile itself is uploaded via `railway up`. Source is fetched from
# Forgejo at build time so we sidestep Cloudflare's payload limit on the
# Railway upload endpoint.

# ---- Builder stage ----
FROM node:20-alpine AS builder

RUN apk add --no-cache git

WORKDIR /build

# Cache-bust: this URL's response changes whenever main's HEAD changes.
# Docker's ADD honors Last-Modified/ETag, so the next layer reruns on new commits.
ADD "https://forgejo-production-3c74.up.railway.app/api/v1/repos/sovenor/bitcoin-rocks/branches/main" /tmp/forgejo-main.json

RUN git clone --depth=1 https://forgejo-production-3c74.up.railway.app/sovenor/bitcoin-rocks.git .

RUN npm ci
RUN npm run build

# ---- Runtime stage ----
FROM node:20-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["npm", "run", "start"]
