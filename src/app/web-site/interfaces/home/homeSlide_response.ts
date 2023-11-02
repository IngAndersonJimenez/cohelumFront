export type ResponseHomeSlide = {
    homeSlide: HomeSlide[];
}
export type ResponseHomeSlide2 = [
    homeSlide: HomeSlide[]
]

export type HomeSlide = {
    nombre: string;
    id: number;
    image: string;
    descripcion: string;
}