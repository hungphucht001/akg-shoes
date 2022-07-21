FROM node:16.15.1
#also say 
WORKDIR /app
#copy the react app to the container
COPY . .

# #prepare the contiainer for building react 
RUN npm install --silent
#RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm run build 

#prepare nginx
FROM nginx:1.18.0

COPY --from=build /app/build /var/www/html
#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]