import { IonBadge, IonCard, IonCardContent, IonChip, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonNote, IonRow, IonText, IonTitle } from "@ionic/react";
import { business, calendarClear, call, globe, library, location, logoBitbucket, logoCss3, logoHtml5, logoJavascript, logoLaravel, logoSlack, man, school, server } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux'

import { getExperienceArray } from './ExperienceSectionData';

export default function ExperienceSectionComponent({ id = ""}){

    const languageReducer:string    = useSelector( ( state:any ) => { return state.languageRedux} );            // Reducer de idioma

    const experienceArray = getExperienceArray( languageReducer );

    return (
        <>
            <IonRow id={ id } >
                <IonCol size='12'>
                    <IonItem lines="none" color="light">
                        <IonIcon icon={school} slot="start"/>
                        <IonLabel>
                            <h2>
                            { languageReducer == "ES" ? "Experiencia" : "Experience" }
                            </h2>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow >

                <IonCol size='12' >

                    {
                        experienceArray.map( ( item, index ) => {

                            return(
                                <IonCard key={index}>

                                    <IonCardContent>

                                        <IonItem lines="none">
                                            <IonIcon icon={business} slot="start" />
                                            <IonLabel className="ion-text-wrap">
                                                
                                                <h2>
                                                    <IonText>
                                                        { item.title }
                                                    </IonText>
                                                    <IonText color="primary">
                                                        <b> { item.place }</b>
                                                    </IonText>
                                                </h2>

                                                <p>
                                                    <IonIcon icon={calendarClear} /> { item.duration }
                                                </p>

                                                <p>
                                                    <IonIcon icon={location} /> { item.location }
                                                </p>

                                                <p>{ item.description }</p>

                                                <div>
                                                    <IonChip color="secondary" outline onClick={ () => window.open( item.url , '_blank', 'noopener,noreferrer' ) }>
                                                        <IonIcon icon={globe} /> 
                                                        <IonLabel>
                                                            { languageReducer == "ES" ? "Ver sitio" : "Website" }
                                                        </IonLabel>
                                                    </IonChip>
                                                </div>

                                                <div>
                                                    {

                                                        item.contacts.map( ( itemContact, index ) => {
                                                            return (
                                                                <IonItem key={index} color="light" >
                                                                    <IonIcon icon={man} slot="start"/>
                                                                    <IonLabel className="ion-text-wrap">
                                                                        <h2><b>{itemContact.name}</b></h2>
                                                                        <h4>{itemContact.position}</h4>
                                                                        <p>Email: <a title="mail" href={ "mailto: " + itemContact.mail } >{itemContact.mail}</a></p>

                                                                        {
                                                                            ( 'phone' in itemContact ) ? (
                                                                                <p>Tel: <a title="tel" href={ "tel: " + itemContact.phone } >{itemContact.phone}</a></p>
                                                                            ) : null
                                                                        }
                                                                        
                                                                    </IonLabel>
                                                                </IonItem>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <br/>

                                                <div>
                                                    {

                                                        item.tools.map( ( item, index ) => {
                                                            return (
                                                                <IonBadge key={index} style={{ backgroundColor : item.color? item.color : "" }} title={item.label} >
                                                                    {
                                                                        item.icon? <IonIcon icon={ item.icon }/> : null
                                                                    }
                                                                    <IonText>{item.label}</IonText>
                                                                </IonBadge>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </IonLabel>

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