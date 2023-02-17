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

  transition: 0.2s ease

  ${ props => props.isDragActive && dradActive };
  ${ props => props.isDragReject && dragReject };
`

export const UPloadMessage = styled.p``;