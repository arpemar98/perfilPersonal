import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { add, globe } from 'ionicons/icons';
import { useParams } from 'react-router';
import FavComponent from '../components/FavComponent';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/Menu/MenuComponent';
import FormationSectionComponent from '../components/sections/FormationSectionComponent';
import ProfileSectionComponent from '../components/sections/ProfileSectionComponent';
import './HomePage.css';

const HomePage: React.FC = () => {

  return (
    <IonSplitPane contentId='main-content'>

      <MenuComponent contentId="main-content" />

      <IonPage id="main-content">

        <HeaderComponent titulo="Inicio"/>

        <IonContent >

          <IonGrid>

            <ProfileSectionComponent id="option_presentacion" />

            <FormationSectionComponent id="option_formation"></FormationSectionComponent>

            

            <IonRow id='option_experiencia'>

              <IonCol size='12' >
                
                <IonCard>

                  <IonCardHeader>
                    <h3>Experiencia</h3>
                  </IonCardHeader>

                  <IonCardContent>
                    Formación---
                  </IonCardContent>

                </IonCard>

              </IonCol>
              
            </IonRow>

            <IonRow id='option_habilidades'>

              <IonCol size='12' >
                
                <IonCard>

                  <IonCardHeader>
                    <h3>Habilidades</h3>
                  </IonCardHeader>

                  <IonCardContent>
                    Formación---
                  </IonCardContent>

                </IonCard>

              </IonCol>
              
            </IonRow>

            <IonRow id='option_certificados'>

              <IonCol size='12' >
                
                <IonCard>

                  <IonCardHeader>
                    <h3>Certificados</h3>
                  </IonCardHeader>

                  <IonCardContent>
                    Formación---
                  </IonCardContent>

                </IonCard>

              </IonCol>
              
            </IonRow>

            <IonRow id='option_contacto'>

              <IonCol size='12' >
                
                <IonCard>

                  <IonCardHeader>
                    <h3>Contacto</h3>
                  </IonCardHeader>

                  <IonCardContent>
                    Formación---
                  </IonCardContent>

                </IonCard>

              </IonCol>
              
            </IonRow>

          </IonGrid>

          <FavComponent/>
        

        </IonContent>

      </IonPage>
      
    </IonSplitPane>
  );
};

export default HomePage;
