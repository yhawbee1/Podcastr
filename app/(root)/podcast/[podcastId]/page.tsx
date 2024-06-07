import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div>
      <h1 className="text-20 font-bold text-white-1">
        PodcastDetails for {params.podcastId}
      </h1>
    </div>
  );
};

export default PodcastDetails;
