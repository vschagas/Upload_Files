import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar'
import { Container, FileInfo, Preview } from './styles'
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

const FileList = ({ files }) => (
  <Container>
    { files.map(uploadedFile => (
      <li>
        <FileInfo>
          <Preview src={ uploadedFile.preview }/>
          <div>
            <strong>{ uploadedFile.name }</strong>
            <span>
              { uploadedFile.readableSize } <button onClick={ () => {} }>Excluir</button>
            </span>
          </div>
        </FileInfo>
        <div>
          { !uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar 
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#715961' }
                }}
                strokeWidth={ 10 }
                percentage={ 60 }
              />
          )}

          { uploadedFile.url && (
            <a 
              href="#"
              target='_blank'
              rel='noopener noreferrer'
            >
              <MdLink style={{ marginRigth: 8 }} size={ 24 } color='#222' />
            </a>
          )}

          { uploadedFile.uploaded &&  <MdCheckCircle size={ 24 } color='#78e5d5'/> }
          { uploadedFile.error && <MdError size={ 24 } color='e57878'/> }
        </div>
      </li>
    ))}
  </Container>
)

export default FileList