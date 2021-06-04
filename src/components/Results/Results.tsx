import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { theme } from '../../styles/theme'
import { TimeDisplay } from '../TimeDisplay/TimeDisplay'

export function Results() {
  const tripTimes = useAppSelector(state => state.calculator.tripTimes)
  const totalConsumptions = useAppSelector(state => state.calculator.totalConsumptions)

  return (
    <div
      css={{
        background: theme.colors.gradient.blue,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        '> *': {
          padding: '1rem',
        },
      }}
    >
      <div css={{ fontWeight: 600 }}>Total trip time</div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          '> :first-of-type': {
            borderRight: '1px solid white',
          },
          gap: '1rem',
        }}
      >
        {tripTimes.map((time, i) => (
          <div key={`tripTime-${i}`} css={{ flex: 1 }}>
            <TimeDisplay minutes={time} />
          </div>
        ))}
      </div>
      <div css={{ fontWeight: 600 }}>Difference in trip time</div>
      <TimeDisplay minutes={tripTimes[0] - tripTimes[1]} />
      <div css={{ fontWeight: 600 }}>Total gas used</div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          '> :first-of-type': {
            borderRight: '1px solid white',
          },
        }}
      >
        {totalConsumptions.map((consumption, i) => (
          <div key={`consumption-${i}`} css={{ flex: 1 }}>{`${consumption.toFixed(1)} litres`}</div>
        ))}
      </div>
      <div css={{ fontWeight: 600 }}>Difference in gas use</div>
      <div>{`${Math.abs(totalConsumptions[0] - totalConsumptions[1]).toFixed(1)} litres`}</div>
    </div>
  )
}
