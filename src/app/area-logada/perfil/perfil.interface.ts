//  export interface Postagem {
//     id: number;
//     NomeUsuario: string;
//     FotoUsuario: string;
//     TextoPost: string;
//     FotoPost: string;
//     DataPostagem: string;
// };

// export interface Usuario {
//     id: number;
//     Nome: string;
//     DataNascimento: string;
//     Email: string;
//     Genero: string;
//     FotoPerfil: string;
//     Cargo: string;
//     Cidade: string;
// }

export interface Info {
    Id: number,
    Nome: string,
    DataNascimento: any,
    Email: string,
    FotoPerfil: string,
    Cargo: string,
    Cidade: string,
    Postagens: [
        {
            id: number;
            NomeUsuario: string;
            FotoUsuario: any;
            TextoPost: any;
            FotoPost: any;
            DataPostagem: any;   
        }
    ]
}; 