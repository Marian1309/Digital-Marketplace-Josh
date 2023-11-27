import { type FC, useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const Title: FC = () => {
  const [text, setText] = useState('Start');

  return <button onClick={() => setText('End')}>{text}</button>;
};

test('Test title button toggle', async () => {
  render(<Title />);

  const button = screen.getByText(/Start/i);

  await userEvent.click(button);

  expect(button.textContent).toBe('End');
});
