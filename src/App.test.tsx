import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the App component', () => {
    render(<App />);

    screen.getByText('Weather Web App')
  });
});