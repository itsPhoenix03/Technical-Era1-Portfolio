import { create } from "zustand";

type VideoStoreType = {
  videos: Object[];
  setVideos: (data: Object[]) => void;
  setLoadMoreVideos: (data: Object[]) => void;
};

export const VideoStore = create<VideoStoreType>((set) => ({
  videos: [],
  setVideos: (data) => set({ videos: data }),
  setLoadMoreVideos: (data) =>
    set((state) => ({ videos: [...state.videos, ...data] })),
}));
