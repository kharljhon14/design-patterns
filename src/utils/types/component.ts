import React, { ReactNode } from 'react';

export interface ComponentProps {
  id?: string;
  text?: string;
  className?: string;
  children?: ReactNode;
}

export interface ComponentBuilder {
  setId(id: string): ComponentBuilder;
  setText(text: string): ComponentBuilder;
  addChild(child: ReactNode): ComponentBuilder;
  setClassName(className: string): ComponentBuilder;
  build(): React.FunctionComponent<ComponentProps>;
}
