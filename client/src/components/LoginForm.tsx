import { Button, Form, Input } from "antd"

interface IProps {
  onSubmit: (email: string, password: string) => void
  registration: boolean
}

const LoginForm = ({onSubmit, registration}: IProps) => {

  const onFinish = (values: any) => {
    const {email, password} = values
    console.log('Login form success:', email, password);
    onSubmit(email, password)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Login form Fail:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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