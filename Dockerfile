# Use a imagem Node.js como imagem base
FROM node:14

# Crie um diretório de trabalho para a aplicação
WORKDIR /app

# Copie o arquivo index.js para o diretório de trabalho
COPY index.js .

# Instale as dependências da aplicação
RUN npm install

# Defina a porta que a aplicação deve ser executada
EXPOSE 5000

# Inicie a aplicação quando o contêiner for iniciado
CMD [ "node", "index.js" ]