import { useDepartmentQuery } from '../query/departmentQuery'

const useDepartmentManagement = (keyword) => {
    const { data, isLoading } = useDepartmentQuery(keyword);

    return {
        data,
        isLoading
    }
}

export default useDepartmentManagement;