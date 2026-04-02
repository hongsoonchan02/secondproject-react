import { useEffect, useState } from "react";
import { useUpdateDepartmentMutation, useDetailDepartmentQuery, useDepartmentMemberQuery, useDeleteDepartmentMutation } from "../query/departmentQuery"
import { useParams, useNavigate } from "react-router-dom";



const useDepartmentUpdateHook = () => {

     const { dpNum } = useParams();
     const editMutation = useUpdateDepartmentMutation();
     const { data, isLoading } = useDetailDepartmentQuery(dpNum);
     const { data: memberData, isLoading: memberIsLoading } = useDepartmentMemberQuery(dpNum);
     const deleteMutation = useDeleteDepartmentMutation();
     const navigate = useNavigate();

     
     const [formData, setFormData] = useState({
          dpCode: "",
          dpName: "",
          dpManagerEmpId: "",
          dpManagerName: "",
          dpDetail: ""
     });

     useEffect(() => {
          if (data) {
               setFormData({
                    dpCode: data.dpCode,
                    dpName: data.dpName,
                    dpManagerEmpId: data.dpManagerEmpId,
                    dpManagerName: data.dpManagerName,
                    dpDetail: data.dpDetail
               })
          }
     }, [data])

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value
          });
     }

     const handleSumit = () => {
          editMutation.mutate({ id: dpNum, data: formData });
     }

     const handleDelete = () => {
          deleteMutation.mutate(dpNum, {
               onSuccess: () => {
                    navigate('/department-management')
               }
          });
     }



     return {
          handleChange,
          handleSumit,
          handleDelete,
          formData,
          memberData
     }
}

export default useDepartmentUpdateHook;