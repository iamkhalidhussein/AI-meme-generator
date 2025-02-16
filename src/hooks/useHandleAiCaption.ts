import { Dispatch, SetStateAction } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useHandleAiCaption = (
  setIsGenerating: Dispatch<SetStateAction<boolean>>, 
  setCaption: Dispatch<SetStateAction<string>>, 
  imageURL: string | null
) => {
    const axiosPublic = useAxiosPublic();

    const handleAICaption = async () => {
        try {
          setIsGenerating(true)
          const aiCaption = await axiosPublic.post('/generate-meme', {imageURL},)
          if(!aiCaption) return;
          console.log(aiCaption);
          setCaption(aiCaption.data.caption)
        } catch (error) {
          console.error('error while generating caption', error);
        } finally {
          setIsGenerating(false)
        }
      }
    return handleAICaption;
};

export default useHandleAiCaption;