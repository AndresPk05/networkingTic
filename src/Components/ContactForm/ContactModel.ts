import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type TContact = {
    Nombre: string,
    Email: string,
    Mensaje: string,
    Telefono: string,
    Ciudad: string,
    NombreEmpresa: string,
}

export type TField = {
    type: HTMLInputTypeAttribute | undefined,
    name: string | undefined,
    label?: React.ReactNode;
    value?: unknown;
    onChange?: (e: ChangeEvent) => void;
    placeholder?: string;
    multiline?: boolean;
}