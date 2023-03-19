import { FormInput } from '../components';
import UserForm from '../components/UserForm';

const Form = () => {
  return (
    <UserForm formTitle="New User">
      <FormInput
        labelName="First name"
        inputName="first_name"
        type="text"
        id="first_name"
      />
      <FormInput
        labelName="Last name"
        inputName="last_name"
        type="text"
        id="last_name"
      />
    </UserForm>
  );
};

export default Form;
