import { Button } from "../components/ui/button"
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../components/ui/file-upload"
import { HiUpload } from "react-icons/hi"
import axios from "axios";
import { useState } from "react";


export default function upload(){
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:3335/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <FileUploadRoot onFilesChange={setFiles}>
        <FileUploadTrigger asChild>
          <Button variant="outline" size="sm" onClick={handleUpload}>
            <HiUpload /> Upload file
          </Button>
        </FileUploadTrigger>
        <FileUploadList />
      </FileUploadRoot>
      <div>
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
