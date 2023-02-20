import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UPloadMessage } from './styles'

const renderDragMessage = (isDragActive, isDragReject) => {
  if (!isDragActive) {
    return <UPloadMessage>Arraste os arquivos aqui ...</UPloadMessage>
  }
  if (isDragReject) {
    return <UPloadMessage type='error'>Arquvo não suportado</UPloadMessage>
  }

  return <UPloadMessage type='success'>solte os aquivos aqui</UPloadMessage>
};

export default class Upload extends Component {
  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={ () => {} }>
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
          { ...getRootProps() }
          isDragActive={ isDragActive }
          isDragReject={ isDragReject }
          >
            <input { ...getInputProps() }/>
            { renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
        
      </Dropzone>
    )
  }
}
