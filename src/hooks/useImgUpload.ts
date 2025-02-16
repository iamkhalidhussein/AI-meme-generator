import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useImgUpload = (setUploadingImg, setImageURL) => {
    const axiosPublic = useAxiosPublic();

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        const formData = new FormData();
        formData.append("image", file);

        try {
          setUploadingImg(true);
          const response = await axiosPublic.post('/imageupload', formData);
          console.log(response);
          setImageURL(response.data.imageURL);
        } catch (error) {
          console.error('error while uploading',error);
        } finally {
          setUploadingImg(false);
        }
      }
    return handleImageUpload;
};

export default useImgUpload;