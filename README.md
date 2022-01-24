Technical Challenge - NEC
-------------

Ejercicio práctico 1 - El Repositorio contiene dos carpetas, Frontend y Backend. En la carpeta de Frontend se encuentra el proyecto de Angular.
Prerrequisitos -> Tener instalado Node.js, npm, .NET Core 3.1, Angular CLI

Para ejecutar:
1. Clonar proyecto
2. https://github.com/juanpbeloso/technicalNEC.git
3. Acceder a la ruta ../technicalNec/Backend/Backend
En esta carpeta se puede localizar el archivo *appsetings.json* donde se podrá configurar la API Key

Nota: La API CoinMarketCap ofrece una test API Key (APIKEY_TEST en *appsetings.json*) para realizar pruebas en la URL *sandbox-api.coinmarketcap.com*

Se gestionó una clave API como desarrollador (APIKEY_PRO en *appsetings.json*) pero en ciertas peticiones tiene limitaciones al tratarse de un plan básico, por eso se utiliza la Key de test. 

5. Acceder a la ruta /bin/Development/netcoreapp3.1 y ejecutar el siguiente comando:

`$ Backend.exe`

![image](https://user-images.githubusercontent.com/50303942/150785577-48956f5e-cae4-4a43-bc33-4e9d8528ed74.png)

Se puede comprobar que  la API en C# a la espera de la conexión del Frontend.

6. Acceder a la ruta  ../technicalNec/Frontend y ejecutar los siguientes comandos:
7. `$ npm install`
8. `$ ng serve –o` o bien  `$ npm run ng serve –o`

De esta forma se puede testear la funcionalidad del **Ejercicio 1** montando un servidor de desarrollo local, en este caso, en el puerto 4200:

![image](https://user-images.githubusercontent.com/50303942/150781997-5c1f4b8c-f044-4bcc-bea9-c1213707a8f9.png)


![image](https://user-images.githubusercontent.com/50303942/150781922-808eda7b-a4d5-41e8-b703-d7034d17c12e.png)

En el apartado de conversión se puede observar que los valores de todas las cryptomonedas son iguales. Esto se debe a que las pruebas son realizadas con datos obtenidos del la URL de TEST: *sandbox-api.coinmarketcap.com*. 

Esta request en particular permite un máximo de 1 conversión con la APIKEY de desarrollador y la URL correspondiente (no sandbox), y es por eso que se continuó con la resolución del ejercicio utilizando la APIKEY y URL de test. 

Se puede observar el JSON en la parte de quotes, habiendo pasado como parámetro el *symbol* BTC, con cantidad 1 y el parámetro *convert* = "ETH,BNB,USDT,ADA"

"ADA": {"price": 0.6063166094393142},
"BNB": {"price": 0.6063166094393142},
"ETH": {"price": 0.6063166094393142},
"USDT": {"price": 0.6063166094393142}

![image](https://user-images.githubusercontent.com/50303942/150793156-7a99128b-4dcc-4af4-a876-18b409a8ec65.png)

