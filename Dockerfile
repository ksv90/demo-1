FROM node:20

RUN npm i -g pnpm

WORKDIR /app

COPY ./package.json ./pnpm-lock.yaml ./
COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm build

CMD [ "pnpm", "start" ]
