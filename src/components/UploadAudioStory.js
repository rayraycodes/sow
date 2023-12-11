import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import supabase from '../components/supabaseClient'; // replace with your actual supabaseClient import
import '../css/UploadButton.css'; // import your button styles

function UploadAudioStory() {
  const { register, handleSubmit } = useForm();
  const [record, setRecord] = useState(false);


  const onSubmit = async (data) => {
    const file = data.audio[0];
    const { data: response, error } = await supabase
      .storage
      .from('audio-stories')
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
        <select {...register('category', { required: true })}>
          {[...Array(20).keys()].map(i => (
            <option value={i + 1} key={i + 1}>{i + 1}</option>
          ))}
        </select>
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
          Art File Link:
          <input {...register('text_content', { required: true })} />
        </label>
        <button className="button" type="submit">Upload Audio Story</button>
      </form>
    </div>
  );
}

export default UploadAudioStory;