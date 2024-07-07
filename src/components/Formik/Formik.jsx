import { Form, Formik } from "formik";

const FormikForm = () => {
    const initialValues = {
        name: '',
        number: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        number: Yup.string().required('Required')
    });

    const onSubmit = (values, { resetForm }) => {
        console.log('Form data', values);
        resetForm();
    };

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
  
            <div>
              <label htmlFor="number">Number</label>
              <Field type="text" id="number" name="number" />
              <ErrorMessage name="number" component="div" />
            </div>
  
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>


    )
}

export default FormikForm