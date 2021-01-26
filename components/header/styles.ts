import { css } from '@emotion/react'

const srOnly = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const container = css`
  min-height: 100vh;
  padding: 1rem 0;
  display: grid;
  place-items: center;
`

const title = css`
  font-size: 4rem;
  text-align: center;
`

export { container, title }
