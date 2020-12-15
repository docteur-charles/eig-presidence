<p align="center"><a href="https://gecprn.ansi.app" target="_blank"><img src="https://gecprn.herokuapp.com/assets/images/logo_transparent.png" width="400"></a></p>

# GEC-PRN

GEC-PRN est une application Web dédiée à la gestion électronique des courriers. Elle vise à :

- Dématérialiser le courrier traditionnel;
- Automatiser le schéma traditionnel de gestion des courriers;
- Générer automatiquement des numéros d'ordre en fonction du type et la catégorie du courrier;
- Mettre en place des mécanismes de rôles basés sur des privilèges selon les niveaux d'accès des utilisateurs;
- Hiérarchiser les utilisateurs et les structures afin d'automatiser le workflow et l'imputation des courriers;
- Gérer les carnets d'adresse pour le transfert et la diffusion des courriers;
- Faciliter la gestion des archives;
- Mettre en place la notification des rappels;
- Apporter un meilleur suivi d'expédition du courrier;
- Diffuser des statistiques;
- Création des alertes et notifications pour les consultations des archives.
 
La plateforme se veut simple et facile à configurer pour toute entité.

# Mise en place

La plateforme GECPRN a été conçue essentiellement sur la base du Framework
Laravel 8. L’architecture de son code source respecte donc celui de Laravel à
l’exception des vues qui sont gérées par les composants ReactJS situés dans
le dossier ```resources/js/components```.

## Pré-réquis

Le développement et déploiement de la plateforme GEC-PRN requiert :
- Système d’exploitation Windows >=8
- Apache >= 2.4.41
- PHP >= 7.4.0
- PostgreSQL >= 13.1
- Mysql >= 8.0.18
- Node >= 12.14.0
- Framework Laravel >= 8

Le projet est configuré pour automatiquement fonctionner avec [MySQL](https://dev.mysql.com/downloads/) en développement, et [PostgreSQL](https://www.postgresql.org/download/) en production. Vous pouvez changer cette configuration dans le fichier ```/config/database.php``` puis dans vos _seeders_ situés dans le dossier ```/database/seeders```.

## Installation

Clonez ou téléchargez ce répo. Allez à la racine du projet et tapez les commandes suivantes:

```sh
npm install
composer install
```

A la racine du projet, créez le fichier ```.env``` et ajoutez-y le contenu suivant:

```conf
APP_NAME=GecPrn
APP_ENV=local
APP_KEY=base64:697xEHzgfOA1b7+6nVfnXksw4bo73LIHYPzcbB80y0o=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=GecPrn
DB_USERNAME=root
DB_PASSWORD=MariaDB@2002

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=database
SESSION_LIFETIME=120
```
Vous pouvez mettre le mot de passe de votre base de données par défaut. Si vous souhaitez changer le mot de passe ```root``` de votre base de données, ouvrez un terminal ou une invite de commande, connectez-vous à votre base de données et tapez ces commandes:

```sql
USE mysql;
UPDATE user SET authentication_string=password('MariaDB@2002'), plugin='mysql_native_password' WHERE user = 'root';
FLUSH PRIVILEGES;
```

Maintenant créez la base de données:

```sql
CREATE DATABASE GecPrn;
quit
```

Toujours à la racine du projet, lancez:

```sh
php artisan migrate:fresh --seed
```

Ceci a pour effet de créer les tables de la base de données et des données nécessaires à la configuration initiale de l'application. Nous en avons profité pour ajouter des utilisateurs et des rôles. Vous pouvez personaliser tout ça plus tard dans l'interface admin qui sera créée à cet effet. 

Tapez la commande:

```sh
php artisan serve
```

## Démonstration

Ouvrez votre navigateur à l'adresse [http://localhost:8000](http://localhost:8000) pour commencer la démo.


Les utilisateurs, classés par ordre hiérarchique, sont les suivants:

###### Bureau d’ordre:
- Utilisateur: ```bur_ordre@presidence.ne```
- Mot de passe: ```BurOrdre123```

###### Directeur du département informatique:
- Utilisateur: ```dir@presidence.ne```
- Mot de passe: ```Dir123```

###### Responsable du service courrier:
- Utilisateur: ```dir_Courrier@presidence.ne```
- Mot de passe: ```DirCourrier123```

###### SGPA (Sécrétaire Général Adjoint de la Présidence):
- Utilisateur : ```sgpa@presidence.ne```
- Mot de passe : ```Sgpa123```

###### SGP (Secrétaire General de la Présidence):
- Utilisateur: ```sgp@presidence.ne```
- Mot de passe: ```Sgp123```

###### DIRCABA 2 (Directeur de Cabinet Adjoint en Second):
- Utilisateur: ```dircaba2@presidence.ne```
- Mot de passe: ```Dircaba2123```

###### DIRCABA 1 (Directeur de Cabinet Adjoint):
- Utilisateur: ```dircaba1@presidence.ne```
- Mot de passe: ```Dircaba1123```

###### DIRCAB (Directeur de Cabinet):
- Utilisateur: ```dircab@presidence.ne```
- Mot de passe: ```Dircab123```

###### PRN (Président de la République du Niger):
- Utilisateur: ```prn@presidence.ne```
- Mot de passe: ```Prn123```

## License
Open-Source
