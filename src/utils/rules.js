import * as yup from 'yup'

export const schemaLogin = yup.object({
  phone: yup.string().required('電話番号は必須です').min(8, '単語の長さは 8 文字です'),
  password: yup
    .string()
    .required('パスワードが必要')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です')
})

export const schema = yup.object({
  name: yup.string().required('名前は必須です').min(4, '4文字以上'),
  phone: yup.string().required('電話番号は必須です').min(8, '単語の長さは 8 文字です'),
  password: yup
    .string()
    .required('パスワードが必要')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です'),
  confirm_password: yup
    .string()
    .required('パスワードの再入力が必要です')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です')
    .oneOf([yup.ref('password')], '再入力したパスワードが一致しません')
})

export const employeeSchema = yup.object({
  name: yup.string().required('名前は必須です').min(4, '4文字以上'),
  email: yup
    .string()
    .email('電子メールの無効化')
    .min(5, '長さは 5 ～ 160 文字です')
    .max(160, '長さは 5 ～ 160 文字です'),
  salary: yup.number().typeError('Salary must be a number')
})

export const userSchema = yup.object({
  name: yup.string().required('名前は必須です').min(4, '4文字以上'),
  email: yup
    .string()
    .email('電子メールの無効化')
    .min(5, '長さは 5 ～ 160 文字です')
    .max(160, '長さは 5 ～ 160 文字です')
})

export const schemaChangePass = yup.object({
  password: yup
    .string()
    .required('パスワードが必要')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です'),
  newPassword: yup
    .string()
    .required('パスワードが必要')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です'),
  confirm_password: yup
    .string()
    .required('パスワードの再入力が必要です')
    .min(6, '長さは 6 ～ 160 文字です')
    .max(160, '長さは 6 ～ 160 文字です')
    .oneOf([yup.ref('newPassword')], '再入力したパスワードが一致しません')
})
