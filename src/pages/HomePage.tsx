import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { add, chevronForwardCircle, globe, menu } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FavComponent from '../components/Fav/FavLanguageComponent';
import HeaderComponent from '../components/HeaderComponent';
import MenuComponent from '../components/Menu/MenuComponent';
import CertificatesSectionComponent from '../components/Sections/CertificatesSection/CertificatesSectionComponent';
import ContactSectionComponent from '../components/Sections/ContactSection/ContactSectionComponent';

import ExperienceSectionComponent from '../components/Sections/ExperienceSection/ExperienceSectionComponent';

import FormationSectionComponent from '../components/Sections/FormationSection/FormationSectionComponent';
import ProfileSectionComponent from '../components/Sections/ProfileSection/ProfileSectionComponent';
import SkillsSectionComponent from '../components/Sections/SkillsSection/SkillsSectionComponent';

import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>

      <IonSplitPane contentId='main-content' >

        <MenuComponent contentId="main-content" />

        <IonPage id="main-content">

          <IonContent className="wallpaper_container">            

              <IonFab slot="fixed" vertical="top" horizontal="start">

                <IonMenuToggle>

                  <IonFabButton color="light" >
                    <IonIcon icon={menu}></IonIcon>
                  </IonFabButton>

                </IonMenuToggle>

              </IonFab>
              

              <ProfileSectionComponent id="section_profile" />

              <FormationSectionComponent id="section_formation"/>

              <ExperienceSectionComponent id="section_experience" />

              <SkillsSectionComponent id='section_skills'/>
                        
              <CertificatesSectionComponent id='section_certificates'/>

              <ContactSectionComponent id='section_contact'/>

              <FavComponent/>        

          </IonContent>

        </IonPage>
        
      </IonSplitPane> 

    </>
  );
};

export default HomePage;
