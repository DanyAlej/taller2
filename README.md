# Taller 2

## Punto 1

Se uso cypress correctamente para login automático, creación de cuenta ya existente, ceración de un desafío público, un habito y una actividad diaria.

![Cypress](/images/cypress0.png)

La herramienta fue de fácil uso, encontramos de mucha utilidad la herramienta de snapshots para realizar debug de la aplicación y ver como esta cambiaba cada vez que se realizaba una interacción.

![Cypress](/images/cypress2.png)

Debido a la necesidad de tener una gema para poder crear un desafío público, se verifico que esta alerta apareciese y se dio por terminado ese test.

![Cypress](/images/cypress1.png)

## Punto 3

Se realizaron 11 tests a la pagina de registro y login creadas con angular.
    ✓ Page title (54ms)
    ✓ Correct registration (6512ms)
    ✓ Incorrect login (4562ms)
    ✓ Correct login (5182ms)
    ✓ Already in USE username registration [should fail] (5819ms)
    ✓ Empty name (4183ms)
    ✓ Empty last name (4242ms)
    ✓ Empty Username (3341ms)
    ✓ Empty password (3544ms)
    ✓ All empty (697ms)
    ✓ Short password (5307ms)

El programa dado a las medidas de seguridad de stackblitz, solo fue posible probar corriendo en el servidor local! 
Para replicar los resultados es necesario:
1. Clonar el repositorio originar del registro: https://github.com/cornflourblue/angular-6-registration-login-example
2. npm install y npm start en consola.
3. Copiar el puerto que se usa de local host en la página de registro. (Por ejemplo: http://localhost:4200/account/register)
4. En jest.config.js cambiar la variable Global por la que copio.

## Punto 4
### Ventajas
Son herramientas muy similares para hacer e2e testing. Sin embargo, Puppeteer tiene una limitación importante en cuanto al soporte de navegadores diferentes a Chrome o aquellos que se basen en Chromium, mientras que Playwright tiene soporte a Firefox, Edge, entre otros. Por lo anterior, se tiene que Playwright puede abarcar un mayor espacio de pruebas.
### Desventajas
Es importante resaltar que Playwright sigue sin una herramienta con muchos usuarios por lo que encontrar soluciones a problemas en el uso de la herramienta no es tan sencillo como lo es con Puppeteer.

## Punto 5

|                                     | Cypress                            | Protractor                   | Puppeteer                | PlayWright      |
|-------------------------------------|------------------------------------|------------------------------|--------------------------|-----------------|
| Interfaz gráfica                    | Sí                                 | No                           | No                       | No |
| Generador de <br>configuración      | Sí                                 | Sí (Con angular <br>CLI)     | No                       | No |
| Locators para <br>AngularJS         | No                                 | Sí                           | No                       | No |
| Integración con <br>Test frameworks | No, interno <br>(sintaxis jasmine) | Jasmine, Mocha, <br>Cucumber | Principalmente <br>todos | Principalmente <br>todos |
| Sistemas operativos                 | Mac, Linux                         | Mac, Linux, <br>Windows      | Mac, Linux, <br>Windows  | Mac, Linux, <br>Windows  |
| Grabación de pruebas                | Sí                                 | No                           | No                       | No |
| Selenium backend                    | No                                 | Sí                           | No                       | No |
| Time-traveling                      | Sí                                 | No                           | No                       | No |
| Supported Browsers                      | Chrome, Chromium, Edge, Firefox(beta support)                             | Chrome, Chromium, Edge, Firefox, Safari                          | Chrome, Chromium, Edge                       | Chrome, Chromium, Edge, Firefox, Safari  |
