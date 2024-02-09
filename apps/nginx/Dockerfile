FROM nginx:alpine

COPY production.conf /etc/nginx/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]