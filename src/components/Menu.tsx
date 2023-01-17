import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonToggle } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, home, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  title : string;
  url   : string;
  icon  : string;
}

const appPages: AppPage[] = [
  {
    title : 'Inicio',
    url   : '/home',
    icon  : home,
  },
  {
    title : 'Formación',
    url   : '/page/Outbox',
    icon  : paperPlaneOutline,
  },
  {
    title : 'Experiencia',
    url   : '/page/Favorites',
    icon  : heartOutline,
  },
  {
    title : 'Conocimiento',
    url   : '/page/Archived',
    icon  : archiveOutline,
  },
  {
    title : 'Contacto',
    url   : '/page/Trash',
    icon  : trashOutline,
  }
];


const Menu: React.FC = () => {

  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">

      <IonContent>

        <IonList id="inbox-list">

          <IonListHeader>Aristeo Pérez Martínez</IonListHeader>
          <IonNote>arpemar98@hotmail.com</IonNote>

          {
            appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false} >
                    <IonIcon slot="start" icon={appPage.icon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })
          }

          <IonMenuToggle autoHide={false}>
            <IonItem lines="none" detail={false} >
              <IonIcon slot="start" icon={moon} />
              <IonLabel>Tema</IonLabel>
              <IonToggle />
            </IonItem>
          </IonMenuToggle>

        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
