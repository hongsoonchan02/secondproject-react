import axiosInstance from './axiosInstance.js'

export const getDepartments = async (keyword = "") => {
    const response = await axiosInstance.get('/api/departments', { params: { keyword } });

    return response.data;
}

export const getRecentDepartments = async () => {
    const response = await axiosInstance.get('/api/departments/recent');

    return response.data;
}

export const createDepartment = async (data) => {
    const response =  await axiosInstance.post('/api/departments', data);

    return response.data;
}

export const updateDepartment = async (id, data) => {
    const response = await axiosInstance.patch(`/api/departments/${id}`, data);

    return response.data;
}

export const getMemberDepartment = async (id) => {
    const response =  await axiosInstance.get(`/api/departments/members/${id}`);

    return response.data;
}

export const deleteDepartment = async (id) => {
    const response = await axiosInstance.delete(`/api/departments/${id}`);

    return response.data;
}

export const getDepartmentDetail = async (id) => {
    const response = await axiosInstance.get(`/api/departments/${id}`);

    return response.data;
}