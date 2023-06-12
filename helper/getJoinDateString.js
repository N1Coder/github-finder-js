export const getJoinDateString = (dateString) => {
  const date = new Date(dateString)
  const options = { dateStyle: "medium" }
  const formatter = new Intl.DateTimeFormat(navigator.language, options)
  return `Joined at ${formatter.format(date)}`
}
