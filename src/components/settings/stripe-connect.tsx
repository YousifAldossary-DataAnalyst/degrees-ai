
'use client'
import React from 'react'
import { Button } from '../ui/button'
// import { Loader } from '../loader'
// import { useStripe } from '@/hooks/billing/use-billing'

type StripeConnectProps = {
  connected: boolean
}

// WIP: Create Global button for other integrations. 
// Or create for each connect integration.

export const StripeConnect = ({ connected }: StripeConnectProps) => {
  
  // const { onStripeConnect, onStripeAccountPending } = useStripe()
  return (
    <Button
      disabled={true}
      // onClick={onStripeConnect}
    >
      {/* <Loader loading={onStripeAccountPending}>
        {connected ? 'Connected' : 'Connect to stripe'}
      </Loader> */}
    </Button>
  )
}
