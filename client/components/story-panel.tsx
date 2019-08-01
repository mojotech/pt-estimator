import React from 'react';
import styled from 'styled-components';
import PointEstimate from '~components/point-estimate/point-estimate';
import { Story as StoryType } from '~components/projects/types';
import Story from '~components/story/story';

const PanelWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

interface PanelProps {
  data: StoryType;
}

const StoryPanel = ({ data }: PanelProps) => (
  <PanelWrapper>
    <Story data={data} />
    <PointEstimate ptEst={data.estimate} />
  </PanelWrapper>
);

export default StoryPanel;
