FROM node:18

ENV NODE_ENV=development
ENV NEXT_PUBLIC_EMAILJS=MQBRvZaBn7mdQUqXM
ENV NEXT_PUBLIC_SERVICE_ID=service_u8z52da
ENV NEXT_PUBLIC_TEMPLATE_KEY=template_czlfb6e
ENV NEXT_PUBLIC_EMAIL=rohitpandey20002017@gmail.com

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev
