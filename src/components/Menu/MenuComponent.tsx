import { IonAvatar, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonSplitPane, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { analytics, archiveOutline, archiveSharp, bookmarkOutline, call, extensionPuzzle, heartOutline, heartSharp, home, logoGithub, logoLinkedin, logoStackoverflow, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, person, ribbon, school, sunny, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import './Menu.css';
import { getProfileImg, getProfileLinksArray, getProfileName, getSectionsArray } from './MenuData';



const MenuComponent = ({ contentId="" }) => {

  const languageReducer   :any      = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de sesión
  const darkThemeReducer  :boolean  = useSelector( ( state:any ) => { return state.darkThemeRedux} );            // Reducer de tema

  const dispatch = useDispatch();

  //INIT**************************** CONFIGURACIÓN ****************************

    const imagenPerfil    = getProfileImg();

    const nombrePerfil    = getProfileName();

    const linksArray      = getProfileLinksArray();

    const seccionesArray  = getSectionsArray( languageReducer );

//END **************************** CONFIGURACIÓN ****************************

  const [ valorTemaOscuro, setValorTemaOscuro ] = useState( darkThemeReducer );





  useEffect(() => {
    
    document.body.classList.toggle( 'dark', valorTemaOscuro );

    const accion = {      // Preparar action para el reducer
      type                : "CHANGE_THEME", 
      payload             : valorTemaOscuro
    };

    dispatch( accion );                                                   // Ejecutar action

  }, [ valorTemaOscuro ])
  




  /**
   * Función para moverse hacia algún elemento por el id
   * @param id {id del elemento}
   */
  function scrollTo( id:string ){
    
    const element = document.getElementById( id );

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }
    
  }

  return (
  
    <IonMenu contentId={contentId} side='start' style={{ border: "none"}} >

      <IonContent color="light">

        <div>
          <IonAvatar style={{ margin: "auto", width: "128px", height: "128px" }}>
            <img alt="Silhouette of a person's head" src={imagenPerfil} />
          </IonAvatar>
        </div>

        <IonItem className='ion-text-center' color="light" lines="none">
          <IonLabel className='ion-text-wrap ion-text-center'>
            <IonText>
              <b>{nombrePerfil}</b>
            </IonText>
          </IonLabel>
        </IonItem>

        <div className='ion-text-center'>
          {
            linksArray.map( (item, index) => {
              
              return (
                <IonChip key={index} color="primary" outline onClick={ () => window.open( item.url , '_blank', 'noopener,noreferrer' ) } title={ item.label }>
                  <IonIcon icon={item.icon} style={{  margin: "0px" }} />
                </IonChip>
              );
            } )
          }

        </div>


        {
          seccionesArray.map( ( item, index ) => {
            
            return (
                <IonItem key={index} lines="none" detail={false} button color="light" onClick={() => scrollTo( item.id ) }>
                  <IonIcon slot="start" icon={item.icon} />
                  <IonLabel>{ item.label }</IonLabel>
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
