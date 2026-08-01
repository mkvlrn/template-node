FROM node:24.18.1-alpine

WORKDIR /app
ENV NODE_ENV=production

RUN npm i -g pnpm@11.19.0
COPY package.json pnpm-*.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts
COPY src/ ./src/
USER node

CMD ["node", "src/main.ts"]
