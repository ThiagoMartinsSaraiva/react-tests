import { render } from '@testing-library/react'
import { Drink } from '.'

describe('Drink component', () => {
  it('should render prop', () => {
    const { container } = render(<Drink drink={{ name: 'Smirnoff', price: 0, category: 'vodka' }} />)

    expect(container.firstChild?.textContent).toBe('Smirnoff')
  })
})
