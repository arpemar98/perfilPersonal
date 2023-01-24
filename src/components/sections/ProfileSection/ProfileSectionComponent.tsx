import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonTitle } from "@ionic/react";
import { person } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getProfileImage, getGreetingImage, getGreetingText, getPrimaryImage, getPrimaryText, getSecondaryImage, getSecondaryText, getUniversityImage, getTertiaryText } from "./ProfileSectionData";

import "./ProfileSection.css";
import { useInsertionEffect, useLayoutEffect, useRef, useState } from "react";

export default function ProfileSectionComponent({ id=""}){

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
        <div className="profile_container" id={ id }>

            <div style={{ height: "100vh"  }}  className="greeting-image" >

                <IonRow className="ion-align-items-center" style={{ height: "100%"  }}>

                    <IonCol size="12" sizeMd="5" >

                        <IonAvatar style={{ margin: "auto", width: "60%", height: "60%" }}>
                            <img src={imagenUniversidad} />
                        </IonAvatar>

                    </IonCol>

                    <IonCol size="12" sizeMd="7" className="ion-align-items-center">

                        <IonCard style={{ opacity: "0.9" }}>
                            <IonCardContent className="ion-text-center">

                                <IonText color="dark" style={{ fontSize: "55px" }} >
                                    <b>{ greetingText }</b>
                                </IonText>

                            </IonCardContent>
                        </IonCard>

                    </IonCol>

                </IonRow>                
                
            </div>

            <div style={{ height: "75vh"  }}  className="primary-image" >
                
                <IonRow className="ion-align-items-center" style={{ height: "100%"  }} >

                    <IonCol size="12" sizeSm="8" sizeLg="6" >

                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "18px" }} color="dark">{ primaryText }</IonText>
                            </IonCardContent>
                        </IonCard>

                    </IonCol>

                </IonRow>

            </div>

            <div style={{ height: "75vh"  }}  className="secondary-image" >
                
                <IonRow className="ion-align-items-center" style={{ height: "40%"  }} >

                    <IonCol size="12" sizeSm="8" sizeLg="5" >
                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "18px" }} color="dark">{ secondaryText }</IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                </IonRow>

                <IonRow className="ion-align-items-center ion-justify-content-end" style={{ height: "60%"  }} >

                    <IonCol size="12" sizeSm="9" sizeLg="5" >
                        <IonCard style={{ opacity: "0.95" }}>
                            <IonCardContent className="ion-text-justify">
                                <IonText style={{ fontSize: "18px" }} color="dark">{ tertiaryText }</IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>

                </IonRow>

            </div>

        </div>
    );
}