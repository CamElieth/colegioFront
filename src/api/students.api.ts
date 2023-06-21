
export const getstudents = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
    const pants = import.meta.env.VITE_API_URL_PANTS;
    

    const response = await fetch(`${baseUrl}/${pants}`);
    const products = await response.json();

    return products;
}