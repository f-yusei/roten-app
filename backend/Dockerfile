FROM php:8.2-apache

COPY public .

# 依存関係のインストール
RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
    libonig-dev \
    libpq-dev \
    && docker-php-ext-install pdo_pgsql mbstring

# Composerのインストール
COPY --from=composer /usr/bin/composer /usr/bin/composer

#mongoDBのインストール
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Laravelの依存関係をインストール
WORKDIR /var/www
COPY . /var/www
RUN composer install



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

EXPOSE 8080

CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8080"]