# LAMP installation tutorial (Ubuntu 18.04-22.04)

## 1. Update repositories indexes and add new repositories
```bash
sudo apt update
sudo apt install -y curl wget gnupg2 ca-certificates lsb-release apt-transport-https
sudo apt-add-repository ppa:ondrej/php
```

Okey, We have added PHP repository, let's go install web server

## 2. Install web server (apache2)
```bash
    sudo apt install apache2 -y
    sudo systemctl enable apache2.service
    sudo systemctl start apache2.service
```

Okey, good job 🎉 Let's go install PHP interpreter and MariaDB

## 3. Install PHP 8.1 packages
```bash
    sudo apt install php8.1 php8.1-{bcmath,bz2,intl,gd,mbstring,mysql,zip,fpm} -y
    sudo systemctl restart apache2.service
```

## 4. Install MariaDB server
```bash
sudo apt install mariadb-server mariadb-client -y
sudo systemctl enable mariadb.service
sudo mysql_secure_installation
```

You will be prompted for a bunch of questions which you need to answer according to your security preferences.

## 5. Install PhpMyAdmin
```bash
sudo apt install phpmyadmin -y
sudo systemctl restart apache2.service
```