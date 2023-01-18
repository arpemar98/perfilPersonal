import { IonCard, IonCardContent, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonTitle } from "@ionic/react";
import { school } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'

export default function FormationSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const mainText = {
        'EN'  : 'The Last of Us is a horror, action-adventure video game developed by the American company Naughty Dog and distributed by Sony Computer Entertainment for the PlayStation 3 console in 2013. The plot describes the experiences of Joel and Ellie, a couple of survivors of a pandemic in the United States that causes the mutation of human beings into cannibalistic creatures.',
        'ES'  : 'The Last of Us es un videojuego de terror y de acción y aventura desarrollado por la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola PlayStation 3 en 2013. La trama describe las vivencias de Joel y Ellie, un par de supervivientes de una pandemia en Estados Unidos que provoca la mutación de los seres humanos en criaturas caníbales.'
    };

    const colleges = [
        {
            label : {
                'EN'  : 'Escuela 1',
                'ES'  : 'Escuela 1'        
            },
            url: "",
            description : ""
        },
        {
            label : {
                'EN'  : 'Escuela 2',
                'ES'  : 'Escuela 2'        
            },
            url: "",
            description : ""
        }
    ];

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
                
                    <IonCard>

                        <IonCardContent>
                            { languageReducer == "ES" ? mainText.ES : mainText.EN }
                        </IonCardContent>

                    </IonCard>

                </IonCol>
                
            </IonRow>
        </>
    );
}