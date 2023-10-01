import ContactForm from "./ContactForm";
import styles from './form.module.css'

const Form = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container_formsection}>
        <div className={styles.text_form}>
          <p>
            ¡Estamos a un clic de distancia! Contáctanos y crearemos algo
            increíble juntos!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Form;
