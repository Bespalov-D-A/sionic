import React, {FC} from 'react'
import {Itag} from '../../../types/types';
import s from './Tag.module.css'

interface TagProps {
  tag: Itag;
}

const Tag: FC<TagProps> = ({tag}) => {
  const style = {
    backgroundColor: tag.color
  }

return <div style={style} className={s.tag}>{tag.title}</div>
}


export default Tag
