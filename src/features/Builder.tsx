import { FormInput, UserForm } from '../components';
import { createComponentBuilder } from '../utils/builder/createComponentBuilder';

const Builder = () => {
  const componentBuilder = createComponentBuilder();
  const anotherComponentBuilder = createComponentBuilder();

  const FormInputs = componentBuilder
    .addChild(
      <FormInput
        key="address"
        labelName="Address"
        inputName="address"
        type="text"
        id="address"
      />,
    )
    .addChild(
      <FormInput
        key="position"
        labelName="Position"
        inputName="position"
        type="text"
        id="position"
      />,
    )
    .addChild(
      <FormInput
        width="w-1/4"
        key="salary"
        labelName="Salary"
        inputName="salary"
        type="number"
        id="salary"
      />,
    )
    .setClassName('space-y-6')
    .setId('addresss-form')
    .build();

  const AnotherFormInputs = anotherComponentBuilder
    .addChild(
      <FormInput
        key="name"
        labelName="First name"
        inputName="name"
        type="text"
        id="name"
      />,
    )
    .addChild(
      <FormInput
        key="last_name"
        labelName="Last name"
        inputName="last_name"
        type="text"
        id="last_name"
      />,
    )
    .setClassName('space-y-6')
    .setId('user-form')
    .build();

  return (
    <>
      <UserForm formTitle="Company">
        <FormInputs />
      </UserForm>

      <UserForm formTitle="Personal">
        <AnotherFormInputs />
      </UserForm>
    </>
  );
};
export default Builder;
