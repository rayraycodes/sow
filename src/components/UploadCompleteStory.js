import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import supabase from '../components/supabaseClient'; // replace with your actual supabaseClient import
import '../css/UploadButton.css'; // import your button styles

function UploadCompleteStory() {
  const { register, handleSubmit, setValue } = useForm();
  const [content, setContent] = useState('');

  const onSubmit = async (data) => {
    const file = data.audio[0];
    data.content = content;
    const { data: response, error } = await supabase
      .storage
      .from('complete-stories')
      .upload(file.name, file);
    if (error) console.log('Upload error: ', error);
    else alert('Story uploaded successfully!');
  };

  const handleQuillChange = (value) => {
    setContent(value);
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
        Story Type:
        <select {...register('category', { required: true })}>
          {[...Array(20).keys()].map(i => (
            <option value={i + 1} key={i + 1}>{i + 1}</option>
          ))}
        </select>
        </label>
        <label>
          Location:
          <input {...register('location', { required: true })} />
        </label>
        
        <label>
          Art File Link:
          <input {...register('text_content', { required: true })} />
        </label>
        <label>
          Audio File Link:
          <input {...register('text_content', { required: true })} />
        </label>
        <label>
          Story Content:
          <ReactQuill theme="snow" onChange={handleQuillChange} />
        </label>
        <button className="button" type="submit">Upload Complete Story</button>
      </form>
    </div>
  );
}

export default UploadCompleteStory;