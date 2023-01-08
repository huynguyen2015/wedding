import * as React from 'react'

import { L, isGranted } from '../../lib/abpUtility'

class AppComponentBase<
  P = Record<string, never>,
  S = Record<string, never>,
  SS = any
> extends React.Component<P, S, SS> {
  L(key: string): string {
    return L(key)
  }

  isGranted(permissionName: string): boolean {
    return isGranted(permissionName)
  }
}

export default AppComponentBase
