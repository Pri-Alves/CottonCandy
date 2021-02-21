import { Usuario } from '../Shared/interfaces/usuario.interface';

export interface LoginResponse {
    userId: Usuario['id'];
    token: string;
}