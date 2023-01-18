import { IonBadge, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNote, IonTitle, IonToggle, IonToolbar, } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, book, bookmarkOutline, heartOutline, heartSharp, home, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, people, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

const HeaderComponent = ( {titulo = "{headerTitle}"} ) => {
  
  return (
    <IonHeader>

      <IonToolbar color="light" >

        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>

        <IonTitle>{titulo}</IonTitle>

      </IonToolbar>

    </IonHeader>
  );
};

export default HeaderComponent;
