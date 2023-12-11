import React from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import supabase from '../components/supabaseClient'; // replace with your actual supabaseClient import
import '../css/UploadButton.css'; // import your button styles
import '../css/UploadTextStory.css'; // import your button styles

function UploadTextStory() {
  const { register, handleSubmit, watch } = useForm();
  const watchContent = watch('content', '');

  const onSubmit = async (data) => {
    const { data: response, error } = await supabase
      .from('stories')
      .insert([data]);
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
        <ReactQuill value={watchContent} onChange={content => register('content').onChange(content)} />
        <button className="button" type="submit">Upload Text Story</button>
      </form>
    </div>
  );
}

export default UploadTextStory;