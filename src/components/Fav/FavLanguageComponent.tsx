import { IonBadge, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNote, IonTitle, IonToggle, IonToolbar, } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, book, bookmarkOutline, globe, heartOutline, heartSharp, home, language, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, people, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

const FavLanguageComponent = ( ) => {

  const languageReducer:any     = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de sesión
  const dispatch                = useDispatch();

  function changeLanguage( language:string ){

    const accion = {      // Preparar action para el reducer
      type                : "CHANGE_LANGUAGE", 
      payload             : language
    };

    dispatch( accion );                                                   // Ejecutar action
  
  }

  
  return (
    <IonFab slot="fixed" horizontal="end" vertical="bottom">
            
      <IonFabButton color={ languageReducer == "ES"? "success" : "primary" } >
        <IonIcon icon={language}></IonIcon>
      </IonFabButton>

      <IonFabList side='top'>

        <IonFabButton color="success" title='Español' onClick={ () => changeLanguage( "ES" ) }>
          <img src="assets\icon\mexico-icon.png" style={{ padding: "5px"}}/>
        </IonFabButton>

        <IonFabButton color="primary" title='English' onClick={ () => changeLanguage( "EN" ) }>
          <img src="assets\icon\english-icon.png" style={{ padding: "5px"}} />
        </IonFabButton>
        
      </IonFabList>

    </IonFab>
  );
};

export default FavLanguageComponent;
