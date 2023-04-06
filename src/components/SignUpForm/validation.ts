export default {
  name: [
    {
      title: 'Name must be less than 20 characters',
      rule: (v: string) => v.length <= 20,
    },
    {
      title: 'Name must not contain any special characters',
      rule: (v: string) => !v || /^[a-zA-Z0-9 ]+$/.test(v),
    },
    {
      title: 'Name must be at least 2 characters',
      rule: (v: string) => !v || v.length >= 2,
    },
    {
      title: 'Name must not contain any spaces',
      rule: (v: string) => !v || !/\s/.test(v),
    },
  ],
  email: [
    {
      title: 'Email is required',
      rule: (v: string) => !!v,
    },
    {
      title: 'Invalid email address',
      rule: (v: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v),
    },
  ],
  password: [
    {
      title: 'Required',
      rule: (v: string) => !!v,
    },
    {
      title: 'At least 6 characters',
      rule: (v: string) => v.length >= 6,
    },
    {
      title: 'Less than 20 characters',
      rule: (v: string) => v.length <= 20,
    },
    {
      title: 'At least one lowercase letter',
      rule: (v: string) => /[a-z]/.test(v),
    },
    {
      title: 'At least one uppercase letter',
      rule: (v: string) => /[A-Z]/.test(v),
    },
    {
      title: 'At least one number',
      rule: (v: string) => /[0-9]/.test(v),
    },
    {
      title: 'At least one special character',
      rule: (v: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v),
    },
    {
      title: 'No spaces',
      rule: (v: string) => !/\s/.test(v),
    },
  ],
}
