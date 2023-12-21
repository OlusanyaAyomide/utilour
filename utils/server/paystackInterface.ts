export interface IP_NewCustomer {

    email: string;
    integration: number;
    domain: string;
    customer_code: string;
    id: number;
    identified: boolean;
    identifications: null | any; // You may replace 'any' with a more specific type if needed
    createdAt: string;
    updatedAt: string;

}
