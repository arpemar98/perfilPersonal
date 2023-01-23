import { IonAvatar, IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonTitle } from "@ionic/react";
import { person } from "ionicons/icons";
import { useSelector, useDispatch } from 'react-redux'
import { getProfileImage, getGreetingImage, getGreetingText, getPrimaryImage, getPrimaryText, getSecondaryImage, getSecondaryText } from "./ProfileSectionData";

import "./ProfileSection.css";
import { useInsertionEffect, useLayoutEffect, useRef, useState } from "react";

export default function ProfileSectionComponent({ id=""}){

    const refPrimary = useRef(null);

    const [widthPrimary, setWidthPrimary]   = useState(0);
    const [heightPrimary, setHeightPrimary] = useState(0);

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const imagenPerfil      =   getProfileImage();

    const greetingImage      = getGreetingImage();
    const greetingText       = getGreetingText( languageReducer );

    const primaryImage      = getPrimaryImage();
    const primaryText       = getPrimaryText( languageReducer );

    const secondaryImage    = getSecondaryImage();
    const secondaryText     = getSecondaryText( languageReducer );

    useLayoutEffect(() => {

        if( refPrimary != null ){
            setWidthPrimary( refPrimary?.current?.offsetWidth );
            setHeightPrimary( refPrimary.current.offsetHeight );
        }
        

      }, []);

    return (
        <div className="profile_container">

            <div id={ id } >
                <IonItem lines="none" color="light">
                    <IonIcon icon={person} slot="start"/>
                    <IonLabel>
                        <h1>
                            <b>{ languageReducer == "ES" ? "Perfil" : "Profile" }</b>
                        </h1>
                    </IonLabel>
                </IonItem>
            </div>



            <div className="image-head-text">
                            
                <img src={greetingImage} style={{ width: "100%" }}/>

                <div className="text-on-image" style={{ width: "100%" }}>

                    <div className="ion-justify-content-center">

                        <div>
                            <IonAvatar style={{ margin: "auto", width: "25%", height: "25%" }}>
                            <img alt="Silhouette of a person's head" src={imagenPerfil} />
                            </IonAvatar>
                        </div>

                        <br/>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size="12" sizeMd="8">

                                <IonCard style={{ opacity: "0.7" }}>
                                    <IonCardContent className="ion-text-center">

                                        <IonText color="dark" style={{ fontSize: "50px" }} >
                                            <b>{ greetingText }</b>
                                        </IonText>

                                    </IonCardContent>
                                </IonCard>

                            </IonCol>
                        </IonRow>

                    </div>

                </div>

            </div>



            <div className="image-head-text" ref={refPrimary}>
                
                <img src={primaryImage} />

                <div className="text-on-image" >

                    <IonRow className="ion-align-items-center" style={{ border: "solid 1px red", height: "calc( 100% -10px)" }}>

                        <IonCol size="12" sizeSm="8" sizeLg="6" >
                            <IonCard style={{ opacity: "0.9" }}>
                                <IonCardContent className="ion-text-justify">
                                    <IonText style={{ fontSize: "18px" }} color="dark">{ primaryText }</IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                    </IonRow>

                </div>

            </div>



            <div className="image-head-text">
                        
                <img src={secondaryImage} />

                <div className="text-on-image" >

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

        </div>
    );
}