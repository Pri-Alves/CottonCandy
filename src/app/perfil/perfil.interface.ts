 export interface Postagem {
    id: number;
    NomeUsuario: string;
    FotoUsuario: string;
    TextoPost: string;
    FotoPost: string;
    DataPostagem: string;
};

export interface Usuario {
    id: number;
    Nome: string;
    DataNascimento: string;
    Email: string;
    Genero: string;
    FotoPerfil: string;
    Cargo: string;
    Cidade: string;
}