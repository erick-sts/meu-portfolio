# Usa uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package.json package-lock.json ./  
RUN npm install

# Copia todo o restante do código
COPY . .

# Constrói o projeto Next.js
RUN npm run build

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
