import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonTitle } from "@ionic/react";
import { person } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getProfileImage, getGreetingImage, getGreetingText, getPrimaryImage, getPrimaryText, getSecondaryImage, getSecondaryText } from "./ProfileSectionData";

import "./ProfileSection.css";

export default function ProfileSectionComponent({ id=""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const imagenPerfil      =   getProfileImage();

    const greetingImage      = getGreetingImage();
    const greetingText       = getGreetingText( languageReducer );

    const primaryImage      = getPrimaryImage();
    const primaryText       = getPrimaryText( languageReducer );

    const secondaryImage    = getSecondaryImage();
    const secondaryText     = getSecondaryText( languageReducer );

    return (
        <div className="profile_container">

            <IonRow id={ id } >
                <IonCol size='12'>
                    <IonItem lines="none" color="light">
                        <IonIcon icon={person} slot="start"/>
                        <IonLabel>
                            <h1>
                                <b>{ languageReducer == "ES" ? "Perfil" : "Profile" }</b>
                            </h1>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow >

                <IonCol size='12'>

                    <div className="image-head-text">
                            
                        <img src={greetingImage} style={{ width: "100%" }}/>

                        <div className="text-on-image" style={{ width: "100%" }}>

                            <div className="ion-justify-content-center">

                                <div>
                                  <IonAvatar style={{ margin: "auto", width: "256px", height: "256px" }}>
                                    <img alt="Silhouette of a person's head" src={imagenPerfil} />
                                  </IonAvatar>
                                </div>

                                <br/>

                                <IonCard style={{ opacity: "0.7", width: "50%", margin: "auto" }}>
                                    <IonCardContent className="ion-text-center">

                                        <IonText color="dark" style={{ fontSize: "50px" }} >
                                            <b>{ greetingText }</b>
                                        </IonText>

                                    </IonCardContent>
                                </IonCard>

                            </div>

                        </div>

                    </div>

                    <div className="image-head-text">
                        
                        <img src={primaryImage} />

                        <div className="text-on-image">

                            <IonRow>
                                <IonCol size="12" sizeMd="8" >
                                    <IonCard style={{ opacity: "0.9" }}>
                                        <IonCardContent>
                                            <IonText style={{ fontSize: "18px" }} color="dark">{ primaryText }</IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </div>

                    </div>

                    <div className="image-head-text">
                        
                        <img src={secondaryImage} />

                        <div className="text-on-image">

                            <IonRow>
                                <IonCol size="12" sizeMd="5" >
                                    <IonCard style={{ opacity: "0.9" }}>
                                        <IonCardContent>
                                            <IonText style={{ fontSize: "18px" }} color="dark">{ secondaryText }</IonText>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </div>

                    </div>

                </IonCol>

            </IonRow>

        </div>
    );
}