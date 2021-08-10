export class Carousel {
    constructor(
        public url: string,
        public header: string, 
        public description: string, 
        public alt: string,
        public isEditState?: boolean 
    ) {}
}