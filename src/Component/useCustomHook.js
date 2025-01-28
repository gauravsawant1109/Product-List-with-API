import React, { useEffect, useState } from 'react'  
const useCustomHook = (urlFromComponent) => {
  const [List, setList] = useState()
  const [Loading, setLoading] = useState(true)
  const [Err, setErr] = useState(false)
  async function fetchproduct() {
    try {
      await fetch(urlFromComponent)
        .then(responce => responce.json())
        .then(data => setList(data.products))
      setLoading(false)
      setErr(false)
 
    } catch (error) {
      console.log(error);
      setErr(true)

    }
  }
  useEffect(() => {
    fetchproduct()  
  }, [])

  return { List, Loading, Err, fetchproduct }
}

export default useCustomHook