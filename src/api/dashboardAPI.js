import axios from "axios";

const BASE_URL ="http://localhost:8080/api/dashboard";

//대시보드 전체 정보 조회
export const getDashboard = (employeeId) =>
    axios.get(`${BASE_URL}/${employeeId}`);

export const checkIn = (employeeId)=>
    axios.post(`${BASE_URL}/${employeeId}/checkin`);

export const checkOut = (employeeId) =>
    axios.put(`${BASE_URL}/${employeeId}/checkout`);