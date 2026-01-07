import { axiosInstance } from "../Config/axios.config";

export interface IBook {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
}

export interface IBooksResponse {
    status: string;
    code: number;
    message: string;
    results: number;
    pagination: {
        currentPage: number;
        limit: number;
        numberOfPages: number;
    };
    data: IBook[];
}

export const fetchBooks = async (): Promise<IBooksResponse> => {
    const response = await axiosInstance.get<IBooksResponse>("api/v1/books");
    return response.data;
};
