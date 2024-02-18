export interface CreateUserInterface {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  edad: number;
  email: string;
  fechaNac: string;
  calle: string;
  numero: number;
  colonia: string;
  delegacion: string;
  estado: string;
  cp: number;
  imagen: string;
}

export interface UserInterface extends CreateUserInterface {
  id: number;
}
export interface UserListInterface {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  edad: number;
  email: string;
  fechaNac: string;
  datos: {
    calle: string;
    numero: number;
    colonia: string;
    delegacion: string;
    estado: string;
    cp: number;
    imagen: string;
  };
}
export interface BackendResponse {
  msg: string;
}
