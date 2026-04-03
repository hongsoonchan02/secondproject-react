import { useDepartmentQuery } from '../query/departmentQuery'

const useDepartmentManagementHook = (keyword) => {
    const { data, isLoading } = useDepartmentQuery(keyword);

    return {
        data,
        isLoading
    }
}

export default useDepartmentManagementHook;