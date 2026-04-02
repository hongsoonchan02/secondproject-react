import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getDepartments, getRecentDepartments, createDepartment, getMemberDepartment, updateDepartment, deleteDepartment, getDepartmentDetail } from '../api/departmentApi.js'

export const useDepartmentQuery = (keyword) => {
    return useQuery({
        queryKey: ['departments', keyword],
        queryFn: () => getDepartments(keyword)
    })
}

export const useRecentDepartmentQuery = () => {
    return useQuery({
        queryKey: ['recentDepartments'],
        queryFn: () => getRecentDepartments()
    })
}

export const useDepartmentMemberQuery = (id) => {
    return useQuery({
        queryKey: ['departmentMember', id],
        queryFn: () => getMemberDepartment(id),
        enabled: !!id
    })
}

export const useCreateDepartmentMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => createDepartment(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] })
        }
    })
}

export const useUpdateDepartmentMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, data }) => updateDepartment(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] })
        }
    })
}

export const useDeleteDepartmentMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id) => deleteDepartment(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] })
        }
    })
}

export const useDetailDepartmentQuery = (id) => {
    return useQuery({
        queryKey: ['department', id],
        queryFn: () => getDepartmentDetail(id)
    })
}