 class Book{
    constructor(
        public id:string,
        public bookName:string,
        public description:string,
        public originalPrice: number,
        public price:number,
        public stock: number,
        public rating:number){}
}
export default Book
