import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonModal, IonToolbar,IonPage, IonImg, IonChip, IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router";

export default function ModalImagenComponent( param:any ){

  const languageReducer:string = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma
  
  return (
      <IonPage>
        
        <IonHeader>
          <IonToolbar>

            <IonButtons slot="end">

              <IonChip color="dark" onClick={() => param.dismissFuncion() } outline >
                { languageReducer == "ES"? "Cerrar" : "Close" }
                <IonIcon icon={close}/>
              </IonChip>

            </IonButtons>
          
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonImg src={param.image} />

        </IonContent>

      </IonPage>
  );
}