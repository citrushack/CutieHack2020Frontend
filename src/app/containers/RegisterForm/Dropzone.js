import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from '@material-ui/core';
const thumb = {
  textAlign: 'center',
  boxSizing: 'border-box',
};

const thumbInner = {
  textAlign: 'center',
  marginTop: '1em',
};

function Dropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'application/pdf',
    multiple: false,
    noDrag: false,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setFiles(files);
      if (props.onChange) {
        const data = new FormData();
        data.append('files', files[0]);
        console.log(files[0]);
        props.onChange(data);
      }
    },
  });

  // const removeFile = file => () => {
  //   const newFiles = [...files];
  //   newFiles.splice(newFiles.indexOf(file), 1);
  //   setFiles(newFiles);
  // };

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Typography variant="button" display="block">
          {file.name}
        </Typography>
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files],
  );
  const rootprops = getRootProps({ className: 'btn-dropzone' });
  return (
    <div style={{ padding: 20 }}>
      <div {...rootprops}>
        <input {...getInputProps()} />
        <Typography
          variant="button"
          display="block"
          style={{ textAlign: 'center' }}
        >
          <strong>Click to upload, or drag resume here</strong>
        </Typography>
        {thumbs}
      </div>
    </div>
  );
}

export default Dropzone;
