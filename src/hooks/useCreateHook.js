import { useState } from "react"
import { useCreateDepartmentMutation, useRecentDepartmentQuery } from "../query/departmentQuery"
import { dateSub } from "../utils/createUtil";
import { useNavigate } from "react-router-dom";



const useDepartmentCreateHook = () => {

    const createMutation = useCreateDepartmentMutation();
    const { data, isLoading } = useRecentDepartmentQuery();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        dpCode: "",
        dpName: "",
        dpManagerEmpId: "",
        dpDetail: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        createMutation.mutate(formData, {
            onSuccess: navigate('/department-management')
        });
        
    }

    const getDaysAge = (createdDate) => {
        const now = new Date()
        const created = new Date(createdDate)
        const days = dateSub(now, created);
        return `${days}일 전`;

    } 

    return {
        handleChange,
        handleSubmit,
        data,
        getDaysAge
    }
}

export default useDepartmentCreateHook;

