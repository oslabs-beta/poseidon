import { ErrorMessage, useField } from "formik";

// input component used in forms for register
export const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);
  return (
    <div className="m-2">
      <input
        className={`${
          meta.error && meta.touched ? 'border-red-500' : ''
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs animate-pulse ml-3"
      />
    </div>
  );
};