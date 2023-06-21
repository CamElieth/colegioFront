
export const getStudents = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
    const pants = import.meta.env.VITE_API_URL_PANTS;
    

    const response = await fetch(`${baseUrl}/${pants}`);
    const students = await response.json();

    return students;
}

export const getStudentsShirts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    

    const response = await fetch(`${baseUrl}/shirt`);
    const students = await response.json();

    return students;
}