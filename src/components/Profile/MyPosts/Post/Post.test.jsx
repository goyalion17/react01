import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Post from './Post.jsx';

describe('Post', () => {
  it('renders the message text', () => {
    render(<Post message="Hello world" likeCount={42} />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders the like count next to the heart symbol', () => {
    render(<Post message="Any" likeCount={7} />);
    expect(screen.getByText(/7\s*♥/)).toBeInTheDocument();
  });

  it('renders an image with an alt attribute', () => {
    render(<Post message="x" likeCount={0} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt');
    expect(img.getAttribute('alt')).not.toBe('');
  });
});
