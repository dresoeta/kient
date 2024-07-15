export interface LuckyUsersWhoGotGiftSubscriptionsEvent {
  channel: {
    id: number
    user_id: number
    slug: string
    is_banned: boolean
    playback_url: string
    name_updated_at: unknown
    vod_enabled: boolean
    subscription_enabled: boolean
    can_host: boolean
  }
  usernames: string[]
  gifter_username: string
}
