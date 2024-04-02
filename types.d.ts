type NextImage = {
    src: string,
    height: number,
    width: number,
    blurDataURL?: string,
    blurHeight?: number,
    blurWidth?: number,
}

type Customer = {
    id: number,
    image: NextImage,
    comment: string,
    name: string,
    rating: number
}

type GalleryImage = {
    id: number,
    image: NextImage,
}