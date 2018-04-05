const API_URL = process.env.API_URL;

export function isGifLiked(gif) {
  return fetch(`${API_URL}/api/v1/likes/gif/${gif}`)
    .then((response) => {
      return response.json()
        .then(data => {
          if (data) {
            return Promise.resolve(true);
          } else {
            return Promise.resolve(false);
          }
        });
    })
    .catch(() => {
      return Promise.resolve(false);
    });
}

export function likeCount(gif) {
  return fetch(`${API_URL}/api/v1/likes/gif/${gif}/count`)
    .then(response => {
      return response.json();
    });
}