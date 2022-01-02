import { useEffect } from 'react'
import useCallbackRef from '@jdthornton/usecallbackref';

export default function useTimeout(
  callback: () => void,
  delay: number | null
) {

  const savedCallback = useCallbackRef(callback)

  useEffect(() => {
    if(delay !== null){
      const id = setTimeout(() => savedCallback.current && savedCallback.current(), delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
