import { axiosInstance } from "../Config/axios.config";

export interface IContactUsData {
    name: string;
    email: string;
    message: string;
}

export interface IContactUsResponse {
    status: string;
    message: string;
}

export const createContactUs = async (data: IContactUsData): Promise<IContactUsResponse> => {
    const response = await axiosInstance.post<IContactUsResponse>("api/v1/contact-us", data);
    return response.data;
};
