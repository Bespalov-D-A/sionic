import React, { FC, ReactNode } from "react";

interface ListProps<T> {
  items: T[] | undefined;
  renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return !props.items ? (
    <div>Unknown error</div>
  ) : (
    <>{props.items.map(props.renderItem)}</>
  );
}
