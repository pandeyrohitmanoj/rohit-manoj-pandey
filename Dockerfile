# Use a Node.js base image
FROM node:18-alpine as builder

ENV NEXT_PUBLIC_EMAILJS="MQBRvZaBn7mdQUqXM"
ENV NEXT_PUBLIC_SERVICE_ID="service_u8z52da"
ENV NEXT_PUBLIC_TEMPLATE_KEY="template_czlfb6e"
ENV NEXT_PUBLIC_EMAIL="rohitpandey20002017@gmail.com"

CMD mkdir /usr

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000

CMD ["npm", "run","start"]