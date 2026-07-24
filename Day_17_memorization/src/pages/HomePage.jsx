import React from 'react'

const HomePage = React.memo(({user}) => {
    console.log("Home Page Rendering..")
  return (
    <div>
        <h1>Home page</h1>
    </div>
  )
})

export default HomePage