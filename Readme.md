
El proyecto tiene los estilos compilados mediante SASS y Gulp.

Primeramente hace falta tener los paquetes de node y npm. Podemos comprobar si lo tenemos instalados en nuestra terminal: 

    node --version

    npm --version


## Instalaremos Gulp en el proyecto con los siguientes comandos:

    npm -g install gulp-cli

(El -g indica que se instala de forma global y se puede usar la utilidad de Gulp (como nuevo comando de la terminal) en todos los proyectos de nuestro ordenador.)    

## Creamos nuestro archivo JSON

    npm init


## Instalar Gulp de forma local en nuestro proyecto

    npm install --save-dev gulp

    
## Instalamos el paquete de SASS

    npm install --save-dev gulp-sass

En este caso nuestro proyecto ya contiene el archivo gulpifel.js que compila automáticamente SASS en CSS.
De lo contrario, tendríamos que copiarlo con las rutas correspondientes.


## Actualizar cada cambio SASS que hagamos

    gulp