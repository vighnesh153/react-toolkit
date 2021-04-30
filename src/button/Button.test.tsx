import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('should render a default button with text', async () => {
    render(<Button rvLabel="My Button" />);

    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('should render MuiButton with variant as "text" if link attribute is true', async () => {
    render(<Button rvLabel="My Button" rvIsLink />);

    const parentNode = screen.getByText('My Button').parentNode as HTMLElement;
    expect(parentNode).toHaveClass('MuiButton-text');
  });
});
