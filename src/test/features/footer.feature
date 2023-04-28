Feature: Selección “por defecto” de la opción inicio

    Como colaborador/usuario
    Quiero visualizar la página de inicio
    Para comprender de que trata el sitio

    Scenario: Visualizar los comentarios de twitter en el footer. 

        Given el colaborador/usuario se encuentra en el footer de la página 
        When visualiza el footer de la página. 
        Then se debe mostrar los últimos tweets y la fecha de publicación. 
        
    Scenario: Redirigir a twitter para seguir la página de la empresa. 

        Given el colaborador/usuario se encuentra en el footer de la página 
        When presiona sobre el botón “Seguir a @mdp_consulting” 
        Then se debe redirigir a la página principal de la empresa en twitter. 