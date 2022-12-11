import React, {FC} from 'react'
import s from './ProfilePhoto.module.css'
import photo from './../../../img/profile_photo.png'

interface ProfilePhotoProps {
	
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({}) => {
  return <div className={s.profile}>
    <div>
<img src={photo} className={s['profile-photo']} alt="" />
    </div>
<span>Лилия Лилявская</span>
  </div>
}

export default ProfilePhoto
