import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="267" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="80" />
    <rect x="2" y="418" rx="0" ry="0" width="90" height="27" />
    <rect x="125" y="411" rx="10" ry="10" width="150" height="44" />
    <circle cx="136" cy="125" r="125" />
  </ContentLoader>
);

export default SkeletonLoader;
