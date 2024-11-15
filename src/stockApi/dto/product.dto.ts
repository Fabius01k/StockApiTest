export class CreateProductDto {
    plu: string;
    name: string;

    constructor(plu: string, name: string) {
        this.plu = plu;
        this.name = name;
    }
}