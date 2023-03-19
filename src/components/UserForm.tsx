import React, { PropsWithChildren, ReactNode, useRef } from 'react';

interface Props {
  formTitle: string;
  children: ReactNode[] | ReactNode;
}

const UserForm = ({ formTitle = 'Form Title', children }: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form) {
      const formData = new FormData(form.current ?? undefined);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  };
  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      className="px-4 my-32 max-w-3xl mx-auto space-y-6"
      autoComplete="off"
    >
      <div>
        <h1 className="text-3xl font-semibold">{formTitle}</h1>
      </div>
      {children}
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
