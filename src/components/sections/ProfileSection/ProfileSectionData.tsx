export function getProfileImage(){
    return "assets/images/personal/profile.jpg";
}

export function getGreetingImage(){
    return "assets/images/personal/greeting.jpg";
}

export function getPrimaryImage(){
    return "assets/images/personal/primary.jpg";
}

export function getSecondaryImage(){
    return "assets/images/personal/secondary.jpg";
}

export function getGreetingText( language:string ){

    if( language == "ES" ){
        return 'Hola soy Aristeo!';
    }else{
        return 'Hello I´m Aristeo!';
    }    
}

export function getPrimaryText( language:string ){

    if( language == "ES" ){
        return 'Soy Ingeniero Informático de la Universidad de Guadalajara en Guadalajara, Jalisco, México. Con experiencia en desarrollo web con frameworks como Laravel, React (con Ionic), Angular (con Ionic), JavaScript, PHP, CSS, jQuery, Ajax, Bootstrap, control de versiones Git, conocimiento de bases de datos como MySQL, SQL Server y Postgres.';
    }else{
        return 'I’m an Informatic Engineer from the University of Guadalajara in Guadalajara, Jalisco, Mexico. With experience in web development with Laravel, React (with Ionic), Angular (with Ionic), JavaScript, PHP, CSS, jQuery, Ajax, Bootstrap, Git, knowledge of databases such as MySQL, SQL Server and Postgres.';
    }    
}

export function getSecondaryText( language:string ){

    if( language == "ES" ){
        return "Nací en Salina Cruz, Oaxaca, México, desde muy joven he practicado Taekwondo y jugado videojuegos, lo que me ayudo a tener un mejor pensamiento lógico y un gusto por la tecnología. Me considero una persona amigable y que le gusta conocer nuevas cosas y gente, me gusta escuchar música e ir a conciertos, viajar para conocer lugares, así como aprender de los demás y de sus culturas. Actualmente, me encuentro trabajando como programador web y en mis tiempos libres hago CrossFit en un gimnasio, salgo con amigos a conocer nuevos lugares de la ciudad o ver series para tratar de mejorar mi inglés en casa.";
    }else{
        return "I was born in Salina Cruz, Oaxaca, Mexico, since when I was young I have practiced Taekwondo and played video games, what helped me to have a better logical thinking and a taste for technology. I consider myself a friendly person who likes to meet with new things and new people, I like listening to music and going to concerts, traveling to see places and learning from other people and their cultures. Currently, I am working as a web programmer and on my free time I do CrossFit in a gym, I go out with friends to see new places in the city or just watch series to improve my English at home.";
    }
}