import { IonCard, IonCardContent, IonChip, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonThumbnail, IonTitle } from "@ionic/react";
import { calendar, calendarClear, call, globe, library, location, school } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'
import { getFormationArray } from "./FormationSectionData";

export default function FormationSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const formationArray = getFormationArray( languageReducer );

    

    return (
        <>
            <IonRow id={ id } >
                <IonCol size='12'>
                    <IonItem lines="none" color="light">
                        <IonIcon icon={school} slot="start"/>
                        <IonLabel>
                            <h2>
                            { languageReducer == "ES" ? "Formación" : "Formation" }
                            </h2>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow >

                <IonCol size='12' >

                    {
                        formationArray.map( ( item, index ) => {

                            return(
                                <IonCard key={index}>

                                    <IonCardContent>

                                        <IonItem lines="none">
                                            <IonIcon icon={library} slot="start" />
                                            <IonLabel className="ion-text-wrap">

                                                <h2>
                                                    <IonText>
                                                        { item.title }
                                                    </IonText>
                                                    <IonText color="primary">
                                                        <b> { item.school }</b>
                                                    </IonText>
                                                </h2>

                                                <p>
                                                    <IonIcon icon={calendarClear} /> { item.duration }
                                                </p>

                                                <p>
                                                    <IonIcon icon={location} /> { item.place }
                                                </p>                                                

                                            </IonLabel>

                                            <IonThumbnail slot="end">
                                                <img alt="Silhouette of mountains" src={ item.image } />
                                            </IonThumbnail>

                                        </IonItem>
                                        
                                    </IonCardContent>

                                </IonCard>
                            );

                        })
                    }

                </IonCol>
                
            </IonRow>
        </>
    );
}