# Utilizamos la imagen base de Node.js versión 21.1.0
FROM node:21.1.0

# Establecemos el directorio de trabajo en /app
WORKDIR /app/proyecto

# Agrgamos el resto de los archivos de la aplicación al directorio de trabajo
ADD . .

# Crea un proyecto de React llamado "proyecto"
#RUN npx create-react-app proyecto

# Instala react-router-dom y luego ejecuta npm init
#RUN npm install react-router-dom && npm init -y


# Exponemos el puerto en el que la aplicación se ejecutará dentro del contenedor (si es necesario)
# EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]


#CMD ["bash", "-c", "while true; do sleep 1000; done"]