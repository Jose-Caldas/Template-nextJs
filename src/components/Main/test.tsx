import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('should render the heading correctly', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: 'Template NextJs' })
    ).toBeInTheDocument()
  })
})
