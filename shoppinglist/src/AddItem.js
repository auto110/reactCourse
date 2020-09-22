import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddItem = (props) => {
    // The Dialog component has one prop called open and, if the value is true, the dialog is visible
    // The default value of that prop will be false and the dialog is hidden. 
    const [open, setOpen] = React.useState(false);
    // To collect data from a user, we have to introduce one more state. The state is an object with two attributes—product and amount.
    const [item, setItem] = React.useState({product: '', amount: ''});

    // The button that opens the modal dialog sets the open state value to true and the dialog opens.
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // We also have to handle the change event of the input fields, so that we can access the values that have been typed. 
    // Handle the change of input field values
    const handleChange = (e) => {
        setItem({...item, [e.target.name]:e.target.value})
    }
    // Calls addItem function (in props) and pass item state into it.
    const addItem = () => {
        // Because we get the addItem function from the props, we can call it using the props keyword. 
        props.addItem(item);
        // When the button inside the modal form is clicked, the addItem function is called and the modal form is closed by setting open value to false.
        handleClose();
    }


    return (
        <div>
            {/* 添加按钮 */}
             <Button style={{marginTop: 10}} variant="outlined" color="primary" onClick={handleOpen}>
                Add Item
            </Button>

            {/* 表单输入弹窗 */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Item</DialogTitle>

                {/* Inside the DialogContent component, we will add two inputs to collect data from a user.  */}
                <DialogContent>
                    {/* The value attributes of text fields must be the same as the state where we want to save the typed value. */}
                    <TextField autoFocus margin="dense" value={item.product} 
                        onChange={handleChange} name="product" label="Product" fullWidth />
                    <TextField autoFocus margin="dense" value={item.amount} 
                        onChange={handleChange} name="amount" label="Amount" fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    {/* The function creates an object from the input field values and calls the App.js component's addItem function, which finally adds a new item to the state array and re-renders the UI.  */}
                    <Button onClick={addItem} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddItem;