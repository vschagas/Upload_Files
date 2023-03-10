import styled, { css } from 'styled-components'

const dradActive = css`
  border-color: #78e5d5;
`

const dragReject = css`
  border-color: #e57878;
`

export const DropContainer = styled.div.attrs({
  className: "dropZone"
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${ props => props.isDragActive && dradActive };
  ${ props => props.isDragReject && dragReject };
`

const messageColor = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5'
}

export const UPloadMessage = styled.p`
  display: flex;
  color: ${ props => messageColor[props.type || 'default'] };
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;