import './order.css'
import ButtonOrder from '../../components/Order buttons/orderButton'
import { useState,useEffect } from 'react'
import Basket from '../../assets/icon/Vector.svg'

import OrderTotal from '../../components/order total/orderTotal'

const Order = ({setDrawerState, drawerState,resItems}) => {
    const [btnState, setBtnState] = useState('Dine In')
    const totalPrice = resItems.reduce((a,c)=> a+c.foodPrice*c.qty,0)
    console.log(resItems)

    const clickFn = (evt) => {
        const  input = document.querySelectorAll('.res-inp')

        for (let i = 0; i < input.length; i++) {
            if (input[i].dataset.id === evt.currentTarget.id) {
                input[i].value = ''
            }
        }
    }
    return (
        <div className='order-box'>
            <h1 className='order-info'>Orders #34562</h1>
            <div className='order-btns'>
                <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='Dine In' />
                <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='To Go' />
                <ButtonOrder buttonActive={btnState} setBtnState={setBtnState} buttonInfo='Delivery' />
            </div>
            <div className='row'>
                <div>
                    <p className='order-items'>Item</p>
                </div>
                <div className='row-order-left'>
                    <p className='order-items'>Qty</p>
                    <p className='order-items'>Price</p>
                </div>
               
            </div>
            <hr className="bottom-line"/>
            <div className='zakaz'>
                {
                    resItems.map((item,index)=>
                        <div className="all-item" id="allItem">
                            <div className="res-item">
                                <img className="img-item" src={item.foodImg} alt={item.foodName}/>
                                <div className="food-item">
                                    <h4 className="order-text">{item.foodName.substring(0,18)} ...</h4>
                                    <h4 className="order-text">{item.foodPrice}</h4>
                                </div>
                                <div className="item-value">
                                    <h4 className="item-value-txt">{item.qty}</h4>
                                </div>
                                <h3 className="total-text">{(item.foodPrice*item.qty).toFixed(2)}</h3>
                            </div>
                            <div className="order-inp">
                                <input data-id={index} className="res-inp" type="text" placeholder="Order Note..."/>
                                <button id={index} className="order-del" onClick={clickFn}>
                                    <img className="deleteBtn" src={Basket} alt=""/>
                                </button>

                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                    <OrderTotal  drawerState={drawerState} setDrawerState={setDrawerState} totalPrice={totalPrice}/>

            </div>
        </div>

    )
}

export default Order;