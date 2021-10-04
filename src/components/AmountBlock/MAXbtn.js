import React from "react";
import {setAmountForSend} from "../../store/actions/walletSeed";
import {useDispatch, useSelector} from "react-redux";

function MaxBtn(props) {
    const currentTokenForSend = useSelector(
        (state) => state.walletSeedReducer.currentTokenForSend,
    );
    const dispatch = useDispatch();

    function handleSetMax() {
        props.setMAX ?
            props.setMAX()
            :
            dispatch(setAmountForSend(currentTokenForSend.balance));
    }

    return (
        <div onClick={() => handleSetMax()} className="send_max_btn">
            MAX
        </div>
    );
}

export default MaxBtn;
