import { useForm } from "@hooks";
import Webcam from "react-webcam";
import User from "@images/user.webp";
import { Input, Label, ErrorLabel, Loader } from "@atoms";
import { FormProps } from "@typing/props";
import * as styles from "./Form.styles";

export default function Form({ user, close }: FormProps): JSX.Element {
  const {
    formik,
    webcamRef,
    capture,
    showWebcam,
    handleWebcam,
    loading,
    createResponse,
    showCreateResponse,
  } = useForm({
    user,
    close,
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {loading && (
        <div className={styles.modal}>
          <Loader />
        </div>
      )}
      {showCreateResponse && (
        <div className={styles.modal}>
          {createResponse ? (
            <p className={styles.response_text}>User created succesfully</p>
          ) : (
            <p className={styles.response_text}>Sorry an error ocurred</p>
          )}
        </div>
      )}
      <button onClick={close} className={styles.close_button} type="button">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#FFFFFF"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            ></path>
          </g>
        </svg>
      </button>
      <div className={styles.personal_info}>
        <p className={styles.title}>Personal information</p>
        <div className={styles.input_container}>
          <Label id="nombre">Nombre</Label>
          <Input id="nombre" type="text" {...formik.getFieldProps("nombre")} />
          {formik.errors.nombre && formik.touched.nombre ? (
            <ErrorLabel>{formik.errors.nombre}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="apellidoPaterno">Apellido paterno</Label>
          <Input
            id="apellidoPaterno"
            type="text"
            {...formik.getFieldProps("apellidoPaterno")}
          />
          {formik.errors.apellidoPaterno && formik.touched.apellidoPaterno ? (
            <ErrorLabel>{formik.errors.apellidoPaterno}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="apellidoMaterno">Apellido materno</Label>
          <Input
            id="apellidoMaterno"
            type="text"
            {...formik.getFieldProps("apellidoMaterno")}
          />
          {formik.errors.apellidoMaterno && formik.touched.apellidoMaterno ? (
            <ErrorLabel>{formik.errors.apellidoMaterno}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="edad">Edad</Label>
          <Input id="edad" type="number" {...formik.getFieldProps("edad")} />
          {formik.errors.edad && formik.touched.edad ? (
            <ErrorLabel>{formik.errors.edad}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="email">Email</Label>
          <Input id="email" type="text" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email ? (
            <ErrorLabel>{formik.errors.email}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="fechaNac">Fecha de nacimiento</Label>
          <Input
            id="fechaNac"
            type="text"
            {...formik.getFieldProps("fechaNac")}
          />
          {formik.errors.fechaNac && formik.touched.fechaNac ? (
            <ErrorLabel>{formik.errors.fechaNac}</ErrorLabel>
          ) : null}
        </div>
      </div>
      <div className={styles.addres_info}>
        <p className={styles.title}>Address information</p>
        <div className={styles.input_container}>
          <Label id="calle">Calle</Label>
          <Input id="calle" type="text" {...formik.getFieldProps("calle")} />
          {formik.errors.calle && formik.touched.calle ? (
            <ErrorLabel>{formik.errors.calle}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="numero">Número</Label>
          <Input
            id="numero"
            type="number"
            {...formik.getFieldProps("numero")}
          />
          {formik.errors.numero && formik.touched.numero ? (
            <ErrorLabel>{formik.errors.numero}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="colonia">Colonia</Label>
          <Input
            id="colonia"
            type="text"
            {...formik.getFieldProps("colonia")}
          />
          {formik.errors.colonia && formik.touched.colonia ? (
            <ErrorLabel>{formik.errors.colonia}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="delegacion">Delegacion</Label>
          <Input
            id="delegacion"
            type="text"
            {...formik.getFieldProps("delegacion")}
          />
          {formik.errors.delegacion && formik.touched.delegacion ? (
            <ErrorLabel>{formik.errors.delegacion}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="estado">Estado</Label>
          <Input id="estado" type="text" {...formik.getFieldProps("estado")} />
          {formik.errors.estado && formik.touched.estado ? (
            <ErrorLabel>{formik.errors.estado}</ErrorLabel>
          ) : null}
        </div>
        <div className={styles.input_container}>
          <Label id="cp">Código postal</Label>
          <Input id="cp" type="number" {...formik.getFieldProps("cp")} />
          {formik.errors.cp && formik.touched.cp ? (
            <ErrorLabel>{formik.errors.cp}</ErrorLabel>
          ) : null}
        </div>
      </div>
      <div className={styles.photo_container}>
        <img
          src={formik.values.imagen !== "" ? formik.values.imagen : User}
          alt="user image"
          width={100}
          height={100}
          className={styles.user_image}
        />
        {formik.errors.imagen && formik.touched.imagen ? (
          <ErrorLabel>{formik.errors.imagen}</ErrorLabel>
        ) : null}
        <button type="button" onClick={handleWebcam}>
          Take a selfie
        </button>
      </div>
      {showWebcam && (
        <div className={styles.webcam_container}>
          <p>Please center your face in the camera frame</p>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={300}
            height={300}
            videoConstraints={{ facingMode: "user" }}
          />
          <button
            type="button"
            onClick={() => {
              capture();
              handleWebcam();
            }}
          >
            Tomar Foto
          </button>
        </div>
      )}
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
