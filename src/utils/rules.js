import * as yup from 'yup'

export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  }
}

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
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
