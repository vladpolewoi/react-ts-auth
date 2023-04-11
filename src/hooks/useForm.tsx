import { useState, useMemo } from 'react'

type validationRule = {
  title: string
  rule: (v: string) => boolean
}
type validationError = {
  isValid: boolean
  message: string
  rules: {
    title: string
    isValid: boolean
  }[]
}
type hookProps = {
  validation?: { [key: string]: validationRule[] }
  defaultValues?: { [key: string]: string }
}

export default function useForm({ validation, defaultValues = {} }: hookProps) {
  const [values, setValues] = useState<{ [key: string]: string }>(defaultValues)
  const [errors, setErrors] = useState<{ [key: string]: validationError }>({})
  const isValid = useMemo(() => Object.values(errors).every((v) => v.isValid), [errors])

  function getFieldValidationErrors(name: string, value: string) {
    if (validation?.[name]) {
      const rules = validation[name]?.map((v) => ({
        title: v.title,
        isValid: v.rule(value),
      }))

      const firstInvalidRule = rules?.find((v) => !v.isValid)

      return {
        isValid: !firstInvalidRule,
        message: firstInvalidRule?.title || '',
        rules,
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues((v) => ({ ...v, [name]: value }))

    if (validation) {
      const error = getFieldValidationErrors(name, value)

      if (error) {
        setErrors((e) => ({ ...e, [name]: error }))
      } else {
        setErrors((e) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [name]: _, ...rest } = e
          return rest
        })
      }
    }
  }

  return {
    values,
    errors,
    isValid,
    onFormChange: onChange,
  }
}
