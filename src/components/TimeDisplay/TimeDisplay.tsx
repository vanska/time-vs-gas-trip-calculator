import React from 'react'
import { totalsNumber } from '../../styles/text'
import { transformMinutes } from '../../utils/transformMinutes'

const TIME_WORDS = {
  hour: ['h', 'hour'],
  hours: ['h', 'hours'],
  minute: ['min', 'minute'],
  minutes: ['min', 'minutes'],
}

export function TimeDisplay({ minutes, display }: { minutes: number; display: 'short' | 'long' }) {
  const hoursMinutesSplit = transformMinutes(minutes)

  const wordIndex = display === 'short' ? 0 : 1

  return (
    <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '.5rem' }}>
      {hoursMinutesSplit[0] ? (
        <>
          <span css={totalsNumber}>{hoursMinutesSplit[0]}</span>
          <span>{`${hoursMinutesSplit[0] === 1 ? TIME_WORDS.hour[wordIndex] : TIME_WORDS.hours[wordIndex]}`}</span>
        </>
      ) : null}
      {hoursMinutesSplit[1] ? (
        <>
          <span css={totalsNumber}>{hoursMinutesSplit[1]}</span>
          <span>{`${hoursMinutesSplit[1] === 1 ? TIME_WORDS.minute[wordIndex] : TIME_WORDS.minutes[wordIndex]}`}</span>
        </>
      ) : null}
    </div>
  )
}
