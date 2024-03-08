"use server";

import { formatCount } from "./convertor";

const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function getStats() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${key}&part=statistics&id=${channelId}`
    );
    const data = await response.json();

    const viewCount = formatCount(data.items[0].statistics.viewCount);
    const subscriberCount = formatCount(
      data.items[0].statistics.subscriberCount
    );
    const videoCount = formatCount(data.items[0].statistics.videoCount);

    return { videoCount, viewCount, subscriberCount };
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getPlaylists() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?key=${key}&part=snippet&channelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return data.items.map((item: any) => ({
      title: item.snippet.localized.title,
      id: item.id,
    }));
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getPlaylistVideos(
  playlistId: string,
  pageToken: String | null = null
) {
  try {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=snippet%2Cstatus&maxResults=8&playlistId=${playlistId}`;

    if (pageToken) url += `&pageToken=${pageToken}`;

    const response = await await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const nextPageToken = data.nextPageToken;
    const videosList = data.items.filter(
      (video: any) => video.status && video.status.privacyStatus !== "private"
    );

    return { nextPageToken, videosList };
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getMultiplePlaylistVideos(
  playlistIds: string,
  pageToken: String | null = null
) {
  try {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=snippet%2Cstatus&maxResults=50&id=${playlistIds}`;

    if (pageToken) url += `&pageToken=${pageToken}`;

    const response = await await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const nextPageToken = data.nextPageToken;
    const videosList = data.items.filter(
      (video: any) => video.status && video.status.privacyStatus !== "private"
    );

    return { nextPageToken, videosList };
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getVideo(id: string) {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${id}&key=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    const title = data.items[0].snippet.title;
    const description = data.items[0].snippet.description;
    const likes = formatCount(data.items[0].statistics.likeCount);
    const views = formatCount(data.items[0].statistics.viewCount);

    return {
      title,
      description,
      likes,
      views,
    };
  } catch (error: any) {
    console.log(error.message);
  }
}
