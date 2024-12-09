import { useState } from "react";
import { TContact } from "./ContactModel";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialValues: TContact = {
    Nombre: "",
    Email: "",
    Mensaje: "",
    Telefono: "",
    Ciudad: "",
    NombreEmpresa: "",
  };

  const handleOnSubmit = async (values: typeof initialValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzwJz00G1FrVa9RLHN93RVX4hA_KrYzEfQSQqgpawIbEZgbDryqsCajelHU-85bPm6Jqg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.type === "opaque") {
        // no-cors mode doesn't give us response details
        // assume success if no error thrown
        return true;
      }
    } catch (err) {
      setError("Error al enviar el formulario. Por favor intente nuevamente.");
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  return { initialValues, handleOnSubmit, isLoading, error };
};
