import React from 'react'
import { css } from '@emotion/react'
import { useAppSelector } from '../../redux/hooks'
import { theme } from '../../styles/theme'
import { TimeDisplay } from '../TimeDisplay/TimeDisplay'
import { flexColumnBase } from '../../styles/flex'
import { totalsNumber } from '../../styles/text'
import { pxApp } from '../../styles/padding'

const resultCard = css(flexColumnBase(1), {
  background: theme.colors.gradient.blue,
  color: 'white',
  padding: '1rem',
  borderRadius: theme.border.radius,
  'div:first-child': {
    fontWeight: 500,
  },
})

export function Results() {
  const tripTimes = useAppSelector(state => state.calculator.tripTimes)
  const totalConsumptions = useAppSelector(state => state.calculator.totalConsumptions)

  const tripTimeDifference = Math.abs(tripTimes[0] - tripTimes[1])
  const consumptionDifference = Math.abs(totalConsumptions[0] - totalConsumptions[1])

  return (
    <div
      css={css(pxApp, flexColumnBase(1), {
        textAlign: 'center',
      })}
    >
      <div css={{ fontWeight: 600 }}>Total trip time</div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        {tripTimes.map((time, i) => (
          <div key={`tripTime-${i}`} css={{ flex: 1, order: i }}>
            <TimeDisplay display="short" minutes={time} />
          </div>
        ))}
        <div css={{ order: 1.5, color: theme.colors.blue, fontWeight: 500, fontSize: '1.125rem' }}>vs</div>
      </div>
      <div css={resultCard}>
        <div>Difference in trip time</div>
        {tripTimeDifference ? (
          <TimeDisplay display="long" minutes={tripTimes[0] - tripTimes[1]} />
        ) : (
          <div css={totalsNumber}>-</div>
        )}
      </div>
      <div css={{ fontWeight: 600 }}>Total gas used</div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {totalConsumptions.map((consumption, i) => (
          <div
            key={`consumption-${i}`}
            css={{ display: 'flex', justifyContent: 'center', flex: 1, order: i, alignItems: 'baseline', gap: '.5rem' }}
          >
            <span css={totalsNumber}>{consumption.toFixed(1)}</span>
            <span>L</span>
          </div>
        ))}
        <div css={{ order: 1.5, color: theme.colors.blue, fontWeight: 500, fontSize: '1.125rem' }}>vs</div>
      </div>
      <div css={resultCard}>
        <div>Difference in gas use</div>
        {consumptionDifference ? (
          <div css={{ display: 'flex', gap: '.5rem', justifyContent: 'center', alignItems: 'baseline' }}>
            <span css={totalsNumber}>{consumptionDifference.toFixed(1)}</span>
            <span>litres</span>
          </div>
        ) : (
          <div css={totalsNumber}>-</div>
        )}
      </div>
    </div>
  )
}
