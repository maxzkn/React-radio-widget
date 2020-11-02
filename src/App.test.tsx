import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fetchStations } from './API/stationsAPI';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    // screen.debug();
  });

  // this test passes even if new stations are fetched, because they need some time to be fetched and
  // displayed, and this test function doesn't wait for them (not async)
  test(`static stations list is displayed in Stations component,
        stations fetched from stationsAPI are not displayed`, () => {
    render(<App />);

    expect(screen.getAllByTestId('stationListDiv'));

    const stations = screen.getAllByTestId('stationListDiv');
    expect(stations).toHaveLength(5); // we have 5 predefined stations in stationsList

    // all stations fetched from stationsAPI are called 'NewStation#'
    expect(screen.queryByText('NewStation', { exact: false })).toBeNull();
    // screen.debug();
  });

  // please uncomment UseEffect() (lines 22 - 52) in App.tsx for this test to pass
  test('fetches new stations from stationsAPI and displays them', async () => {
    // we should wrap any code rendering and triggering updates to the components into act() calls
    act(() => {
      render(<App />);
    });

    await fetchStations();
    const newStations = await screen.findAllByText(/NewStation/);
    expect(newStations).toHaveLength(3); // we have 3 new stations in stationsAPI
    // screen.debug();
  });
});
