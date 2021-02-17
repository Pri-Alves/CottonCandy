import { Usuario } from '../Shared/interfaces/usuario.interface';

export interface LoginResponse {
    usuario: Usuario;
    token: string;
}