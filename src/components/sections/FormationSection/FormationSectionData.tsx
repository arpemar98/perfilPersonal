export function getFormationArray( language:string ){

    return [
        {   
            title       : ( language == "ES" )?( 'Licenciatura en Ingeniería en Informática en' ): ('Degree in Informatic Engineering at'),
            school      : "Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) (UDG).",
            place       : "Guadalajara, Jalisco, México.",
            duration    : ( language == "ES" )? "Enero 2017 - Diciembre 2020" : "January 2017 - December 2020",
            image       : "assets/images/formation/udg_logo.png"
        },
        {
            title       : ( language == "ES" )?( 'Técnico en programación en' ): ('Programming Technician at'),
            school      : "Centro de Bachillerato Tecnológico Industrial y de Servicios #25 (CBTIS) (DGETI)",
            place       : "Salina Cruz, Oaxaca, México.",
            duration    : ( language == "ES" )? "Agosto 2013 - Junio 2016" : "August 2013 - June 2016",
            image       : "assets/images/formation/dgeti_logo.png"
        }
    ];

    
}