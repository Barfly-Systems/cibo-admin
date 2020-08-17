export interface ProductCategory{
    id?: number;
    organisation_ID: number,
    categoryName: string,
    isActive: boolean,
    isArchived?: boolean;
    createdOn: Date,
    editedOn: Date,
    backgroundImage_ID: number,
    textColour: string
}