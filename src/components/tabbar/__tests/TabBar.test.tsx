import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import TabBar from '../TabBar';

afterEach(cleanup);

describe('TabBar', () => {
  test('shows div with currently playing station if isStationDetailsShown=true', () => {
    render(
      <TabBar
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        isStationDetailsShown={true}
        selectedStationId={1}
      ></TabBar>,
    );

    expect(screen.getByTestId('currentDiv')).toBeInTheDocument();

    // screen.debug();
  });

  test("doesn't show div with currently playing station if isStationDetailsShown=false", () => {
    render(
      <TabBar
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        isStationDetailsShown={false}
        selectedStationId={1}
      ></TabBar>,
    );

    expect(screen.queryByTestId('currentDiv')).toBeNull();

    // screen.debug();
  });
});
