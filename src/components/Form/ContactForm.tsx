import { TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationSchema";
import styles from "./form.module.css";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={() => console.log("enviar")}
    >
      {() => (
        <Form className={styles.container_form}>
          <TextField
            id="standard-basic"
            label="Nombre"
            name="name"
            variant="standard"
            
          />
          <TextField
            id="standard-basic"
            label="Correo electrónico"
            name="email"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Teléfono"
            name="phone"
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Mensaje"
            name="message"
            multiline
            rows={4}
            variant="standard"
          />
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
