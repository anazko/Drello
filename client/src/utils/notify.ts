
import { notification } from "antd";

export const notify = (title: string, description: string, icon?: React.ReactElement) => {
  notification.open({
    message: title,
    description: description,
    onClick: () => {
      console.log('Notification Clicked!');
    },
    icon: icon
  });
}