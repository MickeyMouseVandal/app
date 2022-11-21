export class Item {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly thumb: string,
        readonly price: number
    ) {}
}