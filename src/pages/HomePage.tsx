import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { add, globe } from 'ionicons/icons';
import { useParams } from 'react-router';
import FavComponent from '../components/Fav/FavLanguageComponent';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/Menu/MenuComponent';

import ExperienceSectionComponent from '../components/Sections/ExperienceSection/ExperienceSectionComponent';

import FormationSectionComponent from '../components/Sections/FormationSection/FormationSectionComponent';
import ProfileSectionComponent from '../components/Sections/ProfileSectionComponent';
import SkillsSectionComponent from '../components/Sections/SkillsSection/SkillsSectionComponent';

import './HomePage.css';

const HomePage: React.FC = () => {

  return (
    <IonSplitPane contentId='main-content' >

      <MenuComponent contentId="main-content" />

      <IonPage id="main-content">

        <HeaderComponent titulo="Inicio"/>

        <IonContent >

          <IonGrid>

            <ProfileSectionComponent id="section_profile" />

            <FormationSectionComponent id="section_formation"/>

            <ExperienceSectionComponent id="section_experience" />

            <SkillsSectionComponent id='section_skills'/>
          
            
            

            <IonRow id='section_certificates'>

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

            <IonRow id='section_contact'>

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
