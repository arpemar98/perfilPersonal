import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonTitle } from "@ionic/react";
import { bicycle, cafe, desktop, gameController, person, school } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getProfileImage, getGreetingImage, getGreetingText, getPrimaryImage, getPrimaryText, getSecondaryImage, getSecondaryText, getUniversityImage, getTertiaryText } from "./ProfileSectionData";

import "./ProfileSection.css";
import { useInsertionEffect, useLayoutEffect, useRef, useState } from "react";

export default function ProfileSectionComponent({ id="" }){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const imagenPerfil      =   getProfileImage();
    const imagenUniversidad =   getUniversityImage();

    const greetingImage      = getGreetingImage();
    const greetingText       = getGreetingText( languageReducer );

    const primaryImage      = getPrimaryImage();
    const primaryText       = getPrimaryText( languageReducer );

    const secondaryImage    = getSecondaryImage();
    const secondaryText     = getSecondaryText( languageReducer );
    const tertiaryText      = getTertiaryText( languageReducer );


    return (
        <div id={ id }>

            <div style={{ height: "100vh"  }}  className="greeting-image" >

                <IonRow className="ion-align-items-center" style={{ height: "100%"  }}>

                    <IonCol size="12" sizeMd="5" >

                        <IonAvatar style={{ margin: "auto", width: "75%", height: "75%", maxWidth: "256px" }}>
                            <img src={imagenUniversidad} />
                        </IonAvatar>

                    </IonCol>

                    <IonCol size="12" sizeMd="7" className="ion-align-items-center">

                        <IonCard style={{ opacity: "0.9" }}>
                            <IonCardContent className="ion-text-center">

                                <IonText color="dark" style={{ fontSize: "50px" }} >
                                    <b>{ greetingText } </b>
                                </IonText>

                            </IonCardContent>
                        </IonCard>

                    </IonCol>

                </IonRow>                
                
            </div>

            <div style={{ height: "75vh"  }}  className="primary-image" >
                
                <IonRow className="ion-align-items-center" style={{ height: "100%"  }} >

                    <IonCol size="12" sizeSm="8" sizeLg="6" >

                        <div style={{ fontSize: "30px" }} className="ion-text-center">
                            <IonIcon icon={school} color="light" />
                            <IonIcon icon={cafe} color="light" />
                            <IonIcon icon={gameController} color="light" />
                            <IonIcon icon={desktop} color="light" />
                            <IonIcon icon={bicycle} color="light" />
                        </div>
                        
                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "18px" }} color="dark">{ primaryText }</IonText>
                            </IonCardContent>
                        </IonCard>

                    </IonCol>

                </IonRow>

            </div>

            <div style={{ height: "80vh"  }} className="secondary-image " >
                
                <IonRow className="ion-align-items-center" style={{ height: "100%"  }} >

                    <IonCol size="12" sizeSm="5"  >
                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "17px" }} color="dark">{ secondaryText }</IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                    <IonCol size="0" sizeSm="2" ></IonCol>

                    <IonCol size="12" sizeSm="5" >
                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "14px" }} color="dark">{ tertiaryText }</IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                </IonRow>

            </div>

        </div>
    );
}