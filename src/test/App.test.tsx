import { render, screen } from '@testing-library/react';

import App from '../App.tsx';

it('should show "Vite + React" text', () => {
  render(<App />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
