Feature: Selección “por defecto” de la opción inicio

    Como colaborador/usuario
    Quiero visualizar la página de inicio
    Para comprender de que trata el sitio

    Scenario: Navegación por las diversas páginas de la web mediante el header. 

        Given el colaborador/usuario se encuentra en el header de la página inicio. 
        When presiona sobre los enlaces del header de la página 
        Then se redirige a las otras páginas del sitio web cómo : Servicios, Nosotros, Clientes, Blog o Contacto