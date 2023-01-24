import { IonButton, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonTitle, isPlatform } from "@ionic/react";
import { arrowRedo, call, logoWhatsapp, mailOutline, person } from "ionicons/icons";
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
                                
                                <IonItem lines="none" >
                                    <IonIcon icon={mailOutline} slot="start" />
                                    <IonLabel className="ion-text-wrap">
                                        <h1>{ languageReducer == "ES"? "Correo" : "Mail" }</h1>
                                        <p>{mail}</p>
                                    </IonLabel>

                                    {
                                        isPlatform("mobile")? (
                                            <IonButton size="default" slot="end" href={ "mailto:" + mail } color="secondary" >
                                                <IonIcon icon={arrowRedo} />
                                            </IonButton>
                                        ) : null
                                    }

                                </IonItem>

                                <IonItem lines="none" >
                                    <IonIcon icon={logoWhatsapp} slot="start" />
                                    <IonLabel className="ion-text-wrap">
                                        <h1>{ languageReducer == "ES"? "Número telefónico" : "Phone Number" }</h1>
                                        <p>{phoneNumber}</p>
                                    </IonLabel>

                                    {
                                        isPlatform("mobile")? (
                                            <IonButton size="default" slot="end" href={ "tel:" + phoneNumber } color="secondary" >
                                                <IonIcon icon={arrowRedo} />
                                            </IonButton>
                                        ) : null
                                    }

                                </IonItem>

                            </IonCardContent>

                        </IonCard>

                    </IonCol>
                    
                </IonRow>
                
            </IonCol>

        </IonRow>
    );
}