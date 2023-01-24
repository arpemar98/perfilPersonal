import { analytics, archiveOutline, archiveSharp, bookmarkOutline, call, extensionPuzzle, heartOutline, heartSharp, home, logoGithub, logoLinkedin, logoStackoverflow, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, person, ribbon, school, sunny, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export function getProfileImg(){

  return "assets/images/personal/profile.jpg";

};



export function getProfileName(){
  return "Josué Aristeo Pérez Martínez"
}



export function getProfileLinksArray(){

  return [
    {
      label : "Linkedin",
      icon  : logoLinkedin,
      url   : "https://mx.linkedin.com/in/arpemar98"
    },
    {
      label : "Stackoverflow",
      icon  : logoStackoverflow,
      url   : "https://stackoverflow.com/users/14267634/arpemar98"
    },
    {
      label : "GitHub",
      icon  : logoGithub,
      url   : "https://github.com/arpemar98"
    },
    
  ];

}

export function getSectionsArray( language:string ){
  
  return [
    {
      label : ( language == 'ES' )? 'Inicio' : 'Home',
      id    : 'section_profile',
      icon  : home,
    },
    {
      label : ( language == 'ES' )? 'Formación' : 'Formation',
      id    : 'section_formation',
      icon  : school,
    },
    {
      label : ( language == 'ES' )? 'Experiencia' : 'Experience',
      id    : 'section_experience',
      icon  : analytics,
    },
    {
      label : ( language == 'ES' )? 'Habilidades' : 'Skills',
      id    : 'section_skills',
      icon  : extensionPuzzle,
    },
    {
      label : ( language == 'ES' )? 'Certificados' : 'Certificates',
      id    : 'section_certificates',
      icon  : ribbon,
    },
    {
      label : ( language == 'ES' )? 'Contacto' : 'Contact',
      id    : 'section_contact',
      icon  : call,
    }
  ];
}

