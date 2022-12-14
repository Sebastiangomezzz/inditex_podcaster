import { screen, render } from '@testing-library/react';
import { TestWrapperComponentWithMemoryRouter } from '../../../../utils/test-utils/testWrapperComponent';
import { PodcastEpisodeDetailCard } from './PodcastEpisodeDetailCard';

describe('PodcastEpisodeDetailCard component tests', () => {
    const currentTrack = {
        description: 'Test Description',
        trackName: 'Test Track',
        shortDescription: 'Test Short Description',
        episodeUrl: 'Test Episode Url',
        episodeName: 'Test Episode Name'
    };
    test('should render the component', () => {
        render(<PodcastEpisodeDetailCard currentTrack={currentTrack} />, {
            wrapper: TestWrapperComponentWithMemoryRouter
        });
        screen.getByText(/test track/i);
    });
});