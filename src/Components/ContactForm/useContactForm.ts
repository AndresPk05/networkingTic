import { TContact } from "./ContactModel"

export const useContactForm = () => {
    const initialValues: TContact = {
        Nombre: "",
        Email: "",
        Mensaje: "",
        Telefono: "",
        Ciudad: "",
        NombreEmpresa: "",
    }

    const handleOnSubmit = (values: typeof initialValues) => {
        console.log(values);
      };
    return { initialValues,handleOnSubmit };
}