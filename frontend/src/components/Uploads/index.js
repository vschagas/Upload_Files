import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import { DropContainer, UPloadMessage } from './styles'

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
            Solte seus Arquivos aqui
          </DropContainer>
        )}
        
      </Dropzone>
    )
  }
}
