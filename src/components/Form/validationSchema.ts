import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('Requerido'),
  email: Yup.string().email('Formato de email no valido').required('Requerido'),
  phone: Yup.string()
    .max(15, 'El telefono debe tener maximo 15 caracteres')
    .required('Requerido'),
  message: Yup.string().min(5, 'El mensaje debe tener al menos 5 caracteres').required('Requerido'),
});