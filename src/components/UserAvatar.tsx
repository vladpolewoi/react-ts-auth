import { User } from '@supabase/supabase-js'
import {MText} from '@/components'

type UserAvatarProps = {
  user: User
}

export default function UserAvatar({user}: UserAvatarProps) {
  return (
    <div className="flex items-center">
      <img src={user.user_metadata.avatar_url} alt="avatar" className="rounded-full h-12 w-12" />
      <MText type="paragraph" className="ml-2">{user.user_metadata.full_name}</MText>
    </div>
  )
}
