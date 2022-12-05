import {Wrapper} from './PodcastDetailHeader.styles';

export const PodcastDetailHeader = ({tracksData}) => {
  return (
    <Wrapper>
      <h2>Episodes: {tracksData?.results[0]?.trackCount}</h2>
    </Wrapper>
  );
};
