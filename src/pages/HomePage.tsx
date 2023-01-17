import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import HeaderComponent from '../components/HeaderComponent';
import './Page.css';

const HomePage: React.FC = () => {

  return (
    <IonPage>

      <HeaderComponent titulo="Inicio"/>

      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent fullscreen>
Jeloud

      </IonContent>

    </IonPage>
  );
};

export default HomePage;
