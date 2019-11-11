export function getRedirectPath({type, avatar}) {
  // user.tyoe /boss /genius
  // user.avator /bossinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}

export function getChatId(userId, targetId) {
  return [userId, targetId].sort().join('_')
}
