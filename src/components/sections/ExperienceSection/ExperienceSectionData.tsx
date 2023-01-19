import { business, calendarClear, call, globe, library, location, logoBitbucket, logoCss3, logoHtml5, logoJavascript, logoLaravel, logoSlack, school, server } from 'ionicons/icons';

export function getExperienceArray( language:string ){

    return [
        {
            title       : ( language == "ES" )? ( 'Programador Web en' ): ('Web Programmer at'),
            place       : "Abastecedora de Insumos para la Salud SA de CV",
            location    : "Zapopan, Jalisco, México",
            duration    : ( language == "ES" )? "Junio 2022 - Actualmente" : "June 2013 - Currently",
    
            description : ( language == "ES" )?( 
                            'Implementar nuevas tecnologías y mejorar las paginas referentes al sector de salud.'
                        ) : (
                            'Implement new technologies and improve pages about medical sector.'
                        ),
    
            url         : "http://abisalud.com/",
            
            contacts    : [
                {
                    name        : "Marlene Duran",
                    position    : ( language == "ES" )? "Directora de Tecnologías de la Información" : "Information Technology Director",
                    mail        : "virginia.esquivel@jalisco.gob.mx",
                }
            ],
    
            tools       : []
        },
        {
            title       : ( language == "ES" )?( 'Desarrollador Web Full Stack en' ): ('Web Full Stack developer at'),
            place       : "Instituto de la Infraestructura Física Educativa del Estado de Jalisco (INFEJAL)",
            location    : "Guadalajara, Jalisco, México",
            duration    : ( language == "ES" )? "Febrero 2021 - Junio 2022" : "February 2021 - June 2022",
    
            description : ( language == "ES" )?( 
                            'Dar soporte, desarrollo y mantenimiento a la página principal del instituto encargado de obras gubernamentales en el sector educativo con diferentes herramientas y tecnologías.' 
                        ) : (
                            'Give support, develop and maintain the main website of this institute of government works in the educational sector with different tools and technologies.'
                        ),
    
            url         : "https://infejal.jalisco.gob.mx/",
    
            contacts    : [
                {
                    name        : "Virginia Leonila Esquivel Garduño",
                    position    : ( language == "ES" )? "Directora de Tecnologías de la Información" : "Information Technology Director",
                    mail        : "virginia.esquivel@jalisco.gob.mx",
                    phone       : "01 (33) 3819-5220 EXT. 47181"
                }
            ],
    
            tools       : [
                {
                    icon    : logoHtml5,
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
                    label   : "MyServer",
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
