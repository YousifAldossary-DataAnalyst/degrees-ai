
import { CheckCircle2Icon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { StripeConnect } from '../settings/stripe-connect'

type IntegrationModalBodyProps = {
  type: string
  connections: {
    [key in 'stripe']: boolean
  }
}

// WIP: For each integration you want. Add a case for instagram, meta, others.
// Just add the API for integration
// Learn more add buttons to send the user to the target webstie.
// the mapping is ready just move it inside create a ts file with information needed pass it here.
// the same way you need stripeId to store the information in the db. You too need to store their other social media ids in the db.
export const IntegrationModalBody = ({
  type,
  connections,
}: IntegrationModalBodyProps) => {
  switch (type) {
    case 'stripe':
      return (
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Stripe would like to access</h2>
          {[
            'Payment and bank information',
            'Products and services you sell',
            'Business and tax information',
            'Create and update Products',
          ].map((item, key) => (
            <div
              key={key}
              className="flex gap-2 items-center pl-3"
            >
              <CheckCircle2Icon />
              <p>{item}</p>
            </div>
          ))}
          <div className="flex justify-between mt-10">
            <Button variant="outline">Learn more</Button>
            <StripeConnect connected={connections[type]} />
          </div>
        </div>
      )
    default:
      return <></>
  }
}
