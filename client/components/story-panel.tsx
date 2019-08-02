import React from 'react';
import styled from 'styled-components';
import PointEstimate from '~components/point-estimate/point-estimate';
import { Story as StoryType } from '~components/projects/types';
import Story from '~components/story/story';

const PanelWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
`;

interface PanelProps {
  data: StoryType;
}

const StoryPanel = ({ data }: PanelProps) => (
  <PanelWrapper>
    <Story data={data} />
    <PointEstimate ptEst={3} />
  </PanelWrapper>
);

export default StoryPanel;
