FROM nginx

EXPOSE 80

copy dist /usr/share/nginx/html/

cmd "nginx"
