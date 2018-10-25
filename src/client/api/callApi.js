
const prefix = (() => {
  if (typeof window !== 'undefined') {
    return '/api';
  }
  return 'http://localhost:3000/api';
})();

export default async (url, options) => {
  const response = await fetch(`${prefix}${url}`, options);
  let json;
  try {
    json = await response.json();
  } catch (e) {
    json = null;
  }
  if (!response.ok) {
    return Promise.reject(new Error({
      ok: response.ok,
      error: json,
      status: response.status,
      statusText: response.statusText,
    }));
  }
  return {
    ok: response.ok,
    response: json,
    status: response.status,
    statusText: response.statusText,
  };
};
