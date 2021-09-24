import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"

interface IProps {
  onSubmit: (email: string, password: string) => void
  registration: boolean
}

const LoginForm = ({onSubmit, registration}: IProps) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log();
    
    //onSubmit(email, password)
  }

  const onFinish = (values: any) => {
    const {email, password} = values
    console.log('Success:', email, password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={() => {}}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Введите email!' }, 
          { type: "email", message: 'Введите корректный email' }
        ]}
        // validateTrigger="onSubmit"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: 'Введите пароль!' }, 
          { min: 3, message: "Слишком короткий, минимум 3 символа" }
        ]}
        // validateTrigger="onSubmit"
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit">
          { registration ? "Зарегистрироваться" : "Войти" }
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm