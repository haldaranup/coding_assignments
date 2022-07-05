import React from 'react'

const Home = () => {
    const data = useFetch("http://github.api/users")
  return (
    <div>
        {data && "Success"}
    </div>
  )
}

export default Home