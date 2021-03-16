export function handler (err) {
  let error = err

  // eslint-disable-next-line no-prototype-builtins
  if (err.response && err.response.data.hasOwnProperty('message')) { error = err.response.data } else if (!err.hasOwnProperty('message')) error = err.toJSON()

  return new Error(error.message)
}
