Feature: Selección “por defecto” de la opción inicio

    Como colaborador/usuario
    Quiero visualizar la página de inicio
    Para comprender de que trata el sitio

    Scenario: Selección “por defecto” de la opción inicio en el menu
    
        Given Colaborador/usuario ingresa a la página inicio.
        When se carga la página 
        Then se muestra la página inicio con todos sus elementos