import React from 'react'
import { transformMinutes } from '../../utils/transformMinutes'

export function TimeDisplay({ minutes }: { minutes: number }) {
  const hoursMinutesSplit = transformMinutes(Math.abs(minutes))

  return (
    <div css={{ display: 'flex', justifyContent: 'center', gap: '.5rem' }}>
      {hoursMinutesSplit[0] ? (
        <span>{`${hoursMinutesSplit[0]} ${hoursMinutesSplit[0] === 1 ? 'hour' : 'hours'}`}</span>
      ) : null}
      {hoursMinutesSplit[1] ? (
        <span>{`${hoursMinutesSplit[1]} ${hoursMinutesSplit[1] === 1 ? 'minute' : 'minutes'}`}</span>
      ) : null}
    </div>
  )
}
