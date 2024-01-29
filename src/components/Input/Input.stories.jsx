import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Large = () => <Input size="large" name="large" />;
export const Medium = () => <Input size="medium" name="medium" />;
export const Small = () => <Input size="small" name="small" />;
