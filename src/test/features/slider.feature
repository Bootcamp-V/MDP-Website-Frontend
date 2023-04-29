Feature: Selección “por defecto” de la opción inicio

    Como colaborador/usuario deseo visualizar la página de inicio.

    Scenario: Mostrar los banners. 

        Given el colaborador/usuario se encuentra en el banner principales. 
        When presiona las flechas del banner
        Then Se muestra el siguiente banner y asi sucesivamente. 