FROM php:8.1.5-apache

COPY public .

RUN apk add --update nodejs npm

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr
ENV APP_TIMEZONE Asia/Tokyo
ENV APP_URL http://localhost:8080

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8080"]