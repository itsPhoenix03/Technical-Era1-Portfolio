"use client";
import React, { useEffect, useState } from "react";
import { VideoStore } from "../../hooks/getVideos";
import { getPlaylistVideos } from "../../hooks/helper";
import EditCard from "./EditCard";

type EditProps = {
  playlists: { title: string; id: string }[];
};

const Edit: React.FC<EditProps> = ({ playlists }) => {
  const { videos, setVideos, setLoadMoreVideos } = VideoStore();
  const [categoryId, setCategoryId] = useState(playlists[0].id);
  const [pageToken, setPageToken] = useState(null);

  async function fetchMoreVideos() {
    const res = await getPlaylistVideos(categoryId, pageToken);
    if (res) {
      setLoadMoreVideos(res.videosList);
      setPageToken(res.nextPageToken);
    }
  }

  useEffect(() => {
    async function fetchVideos() {
      const res = await getPlaylistVideos(categoryId);
      if (res) {
        setVideos(res.videosList);
        setPageToken(res.nextPageToken);
      }
    }

    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  if (videos && playlists)
    return (
      <>
        <div className="mt-10 grid grid-cols-4 gap-4">
          <div className="mt-4 mb-6 col-span-4 flex flex-wrap md:flex-nowrap justify-start items-center gap-6">
            <span className="text-xs font-semibold text-primary/70">
              Category
            </span>
            {playlists.map((data: any) => (
              <button
                key={data.id}
                className="text-xs font-semibold text-dark/70 first-letter:uppercase"
                onClick={() => setCategoryId(data.id)}
              >
                {data.title}
              </button>
            ))}
          </div>
          {videos.map((item: any, index: number) => (
            <EditCard
              key={item.id + index}
              title={item.snippet.title}
              id={item.snippet.resourceId.videoId}
            />
          ))}
        </div>
        {pageToken && (
          <div className="w-full text-center">
            <button
              className="mt-10 px-4 py-2 border border-dark/20 bg-transparent text-dark text-xs font-base rounded-md"
              onClick={() => fetchMoreVideos()}
            >
              Load More Videos
            </button>
          </div>
        )}
      </>
    );
};

export default Edit;
