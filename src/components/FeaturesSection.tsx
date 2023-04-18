import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMicrophone, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 350px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.secondaryColor};
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const featuresData = [
  {
    title: 'Context-Aware Conversations',
    description: 'Keep your conversations organized and easy to navigate with context-aware chats.',
    icon: faComment,
  },
  {
    title: 'Voice & Text Support',
    description: 'Interact with the Voice Assistant using either text or speech for a seamless experience.',
    icon: faMicrophone,
  },
  {
    title: 'Collaborative Chats',
    description: 'Invite friends or colleagues to participate in group conversations with ease.',
    icon: faUserFriends,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer>
      {featuresData.map((feature, index) => (
        <FeatureCard key={index}>
          <FeatureIcon>
            <FontAwesomeIcon icon={feature.icon} />
          </FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
};

export default FeaturesSection;
