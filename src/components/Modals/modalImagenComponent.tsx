import { IonContent, IonItem, IonLabel, IonModal } from "@ionic/react";

export default function ModalImagenComponent( modal:any, imagen:string ){

    return (
        <IonModal isOpen={modal} >

          <IonContent>

            <p className="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>

            <IonItem>
              <IonLabel className="ion-text-wrap" >
                Do you accept the terms and conditions?
              </IonLabel>
            </IonItem>

          </IonContent>

        </IonModal>
    );
}