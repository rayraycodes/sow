import React from 'react';
import { useForm } from 'react-hook-form';
import supabase from '../components/supabaseClient'; // replace with your actual supabaseClient import
import '../css/UploadTextStory.css'; // import your button styles
import '../css/UploadButton.css'; // import your button styles

function UploadArtStory() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const file = data.art[0];
    const { data: response, error } = await supabase
      .storage
      .from('art-stories')
      .upload(file.name, file);
    if (error) console.log('Upload error: ', error);
    else alert('Story uploaded successfully!');
  };

  return (
    <div>
      <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Story Name:
          <input {...register('storyName', { required: true })} />
        </label>
        <label>
          Story Type:
          <input {...register('storyType', { required: true })} />
        </label>
        <label>
          Category:
          <input {...register('category', { required: true })} />
        </label>
        <label>
          Location:
          <input {...register('location', { required: true })} />
        </label>
        <label>
          Art File:
          <input {...register('art', { required: true })} type="file" accept="image/jpeg" />
        </label>
        <button className="button" type="submit">Upload Art Story</button>
      </form>
    </div>
  );
}

export default UploadArtStory;