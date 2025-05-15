//

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCartItems,
  } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
      PaperProps={{ sx: { width: { xs: "100%", sm: 352 }, padding: 2 } }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Your Cart</Typography>
        <IconButton onClick={closeCart}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Box>
              <Box>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width="60px"
                  height="60px"
                  style={{ objectFit: "cover" }}
                />
                <Box flexGrow={1}>
                  <Typography>{item.title}</Typography>
                  <Typography>
                    ${item.price} * {item.quantity}
                  </Typography>
                </Box>
                <IconButton onClick={() => removeFromCart(item.id)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Adding Quantity Buttons */}
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${calculateTotal().toFixed(2)}
          </Typography>
          {isCheckingOut ? (
            <CheckoutForm
              onSubmit={(values) => {
                alert(JSON.stringify(values));
                clearCartItems();
                closeCart();
              }}
            />
          ) : (
            <Button
              fullWidth
              variant="contained"
              onClick={() => setIsCheckingOut(true)}
              sx={{ bgcolor: "#2E8B57", "&:hover": { bgcolor: "#3CB371" } }}
            >
              Proceed to Checkout
            </Button>
          )}
        </>
      )}
    </Drawer>
  );
};

export default CartDrawer;
