import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Stations from '../Stations';

afterEach(cleanup);

describe('Stations', () => {
  test('calls the toggleisStationDetailsShown and setStationId callbacks handler', () => {
    const toggleisStationDetailsShown = jest.fn();
    const getStationId = jest.fn();

    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        isStationDetailsShown={false}
        selectedStationId={1}
        toggleisStationDetailsShown={toggleisStationDetailsShown}
        getStationId={getStationId}
      ></Stations>,
    );

    fireEvent.click(screen.getByTestId('stationListDiv'));

    expect(toggleisStationDetailsShown).toHaveBeenCalledTimes(1);
    expect(getStationId).toHaveBeenCalledTimes(1);
  });

  test("doesn't open station details div if station.id !== selectedStationId", () => {
    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        isStationDetailsShown={false}
        selectedStationId={0}
      ></Stations>,
    );

    expect(screen.queryByTestId('isStationDetailsShownDiv')).toBeNull();

    // screen.debug();
  });

  test('opens station details div if station.id === selectedStationId', () => {
    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        isStationDetailsShown={false}
        selectedStationId={1}
      ></Stations>,
    );

    expect(screen.getByTestId('isStationDetailsShownDiv')).toBeInTheDocument();

    // screen.debug();
  });
});
