import * as Yup from "yup";
import { Formik, Field, Form, FormikProps } from "formik";
import { useContext } from "react";
import { ProjectContext } from "../../context";
import { ACTIVE, PRIORITY, ProjectInterface } from "../../models";
import { VscSave } from "react-icons/vsc";
import dayjs from "dayjs";

function ProjectForm() {
  const { addProject, handleProjectForm } = useContext(ProjectContext);
  const today = dayjs().format('YYYY-MM-DD');

  const initialValues: ProjectInterface = {
    active: ACTIVE.ACTIVE,
    favorite: false,
    startDate: today,
    tasks: [],
    title: "",
    description: "",
    dueDate: today,
    lastUpdate: today,
    tags: [],
    member: [],
    priority: PRIORITY.LOW,
    image: "",
  };

  const newProjectSchema = Yup.object().shape({
    title: Yup.string().required("Title is required").min(8).max(20),
    description: Yup.string().min(8).max(255),
    dueDate: Yup.date(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newProjectSchema}
      onSubmit={(values, { resetForm }) => {
        const project: ProjectInterface = {
          title: values.title,
          description: values.description,
          startDate: today,
          dueDate: values.dueDate,
          lastUpdate: today,
          priority: PRIORITY.LOW,
          active: ACTIVE.ACTIVE,
          favorite: false,
          image: "",
          tasks: [],
          tags: [],
          member: [],
        };
        resetForm();
        addProject(project);
        handleProjectForm()
      }}
    >
      {({ isSubmitting }: FormikProps<ProjectInterface>) => (
        <Form>
          <Field
            type="text"
            placeholder="Enter project title"
            name="title"
            className="input-form"
            required
            autoFocus
          />
          <Field
            type="text"
            placeholder="Enter project description"
            name="description"
            className="input-form"
          />
          <Field
            type="date"
            placeholder="Enter due date"
            name="dueDate"
            className="input-form"
          />
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            <VscSave />
            Create Project
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ProjectForm;
