import React from 'react';
import { testStandardProps } from '@test/utils';
import { render, screen } from '@testing-library/react';
import StatTrend from '../StatTrend';

describe('StatTrend', () => {
  testStandardProps(<StatTrend />);

  it('Should render a up trend indicator', () => {
    render(<StatTrend indicator="up">100</StatTrend>);

    expect(screen.getByText('100')).to.have.class('rs-stat-trend-up');
  });

  it('Should render a equal trend indicator', () => {
    render(<StatTrend indicator="equal">100</StatTrend>);

    expect(screen.getByText('100')).to.have.class('rs-stat-trend-equal');
  });

  it('Should render as subtle appearance', () => {
    render(<StatTrend appearance="subtle">100</StatTrend>);

    expect(screen.getByText('100')).to.have.class('rs-stat-trend-subtle');
  });
});
