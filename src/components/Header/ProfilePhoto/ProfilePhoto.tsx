import React, {FC} from 'react'
import s from './ProfilePhoto.module.css'
import photo from './../../../img/profile_photo.png'

interface ProfilePhotoProps {
	
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({}) => {
  return <div className={s['profile-photo']}>
<img src={photo} alt="" />
  </div>
}

export default ProfilePhoto
