type Payload = {
  text: string
  channel?: string
  username?: string
  icon_emoji?: string
}

export function makeSlackParams(url: string, data: Payload) {
  return {
    method: 'POST',
    url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data,
  } as const
}
