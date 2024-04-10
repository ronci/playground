import { style } from '@vanilla-extract/css'

export const headerBox = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  height: 80,
})

export const header = style({
  padding: 30,
  width: '100%',
  maxWidth: 1080,
})

export const title = style({
  fontSize: 30,
  fontWeight: 700,
  color: 'white',
})
