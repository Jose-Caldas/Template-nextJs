import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('shoud render header', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: 'Template NextJs' })
    ).toBeInTheDocument()
  })
})
