import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text/Text'
import { CheckBox, CheckboxProps } from './CheckBox'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias. </Text>
        </div>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
