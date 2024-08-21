export interface FormDefaultProps {
  formModel: {
    form: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
    }>;
  };
}
