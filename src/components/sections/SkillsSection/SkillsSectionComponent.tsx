import { IonCard, IonCardContent, IonChip, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonNote, IonRow, IonText, IonThumbnail, IonTitle } from "@ionic/react";
import { calendar, calendarClear, call, extensionPuzzle, globe, library, location, school } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'
import { getSkillsArray } from "./SkillsSectionData";

export default function SkillsSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const formationArray = getSkillsArray( languageReducer );

    

    return (
        <>
            <IonRow id={ id } >
                <IonCol size='12'>
                    <IonItem lines="none" color="light">
                        <IonIcon icon={extensionPuzzle} slot="start"/>
                        <IonLabel>
                            <h2>
                            { languageReducer == "ES" ? "Habilidades" : "Skills" }
                            </h2>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow >

                {
                    formationArray.map( ( item, index ) => {

                        return(

                            <IonCol size='6' sizeMd="4" sizeLg="3" sizeXl="2" >

                                <IonCard key={index}>

                                    <IonCardContent>
                                        
                                        <div>
                                            <IonThumbnail style={{ margin: "auto" }}>
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
        </>
    );
}