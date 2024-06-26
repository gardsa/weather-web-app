import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Temperature } from '.';

describe('Temperature', () => {
  it('should display the temperature value with the correct unit', () => {
    render(<Temperature temperature={26} unit="celsius" />)

    screen.getByText((_, element) => element?.textContent === '26°C');
  }
  )
  it('should display the aria label text', () => {
    render(<Temperature temperature={26} unit="celsius" />)

    screen.getByLabelText('26 degrees celsius');
  })
})