module.exoports = () => {
  const data = {
    notifications: [],
  }
  for (let i = 0; i < 50; i++) {
    data.notifications.push({
      id: i,
      title: `notification${i}`,
    })
  }
  return data
}
