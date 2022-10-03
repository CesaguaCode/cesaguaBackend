export default interface OrganizationPersonModel {
    id?: number;
    name: string;
    lastname: string;
    image: string;
    phone: string;
    mail: string;
    position: string;
    createAt?: Date;
    updateAt?: Date;
    createBy?: Date;
    updatedBy?: Date;
    dateleBy?: Date;
    deleted?: number;
}