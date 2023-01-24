import { IonCard, IonCardContent, IonChip, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonNote, IonRippleEffect, IonRow, IonThumbnail, IonTitle } from "@ionic/react";
import { person, ribbon } from "ionicons/icons";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ModalImagenComponent from "../../Modals/modalImagenComponent";
import { getCertificatesArray } from "./CertificatesSectionData";

export default function CertificatesSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const formationArray = getCertificatesArray( languageReducer );

    const [ mostrarModal, setMostrarImagen ] = useState( false );

    function verModalImagen( imagen:string ){

        setMostrarImagen( true );

    }

    return (
        <>
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
                                                
                                                <div className="ion-activatable ripple-parent" onClick={ () => { verModalImagen( item.image ) }}>
                                                    <img src={ item.image } />
                                                    <IonRippleEffect />
                                                </div>

                                                <div>
                                                    <IonNote>{ item.label }</IonNote>
                                                </div>

                                                { 
                                                    item.url? (
                                                        
                                                        <div className="ion-text-center"  >
                                                            <IonChip color="success" onClick={ () => { window.open( item.url , '_blank', 'noopener,noreferrer' ) } }>
                                                                Ver online
                                                            </IonChip>
                                                        </div>
                                                        
                                                    ) : null
                                                }
                                                
                                            </IonCardContent>

                                        </IonCard>

                                    </IonCol>
                                );

                            })
                        }                
                    </IonRow>
                    
                </IonCol>

            </IonRow>

            <ModalImagenComponent image="" modal={ mostrarModal } />
        </>
    );
}