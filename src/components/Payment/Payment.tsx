import { Button, Typography } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface PaymentProps {
  amount: number;
  onSuccess: () => void;
}

const Payment = ({ amount, onSuccess }: PaymentProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // Send paymentMethod.id to your backend
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Pay ${amount.toFixed(2)}
      </Typography>

      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
          },
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!stripe}
        sx={{ mt: 2, bgcolor: "#2E8B57", "&:hover": { bgcolor: "#3CB371" } }}
      >
        Pay Now
      </Button>
    </form>
  );
};

export default Payment;
