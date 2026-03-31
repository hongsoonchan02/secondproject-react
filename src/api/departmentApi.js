import axiosInstance from './axiosInstance.js'

export const getDepartments = (keyword = "") => {
    return axiosInstance.get('/api/departments', { params: { keyword } });
}

export const getRecentDepartments = () => {
    return axiosInstance.get('/api/departments/recent');
}

export const createDepartment = (data) => {
    return axiosInstance.post('/api/departments', data);
}

export const updateDepartment = (id, data) => {
    return axiosInstance.patch(`/api/departments/${id}`, data);
}

export const getMemberDepartment = (id) => {
    return axiosInstance.get(`/api/departments/members/${id}`);
}

export const deleteDepartment = (id) => {
    return axiosInstance.delete(`/api/departments/${id}`);
}