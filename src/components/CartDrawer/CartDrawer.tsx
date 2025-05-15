//

import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDrawer = () => {
  const { cartItems, isCartOpen, closeCart, removeFromCart } =
    useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
      PaperProps={{ sx: { width: 350, padding: 2 } }}
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
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${calculateTotal().toFixed(2)}
          </Typography>
          <button
            style={{
              background: "#2E8B57",
              color: "white",
              padding: "12px",
              width: "100%",
              border: "none",
              marginTop: "16px",
              borderRadius: "4px",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </Drawer>
  );
};

export default CartDrawer;
