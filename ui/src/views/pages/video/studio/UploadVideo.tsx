import React, { FC, useState } from "react";
import Dropzone from 'react-dropzone';
import axios from 'axios';


const UploadVideo: FC = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [filePath, setFilePath] = useState('');

    const onSubmit = async (e: any) => {
        e.preventDefault();

        try {

            const res = await axios.post('api/v1/media/post/video', {
                title: title,
                description: description,
                file_path: filePath
            });
            
            console.log(res);       

        } catch (error) {

        }

    }


    const onDrop = async (files: Array<Object|any>) => {

        const formData = new FormData();
        formData.append('media', files[0]);

        try {

            const res = await axios.post('api/v1/media/upload/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { filePath } = res.data; 
            setFilePath(filePath)           
            
        } catch (error) {
            
        }

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                            </div>
                        )}
                    </Dropzone>
                    
                    <div>
                        <img src='' alt="haha" />
                    </div>
                        
                </div>


                <label>
                    Title :
                    <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} />
                </label>
                <label>
                    Description :
                    <textarea name="description" value={description} onChange={e => setDescription(e.currentTarget.value)} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </>
    );
}

export default UploadVideo;