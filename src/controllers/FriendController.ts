const getFriends = (req: any, res: any) => {
  res.json({
    data: [
      { name: 'Kim', age: 27 },
      { name: 'Lim', age: 29 },
      { name: 'Park', age: 23 },
    ]
  })
}

function addFriend(req: any, res: any) {
  res.json({
    message: 'thank you but i have no databaseT^T',
  })
}

export {
  getFriends,
  addFriend,
}
