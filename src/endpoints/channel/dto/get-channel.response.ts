export interface ChannelChatroom {
  id: number
  chatable_type: string
  channel_id: string
  created_at: Date
  updated_at: Date
  chat_mode_old: string
  chat_mode: string
  slow_mode: boolean
  chatable_id: number
  followers_mode: boolean
  subscribers_mode: boolean
  emotes_mode: boolean
  message_interval: number
  following_min_duration: number
}

export interface ChannelLivestream {
  id: number
  slug: string
  channel_id: number
  created_at: Date
  session_title: string
  is_live: boolean
  risk_level_id: unknown
  start_time: Date
  source: unknown
  twitch_channel: unknown
  duration: number
  language: string
  is_mature: boolean
  viewer_count: number
  thumbnail: {
    url: string
  }
  categories: Array<{
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description?: string
    deleted_at: unknown
    viewers: number
    category: {
      id: number
      name: string
      slug: string
      icon: string
    }
  }>
  tags: unknown[]
}

export interface LatestLivestreams {
  previous_livestreams: PreviousLivestreams[]
}

export interface Clips {
  clips: Clip[]
}

export interface Clip {
  id: string
  category: {
    id: number
    name: string
    slug: string
  }
  category_id: string
  channel: {
    id: number
    username: string
    slug: string
  }
  channel_id: number
  clip_url: string
  created_at: string
  creator: {
    id: number
    username: string
    slug: string
  }
  duration: number
  is_mature: boolean
  liked: boolean
  likes: number
  likes_count: number
  livestream_id: string
  privacy: string
  started_at: string
  thumbnail_url: string
  title: string
  user_id: number
  video_url: string
  view_count: number
  views: number
}
export interface GetChannelResponse {
  id: number
  user_id: number
  slug: string
  is_banned: boolean
  playback_url?: string
  vod_enabled: boolean
  subscription_enabled: boolean
  followers_count: number
  following?: boolean
  subscription?: unknown
  subscriber_badges: Array<{
    id: number
    channel_id: number
    months: number
    badge_image: {
      srcset: string
      src: string
    }
  }>
  banner_image?: {
    url: string
  }
  livestream?: ChannelLivestream
  role?: unknown
  muted: boolean
  follower_badges: unknown[]
  offline_banner_image: unknown
  verified: boolean
  recent_categories: Array<{
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description?: string
    deleted_at: unknown
    viewers: number
    banner: {
      responsive: string
      url: string
    }
    category: {
      id: number
      name: string
      slug: string
      icon: string
    }
  }>
  can_host: boolean
  user: {
    id: number
    username: string
    agreed_to_terms: true
    email_verified_at: Date
    bio?: string
    country?: string
    state?: string
    city?: string
    instagram?: string
    twitter?: string
    youtube?: string
    discord?: string
    tiktok?: string
    facebook?: string
    profile_pic?: string
  }
  chatroom: ChannelChatroom
  ascending_links?: Array<{
    id: number
    channel_id: number
    description: string
    link: string
    created_at: Date
    updated_at: Date
    order: number
    title: string
  }>
}

export interface PreviousLivestreams {
  id?: number | null | undefined
  slug?: string | null | undefined
  channel_id?: number | null | undefined
  created_at?: string | null | undefined
  session_title?: string | null | undefined
  duration?: number | null | undefined
  viewer_count?: number | null | undefined
  thumbnail?: {
    src?: string | null | undefined
    srcset?: string | null | undefined
  }
  views?: number | null | undefined
  video?: {
    id?: number | null | undefined
    live_stream_id?: number | null | undefined
    slug?: string | null | undefined
    created_at?: string | null | undefined
    updated_at?: string | null | undefined
    uuid?: string | null | undefined
    views?: number | null | undefined
    deleted_at?: string | null | undefined
  }
}
