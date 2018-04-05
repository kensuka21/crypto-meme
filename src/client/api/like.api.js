const API_URL = process.env.API_URL;

export function isGifLiked(gif) {
  return fetch(`${API_URL}/api/v1/likes/gif/${gif}`)
    .then(response => {
      return response.json();
    })
    .catch(() => {
      return Promise.reject();
    });
}

export function likeCount(gif) {
  return fetch(`${API_URL}/api/v1/likes/gif/${gif}/count`)
    .then(response => {
      return response.json();
    });
}