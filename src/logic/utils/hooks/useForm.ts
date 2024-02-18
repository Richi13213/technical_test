import { useState, useEffect, useRef, useCallback } from "react";
import { useFormik } from "formik";
import Webcam from "react-webcam";
import { handleSubmit } from "@handlers/form/submit";
import { INITIAL_VALUES } from "@constants/form";
import { userSchema } from "@schemas/form";
import type { CreateUserInterface } from "@typing/user";
import type { FormProps } from "@typing/props";

const useForm = ({ user, close }: FormProps) => {
  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [createResponse, setCreateResponse] = useState<boolean>(false);
  const [showCreateResponse, setShowCreateResponse] = useState<boolean>(false);
  const [showWebcam, setShowWebcam] = useState<boolean>(false);
  const [initialValues, setInitialValues] =
    useState<CreateUserInterface>(INITIAL_VALUES);
  const webcamRef = useRef<Webcam>(null);

  const handleWebcam = () => {
    setShowWebcam(!showWebcam);
  };

  useEffect(() => {
    if (user) {
      const { id, ...userData } = user;
      setInitialValues(userData);
      setId(id);
    }
  }, [user]);

  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await handleSubmit(values);
        setTimeout(() => {
          setLoading(false);
          setShowCreateResponse(true);
          setCreateResponse(response);
          setTimeout(() => {
            setShowCreateResponse(false);
            if (close) close();
          }, 3000);
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          setLoading(false);
          setCreateResponse(false);
          setShowCreateResponse(true);
          setTimeout(() => {
            setShowCreateResponse(false);
            if (close) close();
          }, 3000);
          console.log(error);
        }, 2000);
      }
    },
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    formik.setFieldValue("imagen", imageSrc ?? null);
    setShowWebcam(!showWebcam);
  }, [webcamRef]);

  return {
    formik,
    webcamRef,
    capture,
    showWebcam,
    handleWebcam,
    loading,
    createResponse,
    showCreateResponse,
  };
};
export default useForm;
