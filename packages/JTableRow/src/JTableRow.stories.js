import { storiesOf } from '@storybook/vue'
import JTableRow from './JTableRow'

storiesOf('JTableRow', module)
  .add('with 2 items', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))