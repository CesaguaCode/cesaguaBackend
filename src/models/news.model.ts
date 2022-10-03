export default interface NewsModel{
    id?: number;
    title: string;
    description: string;
    image: string;
    thumbnail: string;
    views?: number;
    createAt?: Date;
    updatedAt?: Date;
    createdBy?: Date;
    updatedBy?: Date;
    deletedBy?: Date;
    deleted?: number;

}