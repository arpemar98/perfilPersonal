import { IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonNote, IonRow, IonThumbnail, IonTitle } from "@ionic/react";
import { person, ribbon } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getCertificatesArray } from "./CertificatesSectionData";

export default function CertificatesSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const formationArray = getCertificatesArray( languageReducer );

    return (
        <IonRow className="ion-justify-content-end">
        
            <IonCol size="12" sizeMd="9">

                <IonRow id={ id } >
                    <IonCol size='12'>
                        <IonItem lines="none" color="light">
                            <IonIcon icon={ribbon} slot="start"/>
                            <IonLabel>
                                <h2>
                                { languageReducer == "ES" ? "Certificados" : "Certificates" }
                                </h2>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow >

                {
                        formationArray.map( ( item, index ) => {

                            return(

                                <IonCol size='12' sizeMd="6" sizeLg="4" key={index}>

                                    <IonCard key={index}>

                                        <IonCardContent>
                                            
                                            <div>
                                                <IonThumbnail style={{ margin: "auto" }} >
                                                    <img src={ item.image } />
                                                </IonThumbnail>
                                            </div>

                                            <div className="ion-text-center">
                                                <IonNote>{ item.label }</IonNote>
                                            </div>
                                            
                                        </IonCardContent>

                                    </IonCard>

                                </IonCol>
                            );

                        })
                    }                
                </IonRow>
                
            </IonCol>

        </IonRow>
    );
}