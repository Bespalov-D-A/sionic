import React, { FC, useState } from "react";
import {Itag} from "../../../../types/types";
import List from "../../../Global/List";
import Tag from "../../../Global/Tag/Tag";
import s from "./Tags.module.css";

interface PropertiesProps {}

const Properties: FC<PropertiesProps> = ({}) => {
  const [ tags, setTags ] = useState<Itag[]>([])

  const superTags = [
  {
    id: 2,
    color: 'red',
    title: 'Игрушка'
  },

  {
    id: 1,
    color: 'red',
    title: 'Мартышка'
  },
{
   id: 3,
    color: 'red',
    title: 'Мартышка'
  },
{
    id: 4,
    color: 'red',
    title: 'Мартышка'
  },
{
    id: 5,
    color: 'red',
    title: 'Мартышка'
  },
{
    id: 6,
    color: 'red',
    title: 'Мартышка'
  },

  ]

  return (
    <div className={s.tags}>
      <List
        items={superTags}
        renderItem={(tag: Itag) => <Tag callback={console.log} variation={tag} key={tag.id} />}
      />
    </div>
  );
};

export default Properties;

