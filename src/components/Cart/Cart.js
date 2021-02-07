import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';
import CartItem from './CartItem/CartItem'

const Cart = ({cart}) => {
    const classes = useStyles();
  //  const isEmpty = !cart.line_items
    const EmptyCart = () => {
        return (<Typography varient="subtitle1">You have no items in you cart, start adding some!</Typography>)
    }

    const FilledCart = () => {
        return (<>
            <Grid container spacing={3}>
            {cart.line_items.map((item)=>{
                return (<Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} />
                </Grid>)
                 })}
            </Grid>
            <div className={classes.cardDetails}>
                 <Typography>
                     Subtotal : { cart.subtotal.formatted_with_symbol }
                </Typography>   
                <div>
                    <Button className={classes.emptyButton}
                    size="large"
                    type="button"
                    varient="container"
                    color="secondary"
                    >Empty Cart</Button>

                    <Button className={classes.checkoutButton}
                    size="large"
                    type="button"
                    varient="container"
                    color="primary"
                    >Checkout</Button>
                </div>
            </div> 
        </>)
    }

    if( !cart.line_items)
    {
        console.log("Loading ...")
        return "Loading..."
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} varient="h3">Your Shopping Cart</Typography>
            {  !cart.line_items ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;