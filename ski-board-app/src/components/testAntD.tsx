import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

const TestAntD = () => {
  return (
    <div>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
};

export default TestAntD;
