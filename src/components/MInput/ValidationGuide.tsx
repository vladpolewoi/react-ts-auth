import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md'

type ValidationGuideProps = {
  rules: {
    title: string
    isValid: boolean
  }[]
}

export default function ValidationGuide({ rules }: ValidationGuideProps) {
  return (
    <ul className="px-3">
      {rules?.map((rule) => (
        <li key={rule.title} className="my-2 flex items-center text-sm text-secondary">
          {rule.isValid ? (
            <>
              <MdOutlineRadioButtonChecked className="h-4 w-4 fill-emerald-400" />
              <span className="ml-2 whitespace-nowrap text-gray-300 line-through">
                {rule.title}
              </span>
            </>
          ) : (
            <>
              <MdOutlineRadioButtonUnchecked className="h-4 w-4 fill-red-400" />
              <span className="ml-2 whitespace-nowrap">{rule.title}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
