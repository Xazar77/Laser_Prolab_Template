

export   const getData = () => {
    return fetch("https://test-9fef1-default-rtdb.firebaseio.com/services.json")
      .then(res => res.json())

  }