// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};




// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

//request access token from petfinder
export const getAccessToken = () => {
  var clientId = "bTD0N7eDjIihKlcKmqHa3bzIe5O5ZxmUXInVN6YXqjmmWEiYrx";
  var clientSecret = "M7yzm8Hubm0dbTkHki8oVHa09SrIvvtlZaQWHsGT";
  let formData = new FormData();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", clientId);
  formData.append("client_secret", clientSecret);
  return fetch(`https://api.petfinder.com/v2/oauth2/token`, {
      method: 'POST',
      body: formData
    }
  );
};

export const searchPets = () => {
  let tokenResponse = await getAccessToken();
  const response = await tokenResponse.json();
  let accessToken = response["access_token"];

  return fetch(`https://api.petfinder.com/v2/animals?type=dog`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getAccessToken}`,
    },
  });
};
