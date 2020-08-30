# Taller 2

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
