

export interface InfoPagina {
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumblr?: string;
    equipo_trabajo?: any[];

}

export interface infoEquipo {
    frase: string;
    nombre: string;
    subtitulo: string;
    twitter: string;
    url: string;
}

export interface Producto {
    categoria: string;
    desc1: string;
    desc2: string;
    producto: string;
    resumen: string;
    subtitulo1: string;
    subtitulo2: string;
}

export interface ProductoIdx {
    categoria: string;
    cod: string;
    titulo: string;
    url: string;
}