import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeesSlice';
import { useNavigate } from 'react-router-dom';
import ImageUpload from './ImageUpload'; // Assuming ImageUpload is in the same directory

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);

  const onFinish = (values) => {
    const id = Math.floor(Math.random() * 1000); // Generate a random ID
    dispatch(addEmployee({ ...values, id, image: imageList }));
    navigate('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleImageChange = (fileList) => {
    const serializedFileList = fileList.map(file => ({
      uid: file.uid,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate ? file.lastModifiedDate.toISOString() : null,
    }));

    console.log('Serialized fileList:', serializedFileList); // Debugging log

    // Update imageList state
    setImageList(serializedFileList);
  };

  return (
    <Form
      name="add-employee"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: 'auto' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* Image Upload Component */}
      <Form.Item label="Upload Image" name="image" rules={[{ required: true, message: 'Please upload an image!' }]}>
        <ImageUpload onChange={handleImageChange} defaultFileList={imageList} />
      </Form.Item>

      <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input first name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input last name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEmployeeForm;
