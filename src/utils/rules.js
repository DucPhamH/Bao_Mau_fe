import * as yup from 'yup'

export const schemaLogin = yup.object({
  phone: yup.string().required('Số điện thoại là bắt buộc').min(8, 'Độ dài từ 8 kí tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
})

export const schema = yup.object({
  name: yup.string().required('Tên là bắt buộc').min(4, 'Độ dài từ 4 kí tự trở lên'),
  phone: yup.string().required('Số điện thoại là bắt buộc').min(8, 'Độ dài từ 8 kí tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
})

export const employeeSchema = yup.object({
  name: yup.string().required('Tên là bắt buộc').min(4, 'Độ dài từ 4 kí tự trở lên'),
  email: yup
    .string()
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  salary: yup.number().typeError('Salary must be a number')
})

export const userSchema = yup.object({
  name: yup.string().required('Tên là bắt buộc').min(4, 'Độ dài từ 4 kí tự trở lên'),
  email: yup
    .string()
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự')
})

export const schemaChangePass = yup.object({
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  newPassword: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('newPassword')], 'Nhập lại password không khớp')
})
