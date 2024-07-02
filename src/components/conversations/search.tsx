import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  register: UseFormRegister<FieldValues>
  domains?:
    | {
        name: string
        id: string
        icon: string
      }[]
    | undefined
}

//WIP: use Select from shadcn -> Refer to old projects.
const ConversationSearch = ({ register, domains }: Props) => {
  return (
    <div className="flex flex-col py-3">
      <select
        {...register('domain')}
        className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5"
      >
        <option
          disabled
          selected
        >
          Domain name
        </option>
        {domains?.map((domain) => (
          <option
            value={domain.id}
            key={domain.id}
          >
            {domain.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ConversationSearch