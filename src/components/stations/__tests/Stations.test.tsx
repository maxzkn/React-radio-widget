import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Stations from '../Stations';

afterEach(cleanup);

describe('Stations', () => {
  test('calls the toggleStationDetails and setStationId callbacks handler', () => {
    const toggleStationDetails = jest.fn();
    const getStationId = jest.fn();

    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        stationDetails={false}
        clickedStationId={1}
        toggleStationDetails={toggleStationDetails}
        getStationId={getStationId}
      ></Stations>,
    );

    fireEvent.click(screen.getByTestId('stationListDiv'));

    expect(toggleStationDetails).toHaveBeenCalledTimes(1);
    expect(getStationId).toHaveBeenCalledTimes(1);
  });

  test("doesn't open station details div if station.id !== clickedStationId", () => {
    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        stationDetails={false}
        clickedStationId={0}
      ></Stations>,
    );

    expect(screen.queryByTestId('stationDetailsDiv')).toBeNull();

    // screen.debug();
  });

  test('opens station details div if station.id === clickedStationId', () => {
    render(
      <Stations
        stationList={[{ id: 1, name: 'TestFM', frq: '99,9' }]}
        stationDetails={false}
        clickedStationId={1}
      ></Stations>,
    );

    expect(screen.getByTestId('stationDetailsDiv')).toBeInTheDocument();

    // screen.debug();
  });
});
