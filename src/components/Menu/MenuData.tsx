import { analytics, archiveOutline, archiveSharp, bookmarkOutline, call, extensionPuzzle, heartOutline, heartSharp, home, logoGithub, logoLinkedin, logoStackoverflow, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, person, ribbon, school, sunny, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export function getProfileImg(){

  return "https://ionicframework.com/docs/img/demos/avatar.svg"

};



export function getProfileName(){
  return "Nombre persona"
}



export function getProfileLinksArray(){

  return [
    {
      icon  : logoLinkedin,
      url   : ""
    },
    {
      icon  : logoStackoverflow,
      url   : ""
    },
    {
      icon  : logoGithub,
      url   : ""
    },
    
  ];

}

export function getSectionsArray( language:string ){
  
  return [
    {
      label : ( language == 'ES' )? 'Perfil' : 'Profile',
      id    : 'section_profile',
      icon  : person,
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

