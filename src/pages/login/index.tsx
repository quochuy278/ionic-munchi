import {
  IonButtons,
  IonButton,
  IonPage,
  IonToolbar,
  IonIcon,
  IonText,
  IonHeader,
  IonBackButton,
  IonTitle,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/react";
import CenterWrapper from "../../containers/centerWrapper";
import { logoApple, mail } from "ionicons/icons";
import styles from "./login.module.css";

const LoginPage: React.FC = () => {
  return (
    <CenterWrapper>
      <div className={styles.titleCtn}>
        <div className={styles.titleContent1}>Get started with</div>
        <div className={styles.titleContent2}>munchi</div>
        <div>🤩</div>
      </div>

      <IonToolbar>
        <IonButtons className={styles.buttonsContainer} collapse={true}>
          <IonButton className={styles.signInBtn} fill="clear">
            <IonIcon
              icon={logoApple}
              slot="icon-only"
              className={styles.iconBtn}
            />
            <IonText className={styles.btnText}>Continue with Apple</IonText>
          </IonButton>
          <IonButton className={styles.signInBtn} fill="clear">
            <IonIcon
              src="/assets/icons/facebook.svg"
              className={styles.iconBtn}
              slot="icon-only"
            />
            <IonText className={styles.btnText}>Continue with Facebook</IonText>
          </IonButton>
          <IonButton className={styles.signInBtn} fill="clear" slot="icon-only">
            <IonIcon
              src="/assets/icons/google.svg"
              className={styles.iconBtn}
            />
            <IonText className={styles.btnText}>Continue with Google</IonText>
          </IonButton>
          <IonButton className={styles.signInBtn} fill="clear">
            <IonIcon icon={mail} className={styles.iconBtn} slot="icon-only" />
            <IonText className={styles.btnText}>Continue with Email</IonText>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonList>
        <div className={styles.divider}>
          <IonItemDivider/>
         <div className={styles.dividerCtn}>Or</div>
          <IonItemDivider />
        </div>
      </IonList>
    </CenterWrapper>
  );
};
export default LoginPage;
