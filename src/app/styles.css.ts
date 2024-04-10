import { keyframes, style } from '@vanilla-extract/css'

export const home = style({
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  flexGrow: 1,
})

const zoom = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.5)' },
})

export const homeBackground = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  height: 1,
  width: 1,
  backgroundColor: 'white',
  borderRadius: '50%',
  boxShadow:
    '24vw 9vh 1px 0px #fff, 12vw -24vh 0px 1px #fff,\
   -45vw -22vh 0px 0px #fff, -37vw -40vh 0px 1px #fff, 29vw 19vh 0px 1px #fff,\
    4vw -8vh 0px 1px #fff, -5vw 21vh 1px 1px #fff, -27vw 26vh 1px 1px #fff,\
    -47vw -3vh 1px 1px #fff, -28vw -30vh 0px 1px #fff, -43vw -27vh 0px 1px #fff,\
    4vw 22vh 1px 1px #fff, 36vw 23vh 0px 0px #fff, -21vw 24vh 1px 1px #fff,\
    -16vw 2vh 1px 0px #fff, -16vw -6vh 0px 0px #fff, 5vw 26vh 0px 0px #fff,\
    -34vw 41vh 0px 0px #fff, 1vw 42vh 1px 1px #fff, 11vw -13vh 1px 1px #fff,\
    48vw -8vh 1px 0px #fff, 22vw -15vh 0px 0px #fff, 45vw 49vh 0px 0px #fff,\
    43vw -27vh 1px 1px #fff, 20vw -2vh 0px 0px #fff, 8vw 22vh 0px 1px #fff,\
    39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff, -40vw 45vh 0px 1px #fff,\
    11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff, 45vw -29vh 0px 1px #fff,\
    -2vw 18vh 0px 0px #fff, -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff,\
    42vw 24vh 0px 0px #fff, 45vw -48vh 1px 0px #fff, -36vw -18vh 0px 0px #fff,\
    -44vw 13vh 0px 1px #fff, 36vw 16vh 0px 1px #fff, 40vw 24vh 0px 0px #fff,\
    18vw 11vh 0px 0px #fff, -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff,\
    27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff, -15vw -28vh 0px 0px #fff,\
    -43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff, 47vw 5vh 0px 0px #fff,\
    -45vw 15vh 1px 1px #fff, -5vw -28vh 0px 1px #fff, 38vw 25vh 1px 1px #fff,\
    -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff, 49vw 13vh 0px 0px #fff,\
    48vw 10vh 0px 1px #fff, 19vw -28vh 0px 0px #fff, 4vw 7vh 0px 0px #fff,\
    21vw 21vh 1px 1px #fff, -15vw -15vh 0px 1px #fff, -6vw -42vh 1px 0px #fff,\
    -15vw 48vh 1px 1px #fff, -23vw 25vh 1px 1px #fff, -48vw 25vh 0px 1px #fff,\
    -31vw -19vh 0px 1px #fff, 4vw 37vh 1px 1px #fff, -43vw 28vh 0px 0px #fff,\
    3vw -25vh 0px 1px #fff, -39vw 14vh 0px 1px #fff, -40vw 31vh 0px 1px #fff,\
    35vw -36vh 1px 1px #fff, 16vw 49vh 0px 0px #fff, 6vw 39vh 0px 0px #fff,\
    3vw -35vh 0px 1px #fff, -44vw -2vh 1px 0px #fff, -6vw 21vh 1px 0px #fff,\
    48vw 9vh 1px 1px #fff, -43vw 30vh 1px 1px #fff, 29vw -12vh 1px 1px #fff,\
    -48vw 13vh 1px 0px #fff, -42vw 32vh 1px 1px #fff, 34vw 15vh 1px 1px #fff,\
    29vw -37vh 1px 1px #fff, 28vw 2vh 0px 0px #fff',
  animation: `${zoom} 20s alternate infinite`,
})

export const titleBox = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 30,
})

export const title = style({
  fontSize: 50,
  fontWeight: 700,
  textAlign: 'center',
  whiteSpace: 'pre-line',
})

export const playgroundWord = style({
  fontSize: 70,
  fontWeight: 700,
})