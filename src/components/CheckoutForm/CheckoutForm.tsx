import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface CheckoutFormProps {
  onSubmit: (values: { name: string; email: string; address: string }) => void;
}

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        id="name"
        name="name"
        label="Full Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        margin="normal"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        margin="normal"
        id="address"
        name="address"
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, bgcolor: "#2E8B57", "&:hover": { bgcolor: "#3CB371" } }}
      >
        Place Order
      </Button>
    </form>
  );
};

export default CheckoutForm;
