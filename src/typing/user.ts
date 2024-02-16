export interface CreateUserInterface {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  edad: number;
  email: string;
  fechaNac: string;
  datos: {
    calle: string;
    numero: string;
    colonia: string;
    delegacion: string;
    estado: string;
    cp: string;
    imagen: string;
  };
}

export interface UserInterface extends CreateUserInterface {
  id: number;
}

export interface BackendResponse {
  msg: string;
}
