import { useState } from "react"
import { useCreateDepartmentMutation, useRecentDepartmentQuery } from "../query/departmentQuery"



const useDepartmentCreateHook = () => {

    const createMutation = useCreateDepartmentMutation();
    const { data, isLoading } = useRecentDepartmentQuery();

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
        createMutation.mutate(formData);
    }

    const getDaysAge = (createdDate) => {
        const now = new Date()
        const created = new Date(createdDate)
        const dateSub = Math.floor((now - created) / (1000 * 60 * 60 * 24))
        return `${dateSub}일 전`;

    } 

    return {
        handleChange,
        handleSubmit,
        data,
        getDaysAge
    }
}

export default useDepartmentCreateHook;

