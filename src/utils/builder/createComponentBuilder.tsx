import React, { ReactNode } from 'react';

import { ComponentBuilder, ComponentProps } from '../types/component';

const createComponentBuilder = (): ComponentBuilder => {
  let _id = '';
  let _text = '';
  let _children: ReactNode[] = [];
  let _classname = '';

  const builder: ComponentBuilder = {
    setId(id: string): ComponentBuilder {
      _id = id;
      return this;
    },
    setText(text: string): ComponentBuilder {
      _text = text;
      return this;
    },
    setClassName(className: string): ComponentBuilder {
      _classname = className;
      return this;
    },
    addChild(child: React.ReactNode): ComponentBuilder {
      if (_children) _children.push(child);
      return this;
    },
    build(): React.FunctionComponent<ComponentProps> {
      const Component: React.FunctionComponent<ComponentProps> = ({
        id,
        className,
        children,
      }): JSX.Element => {
        return (
          <div id={id} className={className}>
            {children}
          </div>
        );
      };

      Component.defaultProps = {
        id: _id,
        text: _text,
        className: _classname,
        children: _children,
      };

      return Component;
    },
  };

  return builder;
};

export { createComponentBuilder };
