import { useState } from "react";

const PaymentBtn = ({btnInfo}) => {
const [addClass , setAddClass] = useState()

    return (
    <button type='button' className='payment-btn'>{btnInfo}</button>
    )
}

export default PaymentBtn;