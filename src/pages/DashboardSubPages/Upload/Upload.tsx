import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { AppActionCreators } from '@state';
import { ToastType } from '@state/reducer-types';

const Upload: FC = () => {
  const Input = styled('input')({
    display: 'none',
  });
  const dispatch = useDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      AppActionCreators.addToast({
        id: Math.random().toString(),
        message: 'Uploading...',
        type: ToastType.INFO,
        // duration: null,
      })
    );
    console.log('onChangeHandler');

    console.log(event.target.files);
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target?.result);
    };
    if (event.target.files) {
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      console.log('No file selected');
    }
  };
  return (
    <div className="main-container">
      <h1>Upload your data</h1>
      <label htmlFor="contained-button-file">
        <Input
          accept=".csv, .txt"
          id="contained-button-file"
          type="file"
          onChange={(e) => onChangeHandler(e)}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};
export default Upload;
