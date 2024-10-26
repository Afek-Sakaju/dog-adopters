import type { ComponentType, ReactNode } from 'react';
import { TbEraser as CleanResetIcon } from 'react-icons/tb';
import React from 'react';

import Icon from '../Icon';

export default {
    title: 'base-components/Icon',
    parameters: {
        controls: {
            exclude: /^(icon)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '100px',
                    margin: '0 auto',
                    padding: '3em',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                    borderRadius: '10px',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Icon,
};

const Template = (args: object): ReactNode => (
    <Icon icon={<CleanResetIcon />} {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {
  tooltipText:{
    control: 'text',
    defaultValue: 'Icon Tooltip',
  },
  paddingLeft:{
    control: 'text',
    defaultValue: '1px',
  },
  paddingRight:{
    control: 'text',
    defaultValue: '1px',
  },
};