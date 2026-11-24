type Payload = {
  text: string
  channel?: string
  username?: string
  icon_emoji?: string
}

/**
 * Create Slack webhook request parameters.
 *
 * Generates parameters object for making POST requests to Slack webhooks.
 * Includes proper headers and data formatting.
 *
 * @param url - Slack webhook URL
 * @param data - Payload with text, channel, username, icon_emoji
 * @returns Request parameters object
 *
 * @example
 * makeSlackParams('https://hooks.slack.com/...', {
 *   text: 'Hello, Slack!',
 *   username: 'Bot',
 *   icon_emoji: ':robot_face:'
 * })
 * // => { method: 'POST', url: '...', headers: {...}, data: {...} }
 */
export function makeSlackParams(url: string, data: Payload) {
  return {
    method: 'POST',
    url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data,
  } as const
}
