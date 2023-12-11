import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import supabase from '../components/supabaseClient'; 
import '../css/UploadButton.css'; // import your button styles
import '../css/UploadTextStory.css'; // import your button styles
import { AuthContext } from '../contexts/AuthContext';

function UploadTextStory() {
  const { register, handleSubmit, watch } = useForm();
  const watchContent = watch('content', '');
  const { userId } = useContext(AuthContext);
  const uuidToInt = uuid => parseInt(uuid.replace(/-/g, '').slice(0, 15), 8);
  const onSubmit = async (data) => {
    const currentDate = new Date();
    const s_id = uuidToInt(userId);
    console.log(s_id);
    const { data: response, error } = await supabase
      .from('story_details')
      .insert([{ ...data, creation_date: currentDate }]);
    if (error) console.log('Upload error: ', error);
    else alert('Story uploaded successfully!');
  };

  return (
    <div>
      <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Story Name:
          <input {...register('s_name', { required: true })} />
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
          <input {...register('s_location', { required: true })} />
        </label>
        {/* <ReactQuill value={watchContent} onChange={content => register('text_content', content)} /> */}
        <label>
          Content:
          <input {...register('text_content', { required: true })} />
        </label>
        <button className="button" type="submit">Upload Text Story</button>
      </form>
    </div>
  );
}

export default UploadTextStory;