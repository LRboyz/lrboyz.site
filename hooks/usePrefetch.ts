import { isSPA, isSSR } from '~/constants/environment'
import { useMount, useIsomorphicLayoutEffect } from 'react-use'
const usePrefetch = (fetcher: () => Promise<any>) => {
  console.log(fetcher)
  fetcher()
  // if (isSSR) {
  //   ;() => {
  //     fetcher().catch(error => {
  //       return Promise.reject(error)
  //     })
  //   }
  // }
  // if (isSPA) {
  //   useMount(() => fetcher())
  //   return
  // }
}

export default usePrefetch
