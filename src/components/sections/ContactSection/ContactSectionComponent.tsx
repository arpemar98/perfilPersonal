import { IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonTitle } from "@ionic/react";
import { call, logoWhatsapp, mailOutline, person } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getMail, getPhoneNumber } from "./ContactSectionData";

export default function ContactSectionComponent({ id = "" }){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux } );            // Reducer de idioma

    const mail          = getMail();
    const phoneNumber   = getPhoneNumber();

    return (
        <IonRow className="ion-justify-content-end">
        
            <IonCol size="12" sizeMd="9">

                <IonRow id={ id } >
                    <IonCol size='12'>
                        <IonItem lines="none" color="light">
                            <IonIcon icon={call} slot="start"/>
                            <IonLabel>
                                <h2>
                                { languageReducer == "ES" ? "Contacto" : "Contact" }
                                </h2>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow >

                    <IonCol size='12' >
                    
                        <IonCard>

                            <IonCardContent>
                                
                                <IonItem lines="none" button>
                                    <IonIcon icon={mailOutline} slot="start" />
                                    <IonLabel>
                                        <h1>{ languageReducer == "ES"? "Correo" : "Mail" }</h1>
                                        <p>{mail}</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem lines="none" button>
                                    <IonIcon icon={logoWhatsapp} slot="start" />
                                    <IonLabel>
                                        <h1>{ languageReducer == "ES"? "Número telefónico" : "Phone Number" }</h1>
                                        <p>{phoneNumber}</p>
                                    </IonLabel>
                                </IonItem>

                            </IonCardContent>

                        </IonCard>

                    </IonCol>
                    
                </IonRow>
                
            </IonCol>

        </IonRow>
    );
}