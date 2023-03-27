import { business, calendarClear, call, globe, library, location, logoBitbucket, logoCss3, logoHtml5, logoJavascript, logoLaravel, logoSlack, school, server } from 'ionicons/icons';

export function getExperienceArray( language:string ){

    return [
        {
            title       : ( language == "ES" )? ( 'Programador en' ): ('Programmer at'),
            place       : "Global Asiatica SA de CV",
            location    : "Zapopan, Jalisco, México",
            duration    : ( language == "ES" )? "Junio 2022 - Actualmente" : "June 2022 - Currently",
    
            description : ( language == "ES" )?( 
                            'Implementar nuevas tecnologías y mejorar las paginas referentes al sector de salud.'
                        ) : (
                            'Implement new technologies and improve pages about medical sector.'
                        ),
    
            url         : "http://abisalud.com/",
                
            tools       : [
                {
                    label   : "Html",
                    color   : "#E44D26"
                },
                {
                    label   : "CSS",
                    color   : "#264DE4"
                },
                {
                    label   : "Javascript",
                    color   : "#F7E018"
                },
                {
                    label   : "Laravel",
                    color   : "#FE524E"
                },
                {
                    label   : "php",
                    color   : "#787CB4"
                },
                {
                    label   : "jQuery",
                    color   : "#0868AB"
                },
                {
                    label   : "Ajax",
                    color   : "#0074C9"
                },
                {
                    label   : "Bootstrap",
                    color   : "#5A3779"
                },
                {
                    label   : "Docker",
                    color   : "#2496ED"
                },
                {
                    label   : "React",
                    color   : "#61DBFB"
                },
                {
                    label   : "Ionic",
                    color   : "#3581FF"
                },
                {
                    label   : "GitLab",
                    color   : "#E24329"
                },
                {
                    label   : "PostgreSQL",
                    color   : "#2F6792"
                },

                

                

                
                
                
            ]
        },
        {
            title       : ( language == "ES" )?( 'Desarrollador Full Stack en' ): ('Full Stack developer at'),
            place       : "Instituto de la Infraestructura Física Educativa del Estado de Jalisco (INFEJAL)",
            location    : "Guadalajara, Jalisco, México",
            duration    : ( language == "ES" )? "Febrero 2021 - Junio 2022" : "February 2021 - June 2022",
    
            description : ( language == "ES" )?( 
                            'Dar soporte, desarrollo y mantenimiento a la página principal del instituto encargado de obras gubernamentales en el sector educativo con diferentes herramientas y tecnologías.' 
                        ) : (
                            'Give support, develop and maintain the main website of this institute of government works in the educational sector with different tools and technologies.'
                        ),
    
            url         : "https://infejal.jalisco.gob.mx/",
        
            tools       : [
                {
                    label   : "Html",
                    color   : "#E44D26"
                },
                {
                    label   : "CSS",
                    color   : "#264DE4"
                },
                {
                    label   : "Bitbucket",
                    color   : "#2783FE"
                },
                {
                    label   : "Javascript",
                    color   : "#F7E018"
                },
                {
                    label   : "Laravel",
                    color   : "#FE524E"
                },
                {
                    label   : "slack",
                    color   : "#4A154B"
                },
                {
                    label   : "php",
                    color   : "#787CB4"
                },
                {
                    label   : "jQuery",
                    color   : "#0868AB"
                },
                {
                    label   : "Ajax",
                    color   : "#0074C9"
                },
                {
                    label   : "SQL Server",
                    color   : "#E7322A"
                },
                {
                    label   : "MySQL",
                    color   : "#00618A"
                },
                {
                    label   : "Bootstrap",
                    color   : "#5A3779"
                },
                
            ]
            
        }
    ];

}
