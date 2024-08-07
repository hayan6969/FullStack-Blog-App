import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'  

export default function RTE({name,control,label,defaultValue=''}) {
  return (
    <div className='w-full'>
        {label && <label  className='inline-block mb-1 pl-1'>{label}</label>}
        <Controller
        name={name || 'Content'}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            apiKey='gewto09nc53qql531nebvyzdy8pvaq34tdeu633m2o09x4l8'
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "charmap",
                    "preview",
                    "anchor",
                    "image",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                    "codesample",
                ],
                toolbar:
                    "codesample | undo redo | blocks | image |bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}  //works with the onChange of field
            />
        )}

        
        />

    </div>
  )
}

