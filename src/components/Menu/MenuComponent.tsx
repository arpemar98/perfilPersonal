import { IonAvatar, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonSplitPane, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { analytics, archiveOutline, archiveSharp, bookmarkOutline, call, extensionPuzzle, heartOutline, heartSharp, home, logoGithub, logoLinkedin, logoStackoverflow, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, person, ribbon, school, sunny, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import './Menu.css';

const nombre = "";

const linksArray = [
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

const appPages = [
  {
    label : {
      'EN'  : 'Profile',
      'ES'  : 'Perfil'
    },
    id    : 'option_presentacion',
    icon  : person,
  },
  {
    label : {
      'EN': 'Formation',
      'ES': 'Formación'
    },
    id    : 'option_formacion',
    icon  : school,
  },
  {
    label : {
      'EN': 'Experience',
      'ES': 'Experiencia'
    },
    id    : 'option_experiencia',
    icon  : analytics,
  },
  {
    label : {
      'EN': 'Skills',
      'ES': 'Habilidades'
    },
    id    : 'option_habilidades',
    icon  : extensionPuzzle,
  },
  {
    label : {
      'EN': 'Certificates',
      'ES': 'Certificados'
    },
    id    : 'option_certificados',
    icon  : ribbon,
  },
  {
    label : {
      'EN': 'Contact',
      'ES': 'Contacto'
    },
    id    : 'option_contacto',
    icon  : call,
  }
];


const MenuComponent = ({ contentId="" }) => {

  const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma
  const darkThemeReducer:boolean  = useSelector( ( state:any ) => { return state.darkThemeRedux} );            // Reducer de tema

  const dispatch = useDispatch();

  const [ valorTemaOscuro, setValorTemaOscuro ] = useState( darkThemeReducer );

  useEffect(() => {
    
    document.body.classList.toggle( 'dark', valorTemaOscuro );

    const accion = {      // Preparar action para el reducer
      type                : "CHANGE_THEME", 
      payload             : valorTemaOscuro
    };

    dispatch( accion );                                                   // Ejecutar action

  }, [ valorTemaOscuro ])
  


  function desplazar( id:string ){
    
    const element = document.getElementById( id );

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }
    
  }

  return (
  
    <IonMenu contentId={contentId} side='start' >

      <IonContent color="light">

        <div>
          <IonAvatar style={{ margin: "auto", width: "64px", height: "64px" }}>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>

        <IonItem className='ion-text-center' color="light" lines="none">
          <IonLabel>Nombre</IonLabel>
        </IonItem>

        <div className='ion-text-center'>
          {
            linksArray.map( (item, index) => {
              
              return (
                <IonChip color="primary" outline onClick={ () => window.open( item.url , '_blank', 'noopener,noreferrer' ) }>
                  <IonIcon icon={item.icon} style={{  margin: "0px" }} />
                </IonChip>
              );
            } )
          }

        </div>


        {
          appPages.map((appPage, index) => {

            let option = languageReducer == "ES" ? appPage.label.ES : appPage.label.EN;
            
            return (
                <IonItem key={index} lines="none" detail={false} button color="light" onClick={() => desplazar( appPage.id ) }>
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{ option }</IonLabel>
                </IonItem>
            );
          })
        }

        <IonItem lines="none" detail={false} color="light">
          <IonIcon slot="start" icon={ ( valorTemaOscuro )? moon : sunny } />
          <IonLabel>{ languageReducer == "ES" ? "Tema Oscuro" : "Dark Theme"}</IonLabel>
          <IonToggle color="secondary" checked={valorTemaOscuro} onIonChange={ ( event:any ) => setValorTemaOscuro( event.detail.checked ) } />
        </IonItem>

      </IonContent>
      
    </IonMenu>

  );
};

export default MenuComponent;
