import React from 'react';

const YandexPayButton = (props) => {
  let form = null;

  return (<div style={{cursor: 'pointer'}} onClick={()=>{ form.submit(); }} className={props.className} >{props.name}
            <form ref={node => { form = node; }} style={{'display': 'none'}} method="POST" className="btn btn-sm btn-outline-secondary" action="https://money.yandex.ru/quickpay/confirm.xml" >
               <input type="hidden" name="receiver" value="41001846082199" />
               <input type="hidden" name="formcomment" value="test" />
               <input type="hidden" name="short-dest" value="test" />
               <input type="hidden" name="label" value={props.payId} />
               <input type="hidden" name="quickpay-form" value="small" />
               <input type="hidden" name="targets" value="add pay" />
               <input type="hidden" name="sum" value={props.sum} data-type="number" />
               <input type="hidden" name="comment" value="" />
               <input type="hidden" name="need-fio" value="false" />
               <input type="hidden" name="need-email" value="false" />
               <input type="hidden" name="need-phone" value="false" />
               <input type="hidden" name="need-address" value="false" />
               <input type="hidden" name="paymentType" value="AC" />
            </form>
        </div>
      )
};

export default YandexPayButton;
